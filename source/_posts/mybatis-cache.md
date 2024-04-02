---
title: 深入理解 MyBatis - 缓存
date: 2022-02-14 17:10:48
author:  Starrier
tags: [中间件]
excerpt: 深入理解 MyBatis - 缓存
swiper:
keywords: [MyBatis]
description: 深入理解 MyBatis - 缓存
---

# 深入理解 MyBatis - 缓存

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

MyBaits 一级缓存
包名+函数名 进行 map 缓存，一旦设计到写入操作，比如 update 就会将缓存全部情况。
由于 MyBatis 无法确定是哪个缓存，所以就会将所有的操作置空。

一级缓存中，sqlSession 会有自己的缓存，不同的 sqlSession 不会共享缓存。

可以手动执行缓存清除

`sqlSession.clearCache()`

##### 参考文章

- [Mybatis 一连串提问，被面试官吊打了！](https://zhuanlan.zhihu.com/p/464162932)
