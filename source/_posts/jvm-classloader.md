---
title: JVM 类加载器原理
date: 2021-04-15 10:02:04
author: Starrier
tags: [jvm]
excerpt: JVM 类加载器原理
swiper:
keywords: [jvm,classloader,类加载器原理]
description: JVM 类加载器原理
---

# JVM 类加载器原理

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

JVM设计者把类加载阶段中的“通过'类全名'来获取定义此类的二进制字节流”这个动作放到Java虚拟机外部去实现，以便让应用程序自己决定如何去获取所需要的类。实现这个动作的代码模块称为“类加载器”。

##### 参考文章

- [Java类加载机制（全套）](https://juejin.cn/post/6844903564804882445#heading-5)
