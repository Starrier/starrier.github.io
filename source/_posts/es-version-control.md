---
title: ES  数据更新 版本控制
date: 2022-02-15 19:23:05
author: Starrier
tags: [ES]
excerpt: ES  数据更新 版本控制
swiper:
keywords: [ES]
description: ES  数据更新 版本控制
---

#  ES  数据更新 版本控制

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

会比较 version 字段。只有比当前的 version 大 才能更新。

集群同步数据的时候，只有收到的version 大于等于当前的 version 才会进行更新。

##### 参考文章

- [Elasticsearch系列---并发控制及乐观锁实现原理](https://segmentfault.com/a/1190000021199668)
