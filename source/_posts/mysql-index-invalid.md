---
title: MySQL 索引失效
date: 2021-08-19 19:25:37
author: Starrier
tags: [MySQl]
excerpt: MySQL 索引失效
swiper:
keywords: [MySQL]
description: MySQL 索引失效
---

# MySQL 索引失效

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~


### 失效的场景

- 不满足最左前缀原则
- 范围索引列没有放在最后
- 使用了 `select *`
- 索引列上有计算
- 索引列上使用了函数
- 字符类型没有加引号
- 用了 is null 和 is not null 没有注意字段是否允许为空
- like 查询左边有 %
- 使用 or 关键字时没注意

### 索引使用推荐

- 优先使用唯一索引
- 为常用查询字段建索引
- 为排序，分组和联合查询字段建索引
- 一张表的索引不超过 5 个
- 表数据量少，可以不建立索引
- 尽量使用占用空间小的字段建索引
- 用 idx 或 unx 等前缀命名缩影
- 删除没用的索引

参考文章

- [MYSQL索引失效的常见原因和如何用好索引](https://www.cnblogs.com/technologykai/articles/14172224.html)  
