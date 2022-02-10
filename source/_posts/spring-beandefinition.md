---
title: spring-beandefinition
date: 2022-02-10 11:10:06
author: Starrier
tags: [Spring]
excerpt: spring-beandefinition
swiper:
keywords: [Spring]
description: spring-beandefinition
---

# spring-beandefinition

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

`BeanDefinition` 继承 `AtrributeAccessor` 和 `BeanMetaDataElement`

类名、scope、属性、构造函数参数列表、依赖的bean、是否是单例类、是否是懒加载等，其实就是将Bean的定义信息存储到这个BeanDefinition相应的属性中，后面对Bean的操作就直接对BeanDefinition进行，例如拿到这个BeanDefinition后，可以根据里面的类名、构造函数、构造函数参数，使用反射进行对象创建。
默认的 Bean 都是单例的。
##### 参考文章

- [Spring-BeanDefinition](https://www.cnblogs.com/watertreestar/p/12830261.html)
