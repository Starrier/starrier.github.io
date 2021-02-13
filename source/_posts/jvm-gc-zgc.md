---
title: jvm-gc-zgc
date: 2019-02-13 20:15:42
author: Imperator
tags: [java,jvm,zgc]
excerpt: Java 虚拟机，垃圾回收器 ZGC 简介与分析
---

# Java 虚拟机 ZGC 简介

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

查看 Jdk 使用的 GC

```java
java -XX:+PrintCommandLineFlags -version
```

ZGC 特点：

 1. 暂停时间不超过 10
