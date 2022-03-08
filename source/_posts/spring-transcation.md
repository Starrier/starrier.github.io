---
title: 深入理解 Spring 事务
date: 2022-02-25 13:36:34
author: Starrier
tags: [spring]
excerpt: 深入理解 Spring 事务
swiper:
keywords: [spring]
description: 深入理解 Spring 事务
---

# 深入理解 Spring 事务

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~


TransactionInterceptor

负责拦截方法执行，进行判断是否需要提交或者回滚事务

PlatformTransactionManager

Spring 中的事务管理接口，真正定义了事务如何回滚和提交。

##### 参考文章

- []()
