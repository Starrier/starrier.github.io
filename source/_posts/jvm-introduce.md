---
title: JVM 简介
date: 2022-01-07 14:18:34
author: Starrier
tags: [JVM]
excerpt: JVM 简介
swiper:
keywords: [JVM]
description: JVM 简介
---

# JVM 简介

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

#### 方法区回收规则

方法区存储内容是否需要回收的判断可就不一样咯。方法区主要回收的内容有：废弃常量和无用的类。对于废弃常量也可通过引用的可达性来判断，但是对于无用的类则需要同时满足下面 3 个条件：

- 该类所有的实例都已经被回收，也就是 `Java` 堆中不存在该类的任何实例；
  
- 加载该类的 `ClassLoader` 已经被回收；

- 该类对应的 `java.lang.Class` 对象没有在任何地方被引用，无法在任何地方通过反射访问该类的方法。


##### 参考文章

- [Java虚拟机（JVM）你只要看这一篇就够了！](https://blog.csdn.net/qq_41701956/article/details/81664921)

- [JVM的垃圾回收机制 总结(垃圾收集、回收算法、垃圾回收器)](https://www.cnblogs.com/aspirant/p/8662690.html)
