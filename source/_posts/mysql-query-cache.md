---
title: MySQL 查询缓存
date: 2022-01-06 16:24:21
author: Starrier
tags: [MySQL]
excerpt: MySQL 查询缓存
swiper:
keywords: [MySQL]
description: MySQL 查询缓存
---

#  MySQL 查询缓存

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

如果开启了查询缓存。在进行 SQL查询的时候，MySQL 会先去内存中，查看之前是否查询过这条语句。
如果之前执行过，就会将执行结果缓存下来，以键值对的形势存储，key 是查询语句。value 是查询结果。

但是大多数情况下，查询缓存弊大于利。

因为对一个表进行的更新操作的时候，

##### 参考文章

-[MySQL为什么取消了Query Cache](https://mp.weixin.qq.com/s/_EXXmciNdgXswSVzKyO4xg)
