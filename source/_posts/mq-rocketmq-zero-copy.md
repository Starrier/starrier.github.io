---
title: 深入理解 RocketMQ 零拷贝
date: 2022-01-17 10:54:17
author: Starrier
tags: [RocketMQ]
excerpt: 深入理解 RocketMQ 零拷贝
swiper:
keywords: [RocketMQ]
description: 深入理解 RocketMQ 零拷贝
---

# 深入理解 RocketMQ 零拷贝

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

##### 参考文章

- [RocketMq中零拷贝](https://www.jianshu.com/p/fe28b4cfe7a3)

正常的数据读写，需要调用 Read 和 Write 函数。

零拷贝的关键技术

- mmap 结合 write
- sendFile 

RocketMQ 采用的是 sendFile 结合 write

``` java
FileChannel.map(MapMode.READ_WRITE, 0, fileSize);
```
