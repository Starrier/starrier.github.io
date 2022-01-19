---
title: 深入理解 Java 多线程 - synchronized
date: 2021-05-13 20:40:18
author: Starrier
tags: [多线程]
excerpt: 深入理解 Java 多线程 - synchronized
swiper:
keywords: [多线程,synchronized]
description: 深入理解 Java 多线程 - synchronized
---

# 深入理解 Java 多线程 - synchronized

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

ReentrantLock 独有的功能

1.`ReenTrantLock` 可以指定是公平锁还是非公平锁。而 `synchronized` 只能是非公平锁。所谓的公平锁就是先等待的线程先获得锁。

2.`ReenTrantLock` 提供了一个 `Condition`（条件）类，用来实现分组唤醒需要唤醒的线程们，而不是像 `synchronized` 要么随机唤醒一个线程要么唤醒全部线程。

3.`ReenTrantLock` 提供了一种能够中断等待锁的线程的机制，通过 `lock.lockInterruptibly()` 来实现这个机制。

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~


##### 参考文章

- [深度分析：锁升级过程和锁状态，看完这篇你就懂了！](https://segmentfault.com/a/1190000022904663)

- [Synchronized 与 ReentrantLock 的区别！](https://www.cnblogs.com/javastack/p/12787771.html)
