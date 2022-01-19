---
title: 深入理解 Java 线程池 - 实战
date: 2021-01-31 14:57:26
author: Starrier
tags: [多线程]
excerpt: 深入理解 Java 线程池 - 实战
swiper:
keywords: [java,thread,threadpool,多线程，线程池]
description: 深入理解 Java 线程池 - 实战
---

# 深入理解 Java 线程池 - 实战

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 PR 谢谢~~

#### 为什么需要线程池

我们知道创建线程的常用方式就是 new Thread()，而每一次new Thread()都会重新创建一个线程，而线程的创建和销毁都需要耗时的，不仅会消耗系统资源，还会降低系统的稳定性。在 jdk1.5 的 JUC 包中有一个 Executors，他能使我们创建的线程得到复用，不会频繁的创建和销毁线程。

合理的使用线程池可以带来以下几个好处：

1. 降低资源消耗。
   
> 通过重复利用已创建的线程，降低线程创建和销毁造成的消耗。

2. 提高响应速度。
   
> 当任务到达时，任务可以不需要等到线程创建就能立即执行。

3. 增加线程的可管理性。
   
> 线程是稀缺资源，使用线程池可以进行统一分配，调优和监控。

## 一. Java 线程池详解

![](https://pic3.zhimg.com/80/v2-10a39f5ab6ff4780007537e2e73ee106_1440w.jpg)


- corePoolSize 核心线程池大小
- maximumPoolSize 线程池允许的最大线程数
- keepAliveTime 线程池没有任务时存活的最长时间
- unit 存活时间的单位
- workQueue 阻塞队列
- threadFactory 线程工厂
- handler 线程饱和策略

### 1.**corePoolSize**：

线程池的核心池大小，在创建线程池之后，线程池默认没有任何线程。当有任务过来时，才会去创建线程并执行任务。直到创建的线程数量达到 corePoolSize。之后，再有任务进来时，就会被放入队列中。corePoolSize 表示允许线程池中允许同时运行的最大线程数。

如果执行了线程池的 prestartAllCoreThread() 方法，线程池会提前创建并启动所有核心线程。

### 2.**maximumPoolSize**：

线程池允许的最大线程数，他表示最大能创建多少个线程。maximunPoolSize 肯定是大于等于 corePoolSize。

### 3. **keepAliveTime**：

表示线程没有任务时，最多保持多久然后停止。默认情况下，只有线程池中的线程数大于 corePoolSize 时，keepAliveTime 才会起作用。即，当线程池中的线程数大于 corePoolSize 并且一个线程空闲时间达到了 keepAliveTime 时，那么就是会 shutdown。

### 4. **Unit**：

keepAliveTime 的单位。

### 5. **workQueue**：

一个阻塞队列，用来存储等待执行的任务，当线程池中的线程数超过它的 corePoolSize 时，线程会进入阻塞队列进行阻塞等待。通过 workQueue，线程池实现了阻塞功能。

### 6. **threadFactory**：

线程工厂，用来创建线程。

### 7. **handler**：

表示拒绝处理任务时的策略。


## 可选择的阻塞队列 BlockingQueue 详解


主要有3种类型的BlockingQueue：

### 1. 无界队列

队列大小无限制，常用的为无界的 `LinkedBlockingQueue`，使用该队列做为阻塞队列时要尤其当心，当任务耗时较长时可能会导致大量新任务在队列中堆积最终导致 OOM。阅读代码发现，`Executors.newFixedThreadPool` 采用就是 `LinkedBlockingQueue`，而楼主踩到的就是这个坑，当QPS很高，发送数据很大，大量的任务被添加到这个无界 `LinkedBlockingQueue` 中，导致 cpu 和内存飙升服务器挂掉。

### 2. 有界队列

常用的有两类，一类是遵循 FIFO 原则的队列如 `ArrayBlockingQueue`与有界的 `LinkedBlockingQueue`，另一类是优先级队列如 `PriorityBlockingQueue`。`PriorityBlockingQueue` 中的优先级由任务的 `Comparator` 决定。
使用有界队列时队列大小需和线程池大小互相配合，线程池较小有界队列较大时可减少内存消耗，降低 cpu 使用率和上下文切换，但是可能会限制系统吞吐量。

### 3. 同步移交队列

如果不希望任务在队列中等待而是希望将任务直接移交给工作线程，可使用 `SynchronousQueue` 作为等待队列。`SynchronousQueue` 不是一个真正的队列，而是一种线程之间移交的机制。要将一个元素放入 `SynchronousQueue` 中，必须有另一个线程正在等待接收这个元素。只有在使用无界线程池或者有饱和策略时才建议使用该队列。




可选择的饱和策略RejectedExecutionHandler详解


### 1. AbortPolicy 中止策略

该策略是默认饱和策略。

```javascript
public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
    throw new RejectedExecutionException("Task " + r.toString() + " rejected from " + e.toString());
}
```

使用该策略时在饱和时会抛出RejectedExecutionException（继承自RuntimeException），调用者可捕获该异常自行处理。

### 2. DiscardPolicy 抛弃策略

```javascript
public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
}
```

如代码所示，不做任何处理直接抛弃任务

### 3. DiscardOldestPolicy 抛弃旧任务策略

```javascript
public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
    if (!e.isShutdown()) {
        e.getQueue().poll();
        e.execute(r);
    }
}
```

如代码，先将阻塞队列中的头元素出队抛弃，再尝试提交任务。如果此时阻塞队列使用 `PriorityBlockingQueue` 优先级队列，将会导致优先级最高的任务被抛弃，因此不建议将该种策略配合优先级队列使用。

### 4. CallerRunsPolicy 调用者运行

```javascript
public void rejectedExecution(Runnable r, ThreadPoolExecutor e) {
    if (!e.isShutdown()) {
        r.run();
    }
}
```

既不抛弃任务也不抛出异常，直接运行任务的run方法，换言之将任务回退给调用者来直接运行。使用该策略时线程池饱和后将由调用线程池的主线程自己来执行任务，因此在执行任务的这段时间里主线程无法再提交新任务，从而使线程池中工作线程有时间将正在处理的任务处理完成。


## Java 提供的四种常用线程池解析
   既然楼主踩坑就是使用了 JDK 的默认实现，那么再来看看这些默认实现到底干了什么，封装了哪些参数。简而言之 Executors 工厂方法Executors.newCachedThreadPool() 提供了无界线程池，可以进行自动线程回收；Executors.newFixedThreadPool(int) 提供了固定大小线程池，内部使用无界队列；Executors.newSingleThreadExecutor() 提供了单个后台线程。

详细介绍一下上述四种线程池。

### 1. newCachedThreadPool

```javascript
public static ExecutorService newCachedThreadPool() {
    return new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60L, TimeUnit.SECONDS, new SynchronousQueue<Runnable>());
}
```

在 `newCachedThreadPool` 中如果线程池长度超过处理需要，可灵活回收空闲线程，若无可回收，则新建线程。
初看该构造函数时我有这样的疑惑：核心线程池为0，那按照前面所讲的线程池策略新任务来临时无法进入核心线程池，只能进入 `SynchronousQueue` 中进行等待，而SynchronousQueue的大小为1，那岂不是第一个任务到达时只能等待在队列中，直到第二个任务到达发现无法进入队列才能创建第一个线程？
这个问题的答案在上面讲SynchronousQueue时其实已经给出了，要将一个元素放入SynchronousQueue中，必须有另一个线程正在等待接收这个元素。因此即便SynchronousQueue一开始为空且大小为1，第一个任务也无法放入其中，因为没有线程在等待从SynchronousQueue中取走元素。因此第一个任务到达时便会创建一个新线程执行该任务。

### 2. newFixedThreadPool

```javascript
public static ExecutorService newFixedThreadPool(int nThreads) {
return new ThreadPoolExecutor(nThreads, nThreads,
0L, TimeUnit.MILLISECONDS,
new LinkedBlockingQueue<Runnable>());
}
```

看代码一目了然了，线程数量固定，使用无限大的队列。再次强调，楼主就是踩的这个无限大队列的坑。

### 3. newScheduledThreadPool

创建一个定长线程池，支持定时及周期性任务执行。

public static ScheduledExecutorService newScheduledThreadPool(int corePoolSize) {
return new ScheduledThreadPoolExecutor(corePoolSize);
}

在来看看 `ScheduledThreadPoolExecutor()`的构造函数

```javascript
public ScheduledThreadPoolExecutor(int corePoolSize) {
super(corePoolSize, Integer.MAX_VALUE, 0, NANOSECONDS,
new DelayedWorkQueue());
}
```

ScheduledThreadPoolExecutor的父类即ThreadPoolExecutor，因此这里各参数含义和上面一样。值得关心的是DelayedWorkQueue这个阻塞对列，在上面没有介绍，它作为静态内部类就在ScheduledThreadPoolExecutor中进行了实现。简单的说，DelayedWorkQueue是一个无界队列，它能按一定的顺序对工作队列中的元素进行排列。

### 4. newSingleThreadExecutor

创建一个单线程化的线程池，它只会用唯一的工作线程来执行任务，保证所有任务按照指定顺序(FIFO, LIFO, 优先级)执行。

```javascript
public static ScheduledExecutorService newSingleThreadScheduledExecutor() {
return new DelegatedScheduledExecutorService
(new ScheduledThreadPoolExecutor(1));
}
```

首先 new了一个线程数目为 1 的 `ScheduledThreadPoolExecutor`，再把该对象传入 `DelegatedScheduledExecutorService` 中，看看 `DelegatedScheduledExecutorService` 的实现代码：

```javascript
DelegatedScheduledExecutorService(ScheduledExecutorService executor) {
super(executor);
e = executor;
}
```

在看看它的父类

```javascript
DelegatedExecutorService(ExecutorService executor) {
e = executor;
}
```

其实就是使用装饰模式增强了 `ScheduledExecutorService`（1）的功能，不仅确保只有一个线程顺序执行任务，也保证线程意外终止后会重新创建一个线程继续执行任务。


#####  参考文章

- [深入 Java 线程池：从设计思想到源码解读](https://xie.infoq.cn/article/d0120c6e1518cec1da65cd31f)
