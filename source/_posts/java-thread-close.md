---
title: java-thread-close
date: 2021-05-13 19:05:59
author: Starrier
tags: [多线程]
excerpt: 深入理解多线程 - 如何优雅关闭线程
swiper:
keywords: [多线程，线程池关闭]
description: 深入理解多线程 - 如何优雅关闭线程
---

# 深入理解多线程 - 如何优雅关闭线程

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

线程是一段运行中的代码，我们不能终止在运行中的代码，因为如果我们强制关闭，那么线程中所使用的所有资源，例如文件描述符，网络连接等都不能正常关闭。Java 中的 destory 和 stop 函数都是官方明确不建议使用的。

合理的关闭办法是，让其运行完（也就是函数执行完毕）。干净的释放掉所有资源，然后退出。如果是一个不断循环运行的线程，就需要用到线程间的通信机制，让主线程通知其退出。

### 1. 轻量级阻塞和重量级阻塞

能够被中断的阻塞称为轻量级阻塞，对应的线程状态是 `WAITING` 或者 `TIMED_WAITING`。而像 synchronized 这中不能被终端的阻塞称为重量级阻塞。对应的状态是 BLOCKED。

thread.interrupted() 相对于给线程发送了一个唤醒的信号，所以如果线程此时恰好处于 WAITING 或者 TIMED_WAITING 状态，就会抛出一个 InterruptedException，并且线程被唤醒。而如果
线程此时并没有被阻塞，则线程什么都不会做。但在后续，线程可以判断自己是否收到过其他线程发来的终端信号，然后做一些对应的处理。

thread.isInterrupted() 与 Thread.interrupted() 都可以用来判断是否收到过终端信息，前者是非静态函数，后者是静态函数。二者的区别在于，前者只读取中断状态，后者不仅读取中断状态，还会重置中断标志位。




