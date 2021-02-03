---
title: 深入理解 java 关键字 String
date: 2021-02-01 12:57:39
author: Imperator
tags: [String]
excerpt: 深入理解 java 关键字 String
swiper:
keywords: [Starrier,String]
description: 深入理解 java 关键字 String
---

# 深入理解 java 关键字 String

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 PR 谢谢~~

我们大部分时候的宗旨是，如果是 String+ 操作，我们应该尽量在一个语句中完成。如果是无法做到，并且拼接动作很多，比如数百上千成万次，则必须使用stringbuffer，不能用string+，否则速度会很慢.String：适用于少量的字符串操作的情况StringBuilder：适用于单线程下在字符缓冲区进行大量操作的情况StringBuffer：适用多线程下在字符缓冲区进行大量操作的情况
