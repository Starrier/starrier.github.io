---
title: security-xxe
date: 2022-01-11 20:53:19
author:
tags:
excerpt:
swiper:
keywords:
description:
---

# java --XXE 攻击原理及防御

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

XXE(XML External Entity Injection) 全称为 XML 外部实体注入，从名字就能看出来，这是一个注入漏洞，注入的是什么？XML外部实体。需要强调的是利用点是 外部实体 ，也是提醒读者将注意力集中于外部实体中，而不要被 XML 中其他的一些名字相似的东西扰乱了思维(盯好外部实体就行了)，如果能注入 外部实体并且成功解析的话，这就会大大拓宽我们 XML 注入的攻击面。

##### 参考文章

- [一篇文章带你理解漏洞之 XXE 漏洞](https://www.k0rz3n.com/2018/11/19/%E4%B8%80%E7%AF%87%E6%96%87%E7%AB%A0%E5%B8%A6%E4%BD%A0%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%20XXE%20%E6%BC%8F%E6%B4%9E/)
