---
title: 深入理解 Future
date: 2022-01-06 15:37:35
author: Starrier
tags: [多线程]
excerpt: 深入理解 Future
swiper:
keywords: [多线程]
description: 深入理解 Future
---

# 深入理解 Future

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

只有在使用 future.get() 的时候才会阻塞线程，使用 get() 时，如果当前线程已经执行结束，就会直接返回执行结果，否则阻塞线程，直到获取执行结果。




- [理解Future及FutureTask的实现](https://cloud.tencent.com/developer/article/1680378)
- [Java多线程（3）：取消正在运行的任务](https://segmentfault.com/a/1190000007961347)
