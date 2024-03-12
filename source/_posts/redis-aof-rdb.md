---
title: 深入理解 Redis - AOF 与 RDB
date: 2022-01-11 16:05:55
author: Starrier
tags: [Redis]
excerpt: 深入理解 Redis - AOF 与 RDB
swiper:
keywords: [Redis]
description: 深入理解 Redis - AOF 与 RDB
---

# 深入理解 Redis - AOF 与 RDB

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

## RDB 

redis 的 rdb  持久化  也可以通过手动方式触发，执行 save 和 bgsave

生成 dump.rdb 二进制文件

### 优点

1. 相对于 aof 的每次命令追加，持久化到磁盘， rdb 速度更快，rdb 在使用 bgsave 时，fork 进程，进行 copyonwrite

2. 保存了 redis 在某个时间点的数据。这种方式适用于 备份和 容灾。

### 缺点

rdb 针对的是对整个数据集进行备份，比如 3 min 更新一次 rdb 文件，如果在上一次和下一次之间发生 redis 问题，就会丢失这中间的缓存数据。


### copyonwrite

原理：

主进程 fork 子进程后，此时，内核会把内存页设置为 read-only,然后子进程的地址空间指向主进程，此时子进程共享主进程内存数据。
当有线程进行数据写入时 此时由于 fork 子进程不参与写逻辑，cup 检测到当前页只读，发送异常中断，中断例程中，内核会把触发异常的页复制一份。
redis 将数据集写入到新的 dump.rdb 文件中，替换旧的的 rdb 文件，并删除旧的 rdb 文件。


## AOF

aof 的持久化操作时，每一次的 redis 修改，命令都会通过 write 函数追加到  appendonly.aof 文件中。可通过配置 

```javascript
appendfsync yes
```

来开启全程的 aof 持久化。此功能默认关闭。当redis 意外关闭时，可以通过 aof 来重放数据，恢复到 redis 关闭之前的状态。

```javascript
appendfsync yes
appendfsync always     #每次有数据修改发生时都会写入AOF文件。
appendfsync everysec   #每秒钟同步一次，该策略为AOF的缺省策略。
```

原理

redis 执行 fork 命令，创建一个子进程。此时父进程会将新数据放到一个内存缓存中，子进程将命令追加咋 aof 文件末尾。当子进程完成工作后，
会发送一个信号给父进程告诉父进程任务完成，此时父进程会将内存缓存中的数据追加到 aof 文件中，然后会用新的 aof 文件替换旧的 aof 文件。

优点

- aof 会进行文件压缩。(AOF BGREWRITEAOF 重写)

缺点






##### 参考文章

- [RDB 和 AOF 持久化的原理是什么？我应该用哪一个？它们的优缺点？](https://segmentfault.com/a/1190000018388385)

- [彻底搞懂Redis持久化之RDB原理](https://blog.csdn.net/ctwctw/article/details/105147277?utm_source=app&app_version=4.21.1&utm_source=app)

- [redis的rdb和aof两种持久化机制原理及优缺点](https://segmentfault.com/a/1190000021559677)
