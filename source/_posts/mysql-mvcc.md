---
title: 深入理解 MySQL MVCC
date: 2022-01-06 17:15:08
author: Starrier
tags: [MySQl]
excerpt: 深入理解 MySQL MVCC
swiper:
keywords: [MySQL]
description: 深入理解 MySQL MVCC
---

# 深入理解 MySQL MVCC

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

1. 三个隐藏的字段

> 1.一个 6字节的 DB_TRX_ID 字段 即:通常在其他文章中看到的 事务id
> 
> 2.一个7字节的 DB_ROLL_PTR 字段 即:通常范围以回滚指针
>
> 3.一个 6字节的 DB_ROW_ID 字段, 该字段在当前事务自增,主要是确定当前数据id (本文章中不涉及该字段)

2. Read-View

3. undo log（数据可视性原则）
> MySQL 底层通过比对 read-view 中的事务 ID 来判断 undo log 数据对当前事务的可见性。 

##### 参考文章

- [快速理解脏读、不可重复读、幻读和MVCC](https://cloud.tencent.com/developer/article/1450773)

- [MySql MVCC 机制底层原理](https://www.jianshu.com/p/20fa5703bd3e)
