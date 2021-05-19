---
title: 深入分析与理解 Spring MVC 原理
date: 2021-02-01 12:59:42
author: Imperater
tags: [Spring]
excerpt: 深入分析与理解 Spring MVC 原理
swiper:
keywords: [spring-mvc,mvc,spring]
description: 深入分析与理解 Spring MVC 原理
---

# 深入分析与理解 Spring MVC 原理

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 PR 谢谢~~

#### SpringMVC 流程：

1. 用户发送请求至前端控制器 DispatcherServlet
2. DispatcherServlet 首都奥请求调用 HandlerMapping 处理器映射器。
3. 处理器映射器找到具体的处理器（可以根据 xml 配置、注解进行查找），生成处理器对象以及处理器拦截器（如果有则生成）一并返回给 DispatcherServlet。
4. DispatcherServlet 调用 HandlerAdapter处理器适配器。
5. HandlerAdapter 经过适配器调用具体的处理器（Controller，也叫后端控制器）。
6. Controller 执行完成返回 ModelAndView
7. HandlerAdapter 将 controller 执行结果 ModelAndView 返回给 DispatcherServlet。
8. DispatcherServlet 将 ModelAndView 传给 ViewReslover 视图解析器。
9. ViewReslover 解析后返回具体的 View。
10. DispatcherServlet 根据 View 进行渲染视图（即将模型数据填充至视图中）。
11. DispatcherServlet 响应用户。
