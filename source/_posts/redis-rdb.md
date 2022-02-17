---
title: 深入理解 RDB 持久化
date: 2022-01-30 17:37:04
author: Starrier
tags: [Redis]
excerpt: 深入理解 RDB 持久化
swiper:
keywords: [Redis]
description: 深入理解 RDB 持久化
---

#  深入理解 RDB 持久化

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

``` c
def SAVE():
   # 创建 RDB 文件
   rdbSave()

def BGSAVE():
   # 创建子进程
   pid =  fork()
   if pid == 0:
         # 子进程负责创建 RDB 文件
         rdbSave()
         # 完成后向父进程发送信号
         signal_parent()
   elif pid > 0 :
         # 父进程继续处理命令请求，并通过轮询等待子进程的信号
         handle_request_and_wait_signal()
   else:
         # 处理出错情况
         handle_fork_error()
```

AOF  的更新频率通常比 RDB 文件更新频率高，所以：

- 如果服务器开启了 AOF  持久化功能，那么服务器会优先使用 AOF  文件来还原数据库状态。

- 只有 AOF 持久化功能处于关闭状态时，服务器才会使用 RDB 文件来还原数据库状态。

##### SAVE，BGSAVE 执行命令的时候程序运行状态

SAVE：

由于 SAVE 执行过程时，进程是阻塞的，此时 Redis 所有的操作都会被阻塞，知道 SAVE 命令执行结束。

BGSAVE：

由于 BGSAVE 执行持久化的过程是由子进程执行的，所以此时 Redis 的核心线程仍可以运行。只是此时，SAVE，BGSAVE，BGREWRITEAOF 命令会有所不同

- SAVE 命令会被拒绝执行，防止另个命令同时调用 rdb 文件写入，产生竞态条件。

- BGSAVE 命令也会背拒绝执行，两个命令同时调用 rdb 文件写入，也会产生竞态条件。

- BGREWRITE  和 BGSAVE 同一时刻只会有一个执行，另一个需要等待上个命令执行完成才能继续执行。


**服务器载入 RBD文件时，会一直阻塞，知道当前命令执行的操作完成为止。**


#### 自动保存间隔。

Redis 的结构中 有  saveParams 和 Direct。saveparams 中保存了时间错和修改书。



使用 SAVE 命令指定参数。

eg. 每 200 s 修改了 100 次，则触发一次 RDB。
save 200 100

直到 上一次的时间到当前 >= 200 s 并且修改数超过了 100 次才会进行一次 RDB。


Redis  RDB 文件结构

"REDIS" db_version  database EOF check_sum

REDIS 表示这是一个 Redis 文件。

db_version 代表了当前 rdb 文件的版本号。

database 表示的是数据库信息

check_sum 校验和，用于在 Redis 载入 RDB 文件时，查看文件是否完整。


##### 参考文章

- []()
