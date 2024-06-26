---
title: java-thread-volatile
date: 2021-05-25 09:37:37
author: Starrier
tags: [多线程]
excerpt: 并发编程 - 深入理解 volatile
swiper:
keywords: [并发编程,volatile]
description: 并发编程 - 深入理解 volatile
---

#  并发编程 - 深入理解 volatile

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

> 可见性
> 
> 防止指令重排序


Java 内存模型中定义的 8 种工作内存与主内存之间的原子操作

1. lock( 锁定 )：作用于主内存的变量，把一个变量标识为一条线程独占的状态。
2. unlock（解锁）：作用于主内存的变量，把一个处于锁定的变量释放出来，释放变量才可以被其他线程锁定。
3. read（读取）：作用于主内存的变量，把一个变量的值从主内存传输到线程的工作内存中，以便随后的load动作使用。
4. load（载入）：作用于***工作内存***的变量，它把read操作从主内存中得到的变量值放入工作内存的变量副本中。
5. use（使用）：作用于***工作内***存种的变量，它把工作内存中一个变量的值传递给执行引擎，每当虚拟机遇到一个需要使用到变量的值的字节码指令时将会执行这个操作。
6. assign（赋值）：作用于***工作内存***中的变量，它把一个从执行引擎接收到的值赋给工作内存的变量，每当虚拟机遇到一个给变量赋值的字节码指令时执行这个操作。
7. store（存储）：作用于***工作内存***的变量，它把工作内存中一个变量的值传送到主内存中，以便随后的write操作使用
8. write（写入）：作用于主内存的变量，它把store操作从工作内存中得到的值放入主内存的变量中。


## 实现原理

那么 Volatile 是如何来保证可见性的呢？在 x86 处理器下通过工具获取 JIT 编译器生成的汇编指令来看看对 Volatile 进行写操作 CPU 会做什么事情。

Java 代码：

```javascript
instance = new Singleton();//instance 是 volatile 变量
```

汇编代码：

```shell
0x01a3de1d: movb $0x0,0x1104800(%esi);

0x01a3de24: lock addl $0x0,(%esp);
```


有 volatile 变量修饰的共享变量进行写操作的时候会多第二行汇编代码，通过查 IA-32 架构软件开发者手册可知，lock 前缀的指令在多核处理器下会引发了两件事情。

- 将当前处理器缓存行的数据会写回到系统内存。
- 这个写回内存的操作会引起在其他 CPU 里缓存了该内存地址的数据无效。


#### 1. Lock 前缀指令会引起处理器缓存回写到内存

Lock 前缀指令导致在执行指令期间，声言处理器的 LOCK# 信号。在多处理器环境中，LOCK# 信号确保在声言该信号期间，处理器可以独占使用任何共享内存。（因为它会锁住总线，导致其他 CPU 不能访问总线，不能访问总线就意味着不能访问系统内存），但是在最近的处理器里，LOCK＃信号一般不锁总线，而是锁缓存，毕竟锁总线开销比较大。在 8.1.4 章节有详细说明锁定操作对处理器缓存的影响，对于 Intel486 和 Pentium 处理器，在锁操作时，总是在总线上声言 LOCK#信号。但在 P6 和最近的处理器中，如果访问的内存区域已经缓存在处理器内部，则不会声言 LOCK#信号。相反地，它会锁定这块内存区域的缓存并回写到内存，并使用缓存一致性机制来确保修改的原子性，此操作被称为“缓存锁定”，缓存一致性机制会阻止同时修改被两个以上处理器缓存的内存区域数据。



### 参考文章

https://juejin.cn/post/6844903607062659079

https://juejin.cn/post/6844903510480257037#heading-5
