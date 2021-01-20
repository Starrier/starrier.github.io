---
title: java-basic-collection-linked-blocking-queue
date: 2021-01-13 20:16:30
tags:
---

# LinkedBlockingQueue

LinkedBlockingQueue 由单链表实现，只能从 head 中取元素，向 tail 添加元素。添加元素预计获取元素都有独立的锁，即 LinkedBlockingQueue 是读写分离的，可以并行执行。LinkedBlockingQueue 采用可重入锁（ReentrantLock）来保证并发环境下的线程安全。

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

1. 

```java
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
```
