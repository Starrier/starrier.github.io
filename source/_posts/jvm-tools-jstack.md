---
title: jvm-tools-jstack
date: 2021-05-14 11:01:28
author: Starrier
tags: [JVM]
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

jstack -- 如果java程序崩溃生成core文件，jstack工具可以用来获得core文件的java stack和native stack的信息，从而可以轻松地知道java程序是如何崩溃和在程序何处发生问题。

jstack工具还可以附属到正在运行的java程序中，看到当时运行的java程序的java stack和native stack的信息

jstack [-l] <pid>        连接正在运行的进程

jstack -F [-m] [-l] <pid> 连接挂起的进程

jstack [-m] [-l] <executable> <core> 连接core文件

jstack [-m] [-l] [server_id@]<remote server IP or hostname> 连接远程服务器
