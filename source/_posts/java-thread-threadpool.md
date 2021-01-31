---
title: 深入理解 Java 线程池 - 实战
date: 2021-01-31 14:57:26
author: Starrier
tags: [java,thread,threadpool,多线程，线程池]
excerpt: 深入理解 Java 线程池 - 实战
swiper:
keywords: [java,thread,threadpool,多线程，线程池]
description: 深入理解 Java 线程池 - 实战
---

# 深入理解 Java 线程池 - 实战

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 PR 谢谢~~

## 一. Java 线程池详解

### 1.**corePoolSize**：

线程池的核心池大小，在创建线程池之后，线程池默认没有任何线程。当有任务过来时，才会去创建线程并执行任务。直到创建的线程数量达到 corePoolSize。之后，再有任务进来时，就会被放入队列中。corePoolSize 表示允许线程池中允许同时运行的最大线程数。

如果执行了线程池的 prestartAllCoreThread() 方法，线程池会提前创建并启动所有核心线程。

### 2.**maximumPoolSize**：

线程池允许的最大线程数，他表示最大能创建多少个线程。maximunPoolSize 肯定是大于等于 corePoolSize。

### 3. **keepAliveTime**：

表示线程没有任务时，最多保持多久然后停止。默认情况下，只有线程池中的线程数大于 corePoolSize 时，keepAliveTime 才会起作用。即，当线程池中的线程数大于 corePoolSize 并且一个线程空闲时间达到了 keepAliveTime 时，那么就是会 shutdown。

### 4. **Unit**：

keepAliveTime 的单位。

### 5. **workQueue**：

一个阻塞队列，用来存储等待执行的任务，当线程池中的线程数超过它的 corePoolSize 时，线程会进入阻塞队列进行阻塞等待。通过 workQueue，线程池实现了阻塞功能。

### 6. **threadFactory**：

线程工厂，用来创建线程。

### 7. **hannler**：

表示拒绝处理任务时的策略。
