---
title: 深入理解 MySQL 日志类型
date: 2022-01-21 15:35:05
author: Starrier
tags: [MySQL]
excerpt: 深入理解 MySQL 日志类型
swiper:
keywords: [MySQL]
description: 深入理解 MySQL 日志类型
---

#  深入理解 MySQL 日志类型

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

## BinLog

主要是用来做数据备份和数据恢复。

BinLog 中记录了数据的修改信息，针对 Insert，Update，Delete Truncat，不会记录 Select 因为 Select 没有对数据库进行修改。

因为我们查询数据库时，是通过数据库的搜索引擎来查找数据的，所以这个时候，我们搜索引擎就需要知道数据什么时候发生了变化，这个时候我们就可以通过
监听 BinLog 来追踪数据的变化状态。

Binlog 记录了表结构和表数据的变更。

默认是没有 binlog 的，需要配置开启

```editorconfig
server-id=1001 # 指定 server-id
log-bin=mysqlbin # 默认配置
```
redolog 在引擎层，记录了物理改变
binlog 在Server 层。

redolog 顺序 IO解决写入的性能
change buffer 解决读的性能

binlog 默认是 Statement 只记录改变的语句。
row 模式记录数据变更前后

## RedoLog

MySQL 数据存储结构是页。会先查到数据所在的页，然后将其加载至缓存。

存在的问题：

如果在内存中，将数据进行了修改，这个时候 MySQL 挂了，由于还未将内存的数据变更同步到磁盘，那么这一次的修改就丢失。如果每次修改都直接落盘，
性能就会很低，因此引入了 RedoLog。

尽管 redolog 也要落盘，但是 redolog 是顺序IO(顺序IO 比 随机 IO 快)

用来保证数据的持久性。MySQL 最终将数据写入到磁盘上，但是会提供一个 buffer pool 用于存储数据，
buffer pool 满了或者会定时的将数据（数据脏页）持久化到磁盘上。

背景：

如果 MySQL 突然宕机了，但是此时页数据中的 修改还未提交，就会导致对应修改或新增数据的丢失，Redo Log 就是用于解决这个问题。



redolog 主要用户记录页数据的修改。

## UndoLog

主要用于数据的回滚和多版本并发控制（MVCC）

比如我们需要进行 insert 语句，就会生成相反的 delete 语句。

##### 参考文章

- [【MySQL】之 binlog、undo log 和 redo log 详解](https://blog.csdn.net/aiwangtingyun/article/details/108580918)

- [MySQL事务实现及Redo Log和Undo Log详解](https://cheng-dp.github.io/2019/05/09/mysql-tx-redo-undo/)
