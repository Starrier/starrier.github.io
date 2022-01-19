---
title: security-ssrf
date: 2022-01-11 20:50:40
author:
tags:
excerpt:
swiper:
keywords:
description:
---

# SSRF 漏洞的原理以及 Java 中的处理

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

SSRF(Server-Side Request Forgery:服务器端请求伪造) 是由攻击者构造非授权的 URL, 由服务端发起请求的一个安全漏洞。一般情况下，SSRF攻击的目标是从外网无法访问的内部系统。

Java 中如何避免 SSRF

只需要在服务端对要发起请求的 URL 做判断即可. 检测 URL 是内部的域名, 或者 IP 地址, 就进行拦截.

有时候我们需要调用的内部其它服务, 这种情况下把内部的 域名, IP 添加白名单即可.
