---
title: MySQL 基础知识
date: 2022-01-27 10:09:58
author: Starrier
tags: [MySQL]
excerpt: MySQL 基础知识
swiper:
keywords: [MySQL]
description: MySQL 基础知识
---

# MySQL 基础知识

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

数据库 三大范式

唯一键：

唯一约束和联合唯一约束，实际上就是建立的索引。唯一键是索引的一种。UNIQUE Key。一张表允许同时存在多个唯一键。

唯一键删除语法：

```sql
alter table 表名 drop index 唯一键名字;
```


MySQL 主键不是严格自增的。

> 当前仅讨论 InnoDB

1. 5.7.0 及其之前的版本，自增主键值主要保存在内存中，一旦数据库发生重启，就会重新获取数据库当前最大的自增主键值到内存中
2. 获取 AUTO_INCREMENT 时不会使用事务锁，并发的插入事务可能出现部分字段冲突导致插入失败；



##### 参考文章

- [MYSQL三大范式 ](https://www.cnblogs.com/xuan584521/p/6366541.html)

- [mysql之列属性篇六之 —— 唯一键（unique）](https://blog.csdn.net/JavaCoder_juejue/article/details/82085285)
