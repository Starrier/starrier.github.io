---
title: java-features-stream 底层原理
date: 2021-01-12 23:23:48
author: Imperator
tags: [Java 基础]
excerpt: Java Stream 底层原理
---

# Java Stream 底层原理

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

Stream 并行流 使用条件

- 独立：每个元素的计算都不依赖或影响任何其他元素的计算
- 无干扰：功能（function）执行的时候不会修改基础的数据源
- 无状态


Stream 并行流底层使用的是 fork/join 框架。我们可以自定义并行流的最大线程数。
 
