---
title: 深入理解 Spring Ioc 原理
date: 2022-01-26 14:41:38
author: Starrier
tags: [Spring]
excerpt: 深入理解 Spring Ioc 原理
swiper:
keywords: [Spring]
description: 深入理解 Spring Ioc 原理
---

# 深入理解 Spring Ioc 原理

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

## Ioc 容器的启动流程

依赖注入 和 依赖查找的区别


依赖查找，是主动或手动去形式。通过BeanFactory的getBean方法来获取；
依赖注入，是手动或者自动的形式。需要某个Bean，我只需在类中方法或字段上添加@Autowired或@Resource注解即可，由IoC容器来帮我完成查找并注入。

主要分为两部分：

- 容器的启动阶段
- Bean 的实例化阶段

##### 参考文章

- [Spring IOC 原理深层解析](https://jishuin.proginn.com/p/763bfbd2a478)

- [控制反转（IoC）、依赖注入（DI）、依赖查找（DL）](https://lingmoumou.github.io/p/2020/02/06/2dc6b46a/)

- [深入理解Spring的依赖查找和依赖注入](https://juejin.cn/post/6976888072277327902)

- [在Spring IoC中，依赖注入和依赖查找的数据来源区别](https://blog.csdn.net/m0_43448868/article/details/111866510)
