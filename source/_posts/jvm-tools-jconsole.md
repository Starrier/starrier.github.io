---
title: jvm-tools-jconsole
date: 2021-05-14 11:15:28
author: Starrier
tags: [JVM]
excerpt: JVM - jconsole
swiper:
keywords: [jvm,jconsole]
description: JVM - jconsole
---

# JVM - jconsole

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

是一个用java写的GUI程序，用来监控VM，并可监控远程的VM

服务器端配置，远程调控是如下配置：在服务端启动时添加如下参数：

-Dcom.sun.management.jmxremote.port=22801

-Dcom.sun.management.jmxremote.pwd.file=jmxremote.pwd

-Dcom.sun.management.jmxremote.ssl=false

-Dcom.sun.management.jmxremote.authenticate=false

在相同目录下创建文件jmxremote.pwd，并填写用户名和密码
