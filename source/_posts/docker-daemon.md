---
title: 深入理解 Docker Daemon 网络
date: 2022-02-25 09:41:36
author: Starrier
tags: [Docker]
excerpt: 深入理解 Docker Daemon 网络
swiper:
keywords: [Docker]
description: 深入理解 Docker Daemon 网络
---

# 深入理解 Docker Daemon 网络

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

docker start 会解析绑定 ip 地址，然后 flag 标志位是否为true，来判断是否要给
docker 生成一个 docker 网络驱动器或者是docker


#### 1. 网络初始化 

- 解析 flag
- 预处理 flag
- 确定 docker 网桥模式

确定网络环境后

- 创建指定网络相关的job
- job 环境参数等配置
- 触发执行 job

#### 2. 创建网桥

 1. 提取 job 的环境变量
2. 确定当前的网桥名称
- 如果没有配置，则会默认使用 docker 0
3. 查找 bridgeInterface。

- 如果查到，直接返回 ip地址。否则直接报错。
> 指定 
> 未指定


##### 参考文章

- []()
