---
title: MyBatis 缓存
date: 2021-01-12 22:57:00
author: Imperator
tags: [mybatis,cache]
excerpt: MyBatis Cache 简介
---

# MyBaits 缓存

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

`MyBatis` 的一些关键特性（例如通过 `<association>` 和 `<collection>` 建立级联映射
避免循环引用（circular references）、加速重复嵌套查询等）都是基于 `MyBatis` 一级缓存实现的，而且 `MyBatis` 结果集映射相关代码重度依赖 `CacheKey`，所以目前 `MyBatis` 不支持关闭一级缓存。
