---
title: reactive api 功能
date: 2021-02-04 23:13:15
author: imperater
tags: [响应式编程]
excerpt: reactive api 功能
swiper:
keywords: [reactive,api]
description: reactive api 功能
---

# reactive api 功能

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

An API for asynchronous programming
with observable streams

- asynchronous programming
- observable streams
- API

## java 的异步编程

```java
 // 获取一个执行器
        ExecutorService executor = Executors.newCachedThreadPool();

        Future<String> future = executor.submit(new Callable(){
        // 提交之后立即执行
            System.out.println("running");
            Thread.sleep(3000);
            return "complete";
        });
       // 处理其他任务
        try {
          // 调用future.get() 获取执行结果(这居然是一个可能阻塞的调用！)
            System.out.println(future.get());
        } catch (Exception e) {

        } finally {
            executor.shutdown();
        }

```

JDK8中，提供了CompletableFuture，这是对Future的扩展功能，帮助我们简化异步编程的复杂性，提供了函数式编程的能力，可以通过回调的方式处理计算结果，并且提供了转换和组合的方法。这也说明Java一直在想办法提供更好的异步操作模型。


讲到这里，我们应该能够了解，无论是编程语言还是系统，所能提供的异步编程模型都存在一些问题：

某些模型不完善，依然会导致阻塞的风险
对于线程，同步等问题的抽象不够，导致无法应对复杂业务逻辑
在异步代码的编写上，也不如同步代码那样容易理解


## RxJava 技术背景

## RxJava 能带来什么

- 优点
- 缺点

## RxJava 的开源实践

## RxJava 的事例


- ReactiveX首先从Iterable这种Pull模型的身上推导出了更容易支持异步的Push模型。
- 基于Push,打造出了数据流的概念，Everything is stream
- 基于数据流设计简洁高效的异步操作流程

Reactor 在 SpringBoot 中的应用
