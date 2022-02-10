---
title: 深入理解 Java HashMap 及对应面试题
date: 2022-01-17 20:24:01
author: Starrier
tags: [Java]
excerpt: 深入理解 Java HashMap 及对应面试题
swiper:
keywords: [Java]
description: 深入理解 Java HashMap 及对应面试题
---

# 深入理解 Java HashMap 及对应面试题

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

HashMap 非线程安全的类。

> 线程安全的类：`HashTable`，`ConcurrentHashMap`,`Collections.synchronizedMap`

Hash 冲突解决方案

1. 链地址法
2. Rehash
3. 公共溢出区
4. 线性探测法：hash(key) 冲突 则查看 hash(key) +n /mod 是否有冲突。


为什么不用 `hash` 进行分布式存储


一致性 hash 存在什么问题，数据倾斜如何处理。



##### 参考文章

- [Java集合-HashMap扰动函数](https://blog.csdn.net/weixin_33748818/article/details/91994025)

- [HashMap面试题，看这一篇就够了！](https://juejin.cn/post/6844904013909983245#heading-26)

- [阿里面试官最喜欢问的21个HashMap面试题](https://www.bilibili.com/read/cv6114752)

- [【Java自顶向下】HashMap面试题（2021最新版）](https://blog.csdn.net/xt199711/article/details/113918057)

- [HashMap面试题集源码解答](https://zhuanlan.zhihu.com/p/388105370)


