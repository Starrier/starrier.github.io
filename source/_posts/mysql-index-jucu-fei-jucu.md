---
title: 深入理解 MySQL - 聚簇索引和非聚簇索引
date: 2022-02-13 15:45:52
author: Starrier
tags: [MySQL]
excerpt: 深入理解 MySQL - 聚簇索引和非聚簇索引
swiper:
keywords: [MySQL]
description: 深入理解 MySQL - 聚簇索引和非聚簇索引
---

# 深入理解 MySQL - 聚簇索引和非聚簇索引

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

聚簇索引默认是主键，如果没有主键，InnoDB 会找一个非空的唯一索引来当聚簇索引，如果也没有
这样的索引，InnoDB 就会默认生成一个隐式的聚簇索引

在 MyISM 中，主键和辅助索引都一样，

##### 参考文章

- [聚簇索引与非聚簇索引（也叫二级索引）--最清楚的一篇讲解](https://cloud.tencent.com/developer/article/1541265)
