---
title: Java 集合 ArrayList 详解
date: 2021-01-29 15:40:16
author: Imperator
tags: [Java 基础]
excerpt: Java 集合 ArrayList 详解
swiper: /medias/1.jpg
keywords: [java,collection,arraylist]
description: Java 集合 ArrayList 详解
---

# Java 集合 ArrayList 详解

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

函数签名：

```javascript
 public class ArrayList<E> extends AbstractList<E> 
 implements List<E>,RandomAccess,Cloneable,java.io.Serializable
```

**AbastrctList**: 抽象父类，提供了 List 的方法。添加、删除、修改、遍历等。

**RandomAccess**： 可随机访问。由 Lis 实现，为 List 提供快速访问功能。在 ArrayList 中，我们可以通过元素的序号快速获取元素对象；这就是快速随机访问。

**Clonable**：可拷贝

**Serializable** 可序列化

#### 构造函数

```javascript
ArrayList();

ArrayList(int capacity);

ArrayList(Collection<? extends E> Collection);
```

