---
title:  深入理解 Redis Hash 数据结构
date: 2022-01-25 17:54:27
author: Starrier
tags: [Redis]
excerpt:  深入理解 Redis Hash 数据结构
swiper:
keywords: [Redis]
description:  深入理解 Redis Hash 数据结构
---

# 深入理解 Redis Hash 数据结构

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

Redis Hash 的扩容原理

Redis 的 hash 有个字典，字典中 dicth 的数据结构，里面有 ht[0] 和 ht[1]。
初始时，当前数据都存储在 ht[0]，h[1] 在进行扩容时使用。当数据需要扩容的时候。h[1] 在进行扩容缩容的时候，大小为当前 ht[0] 中已使用数据长度的最小 2 次冥的值。
Hash 扩容使用的是 渐进式 rehash。

Redis 的扩容阶段，分散在 reids 的每一次操作中。
首先，为 ht[1] 预分配空间。

##### 参考文章

- [redis中hash扩容过程](https://cloud.tencent.com/developer/article/1873205)
