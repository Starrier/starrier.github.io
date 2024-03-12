---
title: Redis 简介
date: 2022-01-18 19:09:16
author: Starrier
tags: [Redis]
excerpt: Redis 简介
swiper:
keywords: [Redis]
description: Redsi 简介
---

# Redis 简介

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~



1. [简单动态字符串]()

2. [链表]()

3. [字典]()

4. [跳跃表]()

5. [整数集合]()

6. [压缩列表]()

7. [对象]()

8. [Redis IO 线程模型]()

9. [Redis 与 MySQL 读写一致性]()

10. [Redis 哨兵]()

11. [Redis TTL 原理]()

12. [Redis 内存淘汰策略，缓存过期策略]()


redis 单线程架构

redis 为什么那么快

1. 基于内存
2. 非阻塞 IO，Redis使用epoll作为I/O多路复用技术的实现，再加上Redis自身的事件处理模型将epoll中的连接、读写、关闭都转换为事件，不在网络I/O上浪费过多的时间
3. 单线程，避免了线程切换产生的额外消耗

##### 参考文章

- [【Redis破障之路】三：Redis单线程架构](https://bbs.huaweicloud.com/blogs/262901)

