---
title: high-performance-bloomfilter
date: 2021-05-14 10:29:25
author: Starrier
tags: [分布式]
excerpt: 深入理解高性能利器 - 布隆过滤器
swiper:
keywords: [布隆过滤器,分布式,高性能]
description: 深入理解高性能利器 - 布隆过滤器
---

# 深入理解高性能利器 - 布隆过滤器

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

## 定义：

布隆过滤器可以用于检索一个元素是否在一个集合中。它的优点是空间效率和查询时间都远远超过一般的算法，缺点是有一定的误识别率且删除困难。

布隆过滤器的使用场景比较多，比如我们现在讲的防止缓存穿透、垃圾邮件的检测等。Google chrome 浏览器使用 Bloom Filter 识别恶意链接，Goolge 在 BigTable 中也使用 Bloom Filter 以避免在硬盘中寻找不存在的条目。我公司使用布隆过滤器来对爬虫抓取的 Url 进行重复检查等。
