---
title: 深入理解 ES - HA
date: 2022-03-04 13:37:47
author: Starrier
tags: [ES]
excerpt: 深入理解 ES - HA
swiper:
keywords: [ES]
description: 深入理解 ES - HA
---

# 深入理解 ES - HA

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~


es 是准实时的，数据写⼊ 1 秒后可以搜索到；可能会丢失数据的。有 5 秒的数 据，停留在 停留在 buffer和os cache中，而不在磁盘上，此时宕机，会有5s数据丢失。


ES 的选举算法是 Bully，但是会存在问题，

- 假死
- 脑裂

解决方案是使用 Quorum


##### 参考文章

- [Elasticsearch脑裂问题详细分析以及解决方案](https://www.cnblogs.com/zh-ch/p/14166079.html)

- [Elasticsearch选举原理之Bully算法](https://zhuanlan.zhihu.com/p/110015509)
