---
title: Actor 模型简介
date: 2021-02-04 23:04:44
author: imperater
tags: [Actor]
excerpt: Actor 模型简介
swiper:
keywords: [actor]
description: Actor 模型简介
---

# Actor 模型简介

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~


Actor 模型 = 数据 + 行为 + 消息

Actor 是单线程模型，所以 Actor 的内部数据及状态只能由自身进行修改。类似于 Redis 。

一个 Actor 向另一个 Actor 发送消息时，会将消息发送到目标 Actor 的 mailbox 中，目标 Actor 会从 mailbox 中选取数据进行消费。
