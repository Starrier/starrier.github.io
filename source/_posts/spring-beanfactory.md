---
title: spring-beanfactory
date: 2022-02-08 14:15:49
author: Starrier
tags: [Spring]
excerpt: spring-beanfactory
swiper:
keywords: [Spring]
description: spring-beanfactory
---

# Spring - BeanFactory


> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

BeanFactory 作为 IoC 的顶层容器，提供访问 bean 的基础功能，后续其他接口的扩展都是为其增强不同的功能。包括
使用最多的 ApplicationContext。

DefaultListableBeanFactory 是 Spring 加载 Bean 的核心，是 Spring 注册和 Bean 加载的默认实现。

BeanFactory 一般不提供给开发者使用
> 加载配置文件时，不会创建 bean 对象，只有第一次创建（使用）对象时，才会创建 Bean 对象，后续的使用都是缓存中的同一个对象。

ApplicationContext 一般由开发者使用
> 加载配置文件时，就创建对象，后续使用的都是同一个对象。

**如果不是单例，都是在每次创建(使用)对象时，才创建对象**


### BeanFactory 及其子类介绍

BeanFactory

主要方法是 getBean(),提供了访问bean，获取bean，bean 是否是单例 等。

BeanFactory的三个子接口：
- HierarchicalBeanFactory
> 提供父容器的访问功能
- ListableBeanFactory
> 提供了批量获取Bean的方法
- AutowireCapableBeanFactory
> 在BeanFactory基础上实现对已存在实例的管理

ConfigurableBeanFactory接口：
主要单例bean的注册，生成实例，以及统计单例bean

ConfigurableListableBeanFactory接口：
继承了上述的所有接口，增加了其他功能：比如类加载器,类型转化,属性编辑器,BeanPostProcessor,作用域,bean定义,处理bean依赖关系, bean如何销毁…

实现类DefaultListableBeanFactory 的详细介绍：
实现了ConfigurableListableBeanFactory接口，实现上述BeanFactory所有功能。它还可以注册BeanDefinition


ApplicationContext 有个 ConfigurableApplicationContext 接口，接口中有 Refresh  和  close 两个方法，
让 ApplicationContext 具有启动，刷新和关闭上下文的功能。
##### 参考文章

- [理解Spring系列——BeanFactory，Spring IoC的核心担当](https://juejin.cn/post/6854573209497370632#heading-8)

- [【小家Spring】一文读懂Spring中的BeanFactory和FactoryBean（以及它和ObjectFactory的区别）的区别](https://cloud.tencent.com/developer/article/1497577)
