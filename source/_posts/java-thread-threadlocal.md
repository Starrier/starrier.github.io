---
title: java-thread-threadlocal
date: 2021-05-31 09:11:05
author: Starrier
tags: [多线程]
excerpt: 深入理解 java 多线程 - ThreadLocal
swiper:
keywords: [多线程,ThreadLocal]
description: 深入理解 java 多线程 - ThreadLocal
---

# 深入理解 java 多线程 - ThreadLocal

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~


> ThreadLocal是通过线程隔离的方式防止任务在共享资源上产生冲突, 线程本地存储是一种自动化机制，可以为使用相同变量的每个不同线程都创建不同的存储。

相关问题


   1. 什么是ThreadLocal? 用来解决什么问题的? 
   2. 说说你对ThreadLocal的理解 
   3. 为什么ThreadLocal会造成内存泄露? 如何解决 
   4. 还有哪些使用ThreadLocal的应用场景? 
   5. ThreadLocal是如何实现线程隔离的? 
   6. ThreadLocal 原理

`ThreadLocal` 是一个将在多线程中为每一个线程创建单独的变量副本的类; 当使用 `ThreadLocal` 来维护变量时,`ThreadLocal` 会为每个线程创建单独的变量副本, 避免因多线程操作共享变量而导致的数据不一致的情况。



##### 参考文章

- [深入理解 ThreadLocal ](https://www.cnblogs.com/bingxinshuo/p/11503601.html)


