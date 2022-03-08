---
title: 深入理解 RocketMQ 消费者
date: 2022-01-24 17:18:34
author: Starrier
tags: [MQ]
excerpt: 深入理解 RocketMQ 消费者
swiper:
keywords: [MQ]
description: 深入理解 RocketMQ 消费者
---

#  深入理解 RocketMQ 消费者

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

### 重复消费问题

如何解决重复消费问题 

消费端引入 冥等机制。消费者在进行消息消费的时候，先查看对应的 messageId 是否已经被处理过。

重试机制

默认会重试 16 次，重试的时间可以通过配置文件配置。重试 16 次之后仍然失败，对应消息就会进入到死信队列。是否处理死信队列由对应的业务场景决定。

乱序问题

1. 让需要保证消费顺序的 MQ 发送到同一个 Consumer Group

2. SUSPEND_CURRENT_QUEUE_A_MOMENT 状态的使用。



##### 参考文章

- [探索RocketMQ的重复消费和乱序问题](https://zhuanlan.zhihu.com/p/290886627)
