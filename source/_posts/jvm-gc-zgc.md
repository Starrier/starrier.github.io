---
title: jvm-gc-zgc
date: 2019-02-13 20:15:42
author: Imperator
tags: [java,jvm,zgc]
excerpt: Java 虚拟机，垃圾回收器 ZGC 简介与分析
---

# Java 虚拟机 ZGC 简介

查看 Jdk 使用的 GC

```java
java -XX:+PrintCommandLineFlags -version
```

ZGC 特点：

 1. 暂停时间不超过 10
