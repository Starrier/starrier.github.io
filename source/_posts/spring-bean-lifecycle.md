---
title: Spring Bean  生命周期
date: 2021-08-18 21:17:29
author: Starrier
tags: [Srping]
excerpt: Spring Bean  生命周期
swiper:
keywords: [Spring]
description: Spring Bean  生命周期
---

# Spring Bean  生命周期

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

## Spring Bean

- 实例化
- 属性赋值
- 初始化
  使用中
- 销毁

### 实例化

### 属性赋值

### 初始化

#### 1. Aware 相关接口检查，并设置对应的依赖

Aware 主要是让 对应的 Bean 拥有 Spring 容器的功能。

#### 2. BeanPostProcessor

#### 3. 查看是否实现了 InitializingBean

#### 4. 查看是否配置了 init-method 

#### 5. BeanPostProcessor



##InitializingBean

初始化 bean 时，调用一次，后续不会再调用。

1. Spring为bean提供了两种初始化bean的方式，实现InitializingBean接口，实现afterPropertiesSet方法，或者在配置文件中通过init-method指定，两种方式可以同时使用。

2. 实现InitializingBean接口是直接调用afterPropertiesSet方法，比通过反射调用init-method指定的方法效率要高一点，但是init-method方式消除了对spring的依赖。

3. 如果调用afterPropertiesSet方法时出错，则不调用init-method指定的方法。


##### 参考文章

- [Spring中的InitializingBean接口的使用](https://blog.csdn.net/Asa_Prince/article/details/108508964)

- [聊聊spring的那些扩展机制](https://juejin.cn/post/6844903682673229831)

- [Spring IOC详解及Bean生命周期详细过程，看完直接吊打面试官！](https://juejin.cn/post/6966158157202587662#heading-5)
