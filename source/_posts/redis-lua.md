---
title: redis-lua 简介
date: 2021-01-12 22:46:53
author: Imperator
tags: [Redis]
excerpt: Redis Lua 简介
keywords: [redis,lua]
description: redis-lua 简介
---

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~


从 Redis 2.6.0 版本开始，通过内置的 Lua 解释器，可以使用 EVAL 命令对 Lua 脚本进行求值。

script 参数是一段 Lua  脚本程序，它会被运行在 Redis 服务器上下文中，这段脚本不必(也不应该)定义为一个 Lua 函数。

numkeys 参数用于指定键名参数的个数。


# Redis  Lua 简介

`redis.call()`; 将返回一个错误给调用者

`redis.pcall()`: 将捕获的错误以 `LUA` 表的形式返回。

## `Redis Lua` 优势

1.减少网络开销：本来 5 次的网络请求操作，可以用一个请求完成，原先 5 次请求的逻辑放在 `redis` 服务器上完成。使用脚本，减少了网络往返时延。

2.原子操作：`Redis` 会将整个脚本作为一个整体执行，中间不会被其他命令插入。

3.复用：客户端发送的脚本会永久存储在 `Redis` 中，意味着其他客户端可以复用这一脚本而不需要使用代码完成同样的逻辑。

## Redis 注意事项

1. `Lua` 无返回值导致阻塞时，整个 `Redis` 不可用。

2. `Lua` 实现核心内容即可，言简意赅。

3. `Lua` 中不应该存在常量 `Key`，这样会导致每次执行时都会在脚本字典中新建一个条目，应该使用全局变量数组 `KEYS` 和 `ARGV`, `KEYS` 和 `ARGV` 的索引都从 `1` 开始。

4. 传递给 `lua` 脚本的键列表应该包括可能会读取或者写入的所有键。传入全部的键使得在使用各种分片或者集群技术时，其他软件可以在应用层检查所有的数据是不是都在同一个分片里面。
   另外集群版 `redis` 也会对将要访问的 `key` 进行检查，如果不在同一个服务器里面，那么 `redis` 将会返回一个错误。
   （决定使用集群版之前应该考虑业务拆分），参数列表无所谓。。

5. `lua` 和 `redis` 命令，事务一样都是原子，的已经进行了数据写入的 `lua` 脚本将无法中断，只能使用 `SHUTDOWN NOSAVE` 杀死 `Redis` 服务器。


## 参考文章

- [深入分析 Redis Lua 脚本运行原理](https://juejin.cn/post/6844903697034510343)

- [redis源码学习之lua执行原理](https://www.cnblogs.com/chopper-poet/p/14172485.html)
