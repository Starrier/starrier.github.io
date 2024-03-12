---
title: 深入理解 AQS
date: 2022-01-07 14:22:33
author: Starrier
tags: [多线程]
excerpt: 深入理解 AQS
swiper:
keywords: [多线程]
description: 深入理解 AQS
---

# 深入理解 AQS

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

> 抽象队列同步器 `AbstractQuenedSynchronizer`。是除了 `java` 自带的 `synchronized` 关键字之外的锁机制。

##### 原理

如果请求的共享资源空闲，则将当前线程置位工作线程，共享资源设置为锁定状态。
如果请求的共享资源别占用，则使用一套阻塞等待，以及唤醒分配的锁机制。这个机制由 AQS 的 CLH 队列保证，即将暂时不使用的线程
放入队列中。

> CLH（Craig，Landin，and Hagersten）队列是一个虚拟的双向队列，虚拟的双向队列即不存在队列实例，仅存在节点之间的关联关系。

> `AQS` 就是基于 `CLH` 队列，用 `volatile` 修饰共享变量 `state`，线程通过 `CAS` 去改变状态符，成功则获取锁成功，失败则进入等待队列，等待被唤醒。

实现了 AQS 的锁有：

- 自旋锁
- 互斥锁
- 读写锁
- 信号量
- 栅栏

AQS  通过调用 Unsafe 类的 CAS 来保证原子性。

AQS 


##### 参考文章

- [深入分析AQS实现原理](https://segmentfault.com/a/1190000017372067)

- [Java并发编程：什么是JDK内置并发框架AQS](https://mp.weixin.qq.com/s?__biz=MzU3OTc1MDM1Mg==&mid=2247495050&idx=1&sn=9c3b9bd08267309e823c0067f183afe0&chksm=fd63fd35ca147423f268b4416f89424c4d61541a5086e96f58b2c169230744d0c37fa2f0ce64&scene=21#wechat_redirect)

- [Java 并发编程：AQS 的原子性如何保证](https://xie.infoq.cn/article/05516b2a11d576b74e49df634)

- [(九)深入分析AQS实现原理](https://segmentfault.com/a/1190000017372067)

- [AQS详解（面试）](https://blog.csdn.net/mulinsen77/article/details/84583716)
