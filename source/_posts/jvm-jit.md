---
title: 深入理解 jvm - JIT 即时编译器
date: 2021-02-04 23:06:05
author: imperater
tags: [jvm]
excerpt: 深入理解 jvm - jit 即时编译器
swiper:
keywords: [jvm,jit]
description: 深入理解 jvm - jit 即时编译器
---

# 深入理解 jvm - JIT 即时编译器

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

JVM 及时编译 JIT

## C1

## C2

## 分层编译

1. 第 0 层：程序解释执行，默认开启性能监控功能（Profiling），如果不开启，可触发第二层编译；

2. 第 1 层：可称为 C1 编译，将字节码编译为本地代码，进行简单、可靠的优化，不开启 Profiling；

3. 第 2 层：也称为 C1 编译，开启 Profiling，仅执行带方法调用次数和循环回边执行次数 profiling 的 C1 编译；

4. 第 3 层：也称为 C1 编译，执行所有带 Profiling 的 C1 编译；

5. 第 4 层：可称为 C2 编译，也是将字节码编译为本地代码，但是会启用一些编译耗时较长的优化，甚至会根据性能监控信息进行一些不可靠的激进优化。
