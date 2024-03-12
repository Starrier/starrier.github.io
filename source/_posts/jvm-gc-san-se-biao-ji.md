---
title: JVM-垃圾回收-三色标记算法
date: 2022-02-16 16:48:48
author: Starrier
tags: [JVM]
excerpt: JVM-垃圾回收-三色标记算法
swiper:
keywords: [JVM]
description: JVM-垃圾回收-三色标记算法
---

# JVM-垃圾回收-三色标记算法

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

JVM 中使用该标记算法的有 CMS  G1

但是 对存在 多标 漏标（浮动垃圾）

解决方案：CMS 增加引用环节
        G1 使用 SATB

##### 参考文章

- [JVM-垃圾回收-三色标记算法](https://juejin.cn/post/6862668022025453576)
