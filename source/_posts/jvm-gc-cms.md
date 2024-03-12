---
title: 深入理解 JVM 垃圾回收算法 - CMS
date: 2022-02-14 14:48:15
author: Starrier
tags: [JVM]
excerpt: 深入理解 JVM 垃圾回收算法 - CMS
swiper:
keywords: [JVM]
description: 深入理解 JVM 垃圾回收算法 - CMS
---

# 深入理解 JVM 垃圾回收算法 - CMS

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

#### CMS 触发回收的机制

1. 老年代的利用率达到阀值，默认是 92%。

2. 永久代的使用率达到阀值，默认是 92 %

3. 晋升担保失败
> 老年代会确认是否可以容纳新生代的全部对象以及老年代现有的对象，如果不可以的话，就会触发 GC。

4. 如果没有设置 UseCMSInitiatingOccupancyOnly，虚拟机会根据收集的数据决定是否触发（线上环境建议带上这个参数，不然会加大问题排查的难度）



##### 参考文章

- [图解 CMS 垃圾回收机制原理，-阿里面试题](https://www.cnblogs.com/aspirant/p/8663911.html)

