---
title: jvm-tools-jmap
date: 2021-05-14 11:07:28
author: Starrier
tags: [jvm]
excerpt: Java VM 工具 - JStack
swiper:
keywords: [jvm,jstack]
description: Java VM 工具 - JStack
---

# Java VM 工具 - JStack

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

## 介绍

显示java进程内存使用的相关信

#### 1. jmap pid             

打印内存使用的摘要信息

#### 2. jmap –heap pid    

java heap信息

#### 3. jmap -histo:live    

统计对象count ，live表示在使用

#### 4. jmap -histopid >mem.txt

打印比较简单的各个有多少个对象占了多少内存的信息，一般重定向的文件

#### 5. jmap -dump:format=b,file= mem.dat pid

将内存使用的详细情况输出到mem.dat 文件
