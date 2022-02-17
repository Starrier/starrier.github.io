---
title: Spring 中的设计模式
date: 2022-02-07 11:08:44
author: Starrier
tags: [Spring]
excerpt: Spring 中的设计模式
swiper:
keywords: [Spring]
description: Spring 中的设计模式
---

# Spring 中的设计模式

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

### 工厂设计模式（Spring IOC DI）

Spring使用工厂模式可以通过 BeanFactory 或 ApplicationContext 创建 bean 对象。

### 单例设计模式

Spring 中，bean 默认都是单例的。

### 代理模式（AOP）


### 模版

如  JDBC template 等 以 template 结尾的类。


### 观察者模式（Spring 的事件驱动）

### 适配器模式

Spring 中的 AOP 使用的是代理模式，但是 Spring 的增强通知 使用的是适配器模式。

Spring MVC 中的 Handler 也是。

### 装饰器模式

Spring中用到的包装器模式在类名上有两种表现：一种是类名中含有Wrapper，另一种是类名中含有Decorator。

### 策略模式

Source 接口

Resource


##### 参考文章

- [spring中的设计模式_面试官：“谈谈Spring中都用到了那些设计模式？”。](https://blog.csdn.net/weixin_39595320/article/details/111039337)

- [Spring中涉及的设计模式总结](https://blog.csdn.net/caoxiaohong1005/article/details/80039656)
