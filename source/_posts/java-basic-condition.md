---
title: java-basic-condition
date: 2021-01-13 20:14:12
tags: [java,basic,condition]
---

# Condition

Condition 与 Object 的对比

|Condition| Object|
|---|---|
|awati()| wait()|
|signal()| notify()|
| signalAll()| notifyAll()|

**Note**:

Object  中的这些方法需要和同步锁（“synchronized”）捆绑使用，而 Condition 则是与 “互斥锁/共享锁”捆绑使用。

ReentrantLock 的 Condition 实现了等待/通知模型。Condition 的 await() 方法是是释放锁的。因为如果 await() 不释放锁，那么 singal()  方法就无法被调用。
