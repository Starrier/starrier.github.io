---
title: 响应式编程 - ReactiveX 模型推导
date: 2021-02-04 23:15:08
author: imperater
tags: [响应式编程]
excerpt: 响应式编程  - ReactiveX 模型推导
swiper:
keywords: [reactive]
description: 响应式编程  - ReactiveX 模型推导
---

# 响应式编程 - ReactiveX 模型推导

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

# 响应式编程  - ReactiveX 模型推导


从 迭代器推导出

Java 中的异步编程

1. 使用 CallBack

> 流程复杂，嵌套时，会导致 回调地狱

2. 使用 Future

> JDK 8 之前，Future 为阻塞模型，JDK 8  后新增 API CompletableFuture 类，这个类是 Future 也是一个 CompletionStage，CompletableFuture 支持 then 的级联操作。提供可操作的功能相对简单。

