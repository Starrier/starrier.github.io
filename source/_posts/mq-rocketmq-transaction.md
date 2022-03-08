---
title: 深入理解 RocketMQ 事务原理 - 实战
date: 2021-01-31 13:46:51
author: Imperator
tags: [消息中间件]
excerpt: 深入理解 RocketMQ 事务原理 - 实战
swiper:
keywords: [RocketMQ,rocketmq,transaction]
description: 深入理解 RocketMQ 事务原理 - 实战
---

# 深入理解 RocketMQ 事务原理 - 实战

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

事务消费前后 使用 redis 来保障，选择 mysql 的唯一索引 + redis 的 setNx 来看
当前数据是否被消费。
