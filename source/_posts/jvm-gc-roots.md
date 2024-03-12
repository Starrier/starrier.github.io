---
title: 深入理解 JVM GC roots
date: 2022-01-19 11:37:31
author: Starrier
tags: [JVM]
excerpt: 深入理解 JVM GC roots
swiper:
keywords: [JVM]
description: 深入理解 JVM GC roots
---

#  深入理解 JVM GC roots

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

### 安全点

安全点是指一些特殊位置（一段禁止访问的内存，代码访问到此处时，会促使当前线程进入阻塞），当代码执行到特殊位置时，此时的虚拟机状态是安全可控的。
虚拟机可以通过 VM 线程找到活跃对象（通过一开始创建的 oopMap），检查并更新 Mutator。

#### 进入安全点方式

1. G1 并发线程进行安全点

2. 解释线程进入安全点

3. 编译线程进入安全点

4. 正在执行本地代码的线程进入安全点


##### 参考文章

- [JVM技术之旅-GCRoots定位及Mutator线程中断](https://juejin.cn/post/6952376918855385125)

- [【jvm学习笔记八】G1-线程中的安全点](https://www.jianshu.com/p/e68a422c93cb)

- [SATB的一些理解](https://segmentfault.com/a/1190000039300766)
