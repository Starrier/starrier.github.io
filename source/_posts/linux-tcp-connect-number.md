---
title: Linux 服务器的最大连接数
date: 2021-05-21 11:08:10
author: Starrier
tags: [Linux]
excerpt: Linux 服务器的最大连接数
swiper:
keywords: [Linux,最大连接数,并发数]
description: Linux 服务器的最大连接数
---

# Linux 服务器的最大连接数

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~


进程每打开一个文件（linux下一切皆文件，包括socket），都会消耗一定的内存资源。linux系统出于安全角度的考虑，在多个位置都限制了可打开的文件描述符的数量，包括系统级、用户级、进程级。

系统级：当前系统可打开的最大数量，通过fs.file-max参数可修改
用户级：指定用户可打开的最大数量，修改/etc/security/limits.conf
进程级：单个进程可打开的最大数量，通过fs.nr_open参数可修改

只建立连接，不发送，不接受，对 CPU 的消耗较少，只有一开始的握手会消耗。但维持 TCP 连接，需要创建文件对象。

发送接收数据时，需要新建数据缓冲区，会增加内存开销。接收缓冲区大小可以配置。

