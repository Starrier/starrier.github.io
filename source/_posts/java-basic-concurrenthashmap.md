---
title: java 数据机构 -concurrenthashmap
date: 2022-02-15 21:34:30
author: Starrier
tags: [Java]
excerpt: java 数据机构 -concurrenthashmap
swiper:
keywords: [Java]
description: java 数据机构 -concurrenthashmap
---

#  java 数据结构 -concurrenthashmap

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

ConcurrentHashMap
 
诸如  size isEmpty 这类方法，会存在中间态，只能用于参考不能用于流程计算，否则也会存在线程安全问题。

putAll 这样的数据也不安全。可能会获取到部分数据

##### 参考文章

- [1](http://antsnote.club/2018/05/31/Java-ConcurrentHashMap/)

- [ConcurrentHashMap 原理](https://www.cnblogs.com/jxxblogs/p/12517197.html)
