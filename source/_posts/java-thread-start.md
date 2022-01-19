---
title: Java 多线程 Start
date: 2022-01-19 20:18:23
author: Starrier
tags: [多线程]
excerpt: Java 多线程 Start
swiper:
keywords: [多线程]
description: Java 多线程 Start
---

# Java 多线程 Start

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

线程的 创建

Java 创建线程后必须调用 Start 方法。start 方法会调用 本地方法 start0()。该方法会调用虚拟机启动一个本地线程，本地线程会调用


线程的终止

不推荐使用 Thread.stop() 因为该方法不会保证资源被正常回收。使用 Thread 的中断机制。



当前系统创建线程的方法创建一个线程，创建的线程执行后会进行函数回调，调用 run 方法执行业务逻辑。

##### 参考文章

- [(三)从jvm层面了解线程的启动和停止](https://segmentfault.com/a/1190000017255007)
