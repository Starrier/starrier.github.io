---
title: 深入理解 Redis 字符串
date: 2022-01-25 19:10:24
author: Starrier
tags: [Redis]
excerpt: 深入理解 Redis 字符串
swiper:
keywords: [Redis]
description: 深入理解 Redis 字符串
---

# 深入理解 Redis 字符串

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

简单动态字符串

SDS 在 Redis 中的作用 

1. 实现字符串对象
2. 替代 char* 类型的数据

C 语言中，字符串的实现是以结尾为 \0 的 char 数组实现的。


##### 参考文章

- [简单动态字符串](https://redisbook.readthedocs.io/en/latest/internal-datastruct/sds.html)
