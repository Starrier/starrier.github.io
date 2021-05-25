---
title: MySQL 调优 - Profile
date: 2021-05-19 12:17:54
author: Starrier
tags: [MySQL]
excerpt: MySQL 调优 - Profile
swiper:
keywords: [mysql,mysql 调优,profile]
description: MySQL 调优 - Profile
---

# MySQL 调优 - Profile 

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

profile此工具可用来查询SQL执行状态，System lock和Table lock 花多少时间等等，对定位一条语句的I/O消耗和CPU消耗 非常重要。(SQL 语句执行所消耗的最大两部分资源就是IO和CPU)

## 开启

```sql
mysql> set profile=1;
```

## profile 的参数

| 类型 | 作用 |
| --- | ---|
|ALL           |     --显示所有的开销信息|
| BLOCK IO      |    --显示块IO相关开销|
| CONTEXT SWITCHES | --上下文切换相关开销|
| CPU             |   --显示CPU相关开销信息|
| IPC         |       --显示发送和接收相关开销信息|
| MEMORY     |       --显示内存相关开销信息|
| PAGE FAULTS  |      --显示页面错误相关开销信息|
| SOURCE       |     --显示和Source_function，Source_file，Source_line相关的开销信息|
| SWAPS     |         --显示交换次数相关开销的信息|

例如，想要查看cpu和io开销可以执行命令：
mysql> SHOW profile CPU,BLOCK IO  FOR query 2;

## 一般流程 

1. set profiling=1; //打开profile分析
2. run your sql1;
3. run your sql2;
4. show profiles;    //查看sql1,sql2的语句分析
5. SHOW profile CPU,BLOCK IO  FOR query 1; //查看CPU、IO消耗
6. set profiling=0; //关闭profile分析
