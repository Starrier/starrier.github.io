---
title: 深入理解 Java UUID 及其实战应用
date: 2021-05-20 09:38:54
author: Starrier
tags: [分布式基础]
excerpt: 深入理解 Java UUID 及其实战应用
swiper:
keywords: [分布式,java,uuid,唯一标识，全局唯一标识符]
description: 深入理解 Java UUID 及其实战应用
---

# 深入理解 Java UUID 及其实战应用

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

## 简介

`UUID`：`Universally Unique IDentifier`，也被称为 `GUID(Globally Unique IDentifier)`。是一种由算法生成的唯一标识，它实质上是一个 `128` 位长的二进制整数。通常表示成 `32` 个 `16` 进制数组成的字符串，如：`21EC2020-3AEA-1069-A2DD-08002B30309D`。关于 `UUID` 标准的 `rfc` 定义详见[标准规范](http://www.ietf.org/rfc/rfc4122.txt) 。 当然，`GUID` 一词有时也专指微软对 UUID标准的实现，用于Windows操作系统中。 
