---
title: Java 新版本特性
date: 2022-02-13 15:36:31
author: Starrier
tags: [Java]
excerpt: Java 新版本特性
swiper:
keywords: [Java]
description: Java 新版本特性
---

# Java 新版本特性

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

Java 11 新特性

-  Var 
> 语法糖，编译器会确定对应的变量类型。

- 字符串加强
> 字符串类型新增了 API

- 集合加强
> 部分集合新增了 of 和 copy 函数，此时创建的集合为不可变集合，不能进行新增，删除，插入等操作。


- Stream 增强

- Optional 增强

- InputStrem 增强
> 新增 transfor 函数，可以直接将 inputstream 输入到 outputstream

Java 13
switch 优化更新，增加 yield 关键字用于返回结果。
ZGC 支持将未使用的内存归还操作系统
引入了文本块，可以使用 """ 三个引号表示文本块，
Java 14
instanceof 语法简化，可以直接给对象赋值：
引入 Record，类似于枚举类型，具有 Lombok 功能，可以自动生成构造器、equals、getter 等方法。
放弃 CMS

Java 15
引入 hidden class
String.substring 优化，如果长度为 0，返回 null
引入 Sealed class
Java 16
Stream新增toList方法
提供jpackage
java.time 根据时段获取时间




##### 参考文章

- [Java 10 实战第 1 篇：局部变量类型推断](https://mp.weixin.qq.com/s/4zUtQPUn5LYw43IRLm0Dwg)

- [Java 11 正式发布，这 8 个逆天新特性教你写出更牛逼的代码](https://segmentfault.com/a/1190000016537503)

- [Elasticsearch系列---并发控制及乐观锁实现原理](https://segmentfault.com/a/1190000021199668)
