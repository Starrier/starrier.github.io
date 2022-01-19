---
title: 深入理解 Java 多线程 Join
date: 2021-06-16 15:09:24
author: Starrier
tags: [多线程]
excerpt: 深入理解 Java 多线程 Join
swiper:
keywords: [多线程]
description: 深入理解 Java 多线程 Join
---

# 深入理解 Java 多线程 Join

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

当前线程需要等待之前的线程执行完成后，才能继续运行。

Join 可以阻塞的本质是，底层源码会最终调用 Object wait 方法。 方法 wait 是被 synchronize 修饰的，锁为  this。
wait/notifyall

### 参考文章

- [(四)Thread.join的作用和原理](https://segmentfault.com/a/1190000017255019)
