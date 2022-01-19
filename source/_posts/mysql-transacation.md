---
title: 深入理解 MySQL 事务机制
date: 2022-01-07 16:55:02
author: Starrier
tags: [MySQL]
excerpt: 深入理解 MySQL 事务机制
swiper: 
keywords: [MySQL]
description: 深入理解 MySQL 事务机制
---

# 深入理解 MySQL 事务机制

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

数据库事务

ACID

##### **原子性**

一个事务中的所有操作，要么全部成功，要么全部失败。如果事务中存在异常或者错误，所有操作就会回滚到事务执行之前的状态，就像事务没有执行一样。

##### **一致性**

##### **隔离性**

事务与事务之间在操作同样的数据时，不要看见彼此所做的修改。只能看到数据被修改之前或者之后的状态。

##### **持久性**

事务成功执行，所做的操作会被持久化，数据库重启后，仍然能恢复。

##### 脏读 修改

读未提交，读到别人修改的内容。

##### 不可重复读 更新
 
读到了 更新的内容

##### 幻读 插入




##### 参考文章

- [@Transactional 注解失效的 8 大场景，看看你都遇到过几个？](https://mp.weixin.qq.com/s/soZM_zsL7IBoZ2r5FyU_4g)

- [MySQL事务的隔离级别与并发问题](https://segmentfault.com/a/1190000040890911)

- [幻读、间隙锁、行锁、next-key lock、加锁规则、间隙锁导致的死锁、隔离级别设置、for update的理解](https://blog.csdn.net/h2604396739/article/details/86518943)

- [事务的隔离级别和mysql事务隔离级别修改](https://www.cnblogs.com/549294286/p/5433318.html)
