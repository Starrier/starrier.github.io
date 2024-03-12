---
title: distribute-load-balance
date: 2021-05-19 16:30:50
author: Starrier
tags: [分布式基础]
excerpt: 分布式系统 - 负载均衡原理及算法实现
swiper:
keywords: [分布式,负载均衡]
description: 分布式系统 - 负载均衡原理及算法实现
---

# 分布式系统 - 负载均衡原理及算法实现

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

常用的负载均衡算法有：

随机算法
加权随机算法
轮询算法
加权轮询算法
最小时延算法
一致性hash算法


## 一致性 Hash 性质

### 平衡性


### 单调性

### 分散性

### 负载



### 平滑线

平滑性是指缓存服务器的数据平滑改变和缓存对象的平滑改变一致。

## 原理


##### 注意

一致性 Hash 算法在服务节点太少时，容易因为节点分布不均匀导致数据倾斜问题。




### 参考文章

- [分布式负载均衡算法的实现](https://www.cnblogs.com/lgjlife/p/10727245.html)

- [一致性 Hash （复习版）](https://blog.csdn.net/weixin_41896463/article/details/106304145)

- [常用负载均衡策略分析](https://www.jianshu.com/p/d7e173d212a8)
