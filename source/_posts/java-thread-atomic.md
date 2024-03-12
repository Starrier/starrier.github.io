---
title: 多线程 - 原子类
date: 2022-02-09 12:47:05
author: Starrier
tags: [多线程]
excerpt: 多线程 - 原子类
swiper: 
keywords: [多线程]
description: 多线程 - 原子类
---

#  多线程 - 原子类

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

Atomic 类底层使用的是 CAS 

UnSafe 类

AtomicStampedReference 类使用的 使用的是 时间版本号

除了比较值外 还加入了 时间版本号的比较。

##### 参考文章

- [聊聊并发（五）原子操作的实现原理](http://ifeve.com/atomic-operation/)

- [AtomicInteger的原理](https://www.cnblogs.com/scuwangjun/p/9098057.html)
