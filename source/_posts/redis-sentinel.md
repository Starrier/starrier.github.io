---
title: 深入理解 Redis 哨兵机制
date: 2022-01-19 21:33:51
author: Starrier
tags: [Redis]
excerpt: 深入理解 Redis 哨兵机制
swiper: 
keywords: [Redis]
description: 深入理解 Redis 哨兵机制
---

# 深入理解 Redis 哨兵机制

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

Redis 哨兵机制的主要作用是监控 Redis 的运行状态，并在主节点发生故障的时候可以第一时间进行
主库的切换。实现故障转义，保障系统的可用性。

哨兵具备以下能力：

- 监控 

- 自动切换主库

- 通知



##### 参考文章

- [深入剖析Redis系列(二) - Redis哨兵模式与高可用集群](https://juejin.cn/post/6844903663362637832#heading-26)
