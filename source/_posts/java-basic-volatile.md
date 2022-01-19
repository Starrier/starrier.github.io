---
title: java volatile
date: 2019-02-19 21:58:27
author: Imperator
tags: [Java 基础]
excerpt: java volatile 分析
---


## 深入理解 JVM - volatile

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

#### Volatile 和 Synchronized 四个不同点：

1. 粒度不同，前者锁对象和类，后者针对变量。
2. syn 阻塞，volatile 线程不阻塞
3. syn 保证三大特性，volatile 不保证原子性
4. syn 编译器优化，volatile 不优化

#### volatile具备两种特性：

1. 保证此变量对所有线程的可见性，指一条线程修改了这个变量的值，新值对于其他线程来说是不可见的，但并不是多线程安全的。
2. 禁止指令重排序优化。

#### Volatile 如何保证内存可见性:

1. 当写一个 volatile 变量时，JVM 会把该线程对应的本地内存中的共享变量刷新到主内存中。
2. 当读一个 volatile 变量时，JVM 会把该线程对应的本地内存置为无效。线程接下来将从主内存中读取共享变量。

同步：就是一个任务的完成需要依赖另外一个任务，只有等待被依赖的任务完成后，依赖任务才能完成。

异步：不需要等待被依赖的任务完成，只是通知被依赖的任务要完成什么工作，只要自己任务完成了就算完成了，被依赖的任务是否完成会通知回来。（异步的特点就是通知）。


### 参考文献

- [深入解析 volatile 、CAS 的实现原理](https://blog.csdn.net/zero__007/article/details/90545073)

- [一文读懂Java内存模型(JMM)及volatile关键字](https://segmentfault.com/a/1190000037799975)
