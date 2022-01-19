---
title: servlet-annotation-postconstruct
date: 2021-03-26 10:56:16
author: imperater
tags: [Java 基础]
excerpt: ServletPostConstruct应用原理及注意事项
swiper:
keywords: [servlet,postconstruct]
---

# Servlet annotation PostConstruct 应用原理及注意事项

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

## 背景

JavaEE 5 中引入此注解。用来修饰非静态 void 方法。在服务器加载 Servlet 时运行，并且只会被服务器执行一次。

## 工作原理

执行的时间节点：

1. 开始
2. web 加载 servlet 容器。
3. Servlet 构造函数
4. PostConstruct 注解方法
5. init() 方法
6. Service() 方法
7. destory() 方法
8. PreDestroy 注解方法
9. 结束。

## 应用场景

1. 在生成对象时完成某些初始化操作，而浙西初始化操作又依赖于 依赖注入，无法在构造函数中实现。

> @PostConstruct 注解的方法将会在依赖注入完成后被自动调用

## 注意事项

1. 注解发生于应用初始化。
2. 不可加载耗时操作。

## 应用注意事项

#####  1. `@PostConstruct` 不可与 `@Component` 共用。`@Component` 需改为 `@Service`，否则会导致 `@PostConstruct` 会初始化两次

问题并不是 `@PostConstruct` 造成的，而是 `@Component` 造成的。在 `web.xml` 中的 `DispatcherServlet` 继承自 `ContextLoaderListener`，两者共用 `ApplicationContext`，但是在启动的时候，会分别调用 `initWebApplicationContext()` 方法，各自对 `@Component` 注解对象实例化一次，`DispatcherServlet` 调用在后，在 `Controller` 中使用的是后面实例化的对象
