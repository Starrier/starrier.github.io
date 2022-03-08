---
title: 深入理解 MySQL 间隙锁
date: 2022-01-06 14:47:43
author: Starrier
tags: [MySQL]
excerpt: 深入理解 MySQL 间隙锁
swiper:
keywords: [MySQL]
description: 深入理解 MySQL 间隙锁
---

#  深入理解 MySQL 间隙锁

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~


当我们在进行范围查询的时候，请求共享或排他锁的时候，MySQL 会对查询的区间进行加锁，及时对应区间可能没有数据也会被锁住。

> 如果请求对一个不存在的记录进行加锁，MySQL 也会使用间隙锁（Next-key）


**MySQL 中尽量不要使用 update 进行范围更新。**

##### 参考文章

- [间隙锁详解](https://vegetable-chicken.blog.csdn.net/article/details/81030920?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&utm_relevant_index=2)
