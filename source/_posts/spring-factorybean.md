---
title: spring-factorybean
date: 2022-02-08 15:25:51
author: Starrier
tags: [Spring]
excerpt: spring-factorybean
swiper:
keywords: [Spring]
description: spring-factorybean
---

# Spring - FactroyBean

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

FactoryBean

这个 Bean 不是简单的 Bean，而是一个能生产或者修饰对象的工厂 Bean,它的实现与设计模式中的工厂模式和修饰器模式类似

一般情况下，Spring 通过反射机制，利用 bean 的 calss 指定实现类实例化 bean。在某些情况下，实例化 bean 比较复杂，如果按照传统的方法，
需要提供大量的配置信息。

配置方式的灵活性是受限的，因此我们可以继承 BeanFactory 来定制 bean 实例化的过程。

FactoryBean的着重于自定义创建对象过程，由BeanFactory通过FactoryBean来获取目标对象，而如果是isSingleton返回true的话，spring会利用单例缓存来缓存通过FactoryBean创建的对象。

##### 参考文章

- []()
