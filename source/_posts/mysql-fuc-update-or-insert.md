---
title: mysql-fuc-update-or-insert
date: 2022-02-23 17:24:00
author: Starrier
tags: [MySQL]
excerpt: MySQL 新增数据：如果存在则更新，否则就进行插入
swiper:
keywords: [MySQL]
description: MySQL 新增数据：如果存在则更新，否则就进行插入
---

# MySQL 新增数据：如果存在则更新，否则就进行插入

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~


1. insert into 表名（） on duplicate key

> DUPLICATE不会删除原有的记录。即：不会破坏索引。

2. replace into

> REPLACE INTO底层是先删除后插入数据，会破坏索引、重新维护索引，必须要有主键或者唯一索引，否则只是新增。
> 
> 

##### 参考文章

- []()
