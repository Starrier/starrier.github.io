---
title: java-basic-condition
date: 2021-01-13 20:14:12
author: Imperator
tags: [java,basic,condition]
---

# Condition

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

Condition 与 Object 的对比

|Condition| Object|
|---|---|
|awati()| wait()|
|signal()| notify()|
| signalAll()| notifyAll()|

**Note**:

Object  中的这些方法需要和同步锁（“synchronized”）捆绑使用，而 Condition 则是与 “互斥锁/共享锁”捆绑使用。

ReentrantLock 的 Condition 实现了等待/通知模型。Condition 的 await() 方法是是释放锁的。因为如果 await() 不释放锁，那么 singal()  方法就无法被调用。
