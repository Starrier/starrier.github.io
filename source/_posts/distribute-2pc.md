---
title: 分布式理论 2PC 详解
date: 2021-01-29 16:07:40
author: Imperator
tags: [分布式]
excerpt: 分布式理论 2PC 详解
swiper:
keywords: [distribute,2pc]
description: 分布式理论 2PC 详解
---

# 分布式理论 - 2PC 详解

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

**注意**

高并发中使用分布式事务的 2PC 协议应该遵循如下协议：

1. 能不用 2 PC 的精良不用，2PC 协议要有提交请求阶段，提交阶段，而每个阶段也要有协调器分别于多个事务参与者的应答，复杂度高，性能也受到挑战。
2. 要获得事务强一致性，也要在性能和一致性上做折中，比如加上超时机制，阶段性补偿机制等。 
