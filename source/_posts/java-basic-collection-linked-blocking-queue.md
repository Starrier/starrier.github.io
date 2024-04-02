---
title: java-basic-collection-linked-blocking-queue
date: 2021-01-13 20:16:30
author: Imperator
tags: [Java]
---

# LinkedBlockingQueue

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

`LinkedBlockingQueue` 由单链表实现，只能从 `head` 中取元素，向 `tail` 添加元素。添加元素预计获取元素都有独立的锁，即 `LinkedBlockingQueue` 是读写分离的，可以并行执行。`LinkedBlockingQueue` 采用可重入锁（`ReentrantLock`）来保证并发环境下的线程安全。

函数签名：

``` java
public class LinkedBlockingDeque<E>
    extends AbstractQueue<E>
    implements BlockingDeque<E>, java.io.Serializable {
```

构造器

1. 无参构造器(默认的构造器)。默认容量是 Integer.MAX_VALUE，可能存在队列还没有满，但是内存已经满了。

```java
    public LinkedBlockingDeque() {
        this(Integer.MAX_VALUE);
    }
```

2. 指定大小的构造器

```java
 public LinkedBlockingDeque(int capacity) {
        if (capacity <= 0) throw new IllegalArgumentException();
        this.capacity = capacity;
    }
```

3. 接入一个容器的构造器

```java
public LinkedBlockingDeque(Collection<? extends E> c) {
        this(Integer.MAX_VALUE);
        addAll(c);
    }
```

### 常用操作

 |method| function|
 | ---| --- | 
 | take() |首选，当队列为空时候|
 |poll() | 弹出队列顶部元素，队列为空时，返回空|
 | peek() | 返回队列顶部元素，但顶元素不弹出，队列为空时，返回 null|
 | remove（object） | 移除某个元素，队列为空时，抛出异常。成功移除返回true|

##### 判断队列是否为空

size() 方法会遍历整个队列，时间复杂度为 O(n)，所以最好选择 isEmpty()

## take():

```` java
 public E takeFirst() throws InterruptedException {
        final ReentrantLock lock = this.lock;
        lock.lock();
        try {
            E x;
            while ( (x = unlinkFirst()) == null)
                notEmpty.await();
            return x;
        } finally {
            lock.unlock();
        }
    }
````

## put():

```java
put元素原理

基本过程：

1.判断元素是否为null，为null抛出异常

2.加锁(可中断锁)

3.判断队列长度是否到达容量，如果到达一直等待

4.如果没有队满，enqueue()在队尾加入元素

5.队列长度加1，此时如果队列还没有满，调用signal唤醒其他堵塞队列

```

### 二. 添加数据

- poll()：弹出队顶元素，队列为空时，返回空

- peek()：和 `poll` 类似，返回队队顶元素，但顶元素不弹出。队列为空时返回 `null`

- remove(Object o)：移除某个元素，队列为空时抛出异常。成功移除返回 `true`


### 三. 取出数据

添加数据

- put()：首选。队满是阻塞

- offer()：队满时返回 `false`


判断队列是否为空

`size()` 方法会遍历整个队列，时间复杂度为O(n),所以最好选用 `isEmtpy()`


LinkedBlockingQueue与LinkedBlockingDeque比较



LinkedBlockingDeque和LinkedBlockingQueue的相同点在于：
1. 基于链表
2. 容量可选，不设置的话，就是Int的最大值

和LinkedBlockingQueue的不同点在于：
1. 双端链表和单链表
2. 不存在哨兵节点
3. 一把锁+两个条件

AtomicInteger的getAndIncrment和getAndDcrement()等方法，这些方法分为两步，get和increment(decrement)，在get和increment中间可能有其他线程进入，导致多个线程get到的数值是相同的，也会导致多个线程累加后的值其实累加1.在这种情况下，使用volatile也是没有效果的，因为get之后没有对值进行修改，不能触发volatile的效果。


```java 
public class ProducerAndConsumer {
    public static void main(String[] args){

        try{
            BlockingQueue queue = new LinkedBlockingQueue(5);

            ExecutorService executor = Executors.newFixedThreadPool(5);
            Produer producer = new Produer(queue);
            for(int i=0;i<3;i++){
                executor.execute(producer);
            }
            executor.execute(new Consumer(queue));

            executor.shutdown();
        }catch (Exception e){
            e.printStackTrace();
        }

    }
}

class Produer implements  Runnable{

    private BlockingQueue queue;
    private int nums = 20;  //循环次数

    //标记数据编号
    private static volatile AtomicInteger count = new AtomicInteger();
    private boolean isRunning = true;
    public Produer(){}

    public Produer(BlockingQueue queue){
        this.queue = queue;
    }

    public void run() {
        String data = null;
        try{
            System.out.println("开始生产数据");
            System.out.println("-----------------------");

          while(nums>0){
                nums--;
                count.decrementAndGet();

                Thread.sleep(500);
                System.out.println(Thread.currentThread().getId()+ " :生产者生产了一个数据");
                queue.put(count.getAndIncrement());
            }
        }catch(Exception e){
            e.printStackTrace();
            Thread.currentThread().interrupt();
        }finally{
            System.out.println("生产者线程退出！");
        }
    }
}

class Consumer implements Runnable{

    private BlockingQueue queue;
    private int nums = 20;
    private boolean isRunning = true;

    public Consumer(){}

    public Consumer(BlockingQueue queue){
        this.queue = queue;
    }

    public void run() {

        System.out.println("消费者开始消费");
        System.out.println("-------------------------");

        while(nums>0){
            nums--;
            try{
                while(isRunning){
                    int data = (Integer)queue.take();
                    Thread.sleep(500);
                    System.out.println("消费者消费的数据是" + data);
            }

            }catch(Exception e){
                e.printStackTrace();
                Thread.currentThread().interrupt();
            }finally {
                System.out.println("消费者线程退出!");
            }

        }
    }
}
```
