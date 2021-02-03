---
title: 使用 git-reset 回滚代码到指定版本
date: 2021-02-03 13:19:19
author: Imperater
tags:
excerpt: 使用 git-reset 回滚代码到指定版本
swiper:
keywords: [git,git-reflog,git-reset]
description: 使用 git-reset 回滚代码到指定版本
---

# 使用 git-reset 回滚代码到指定版本

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 PR 谢谢~~

## 一. 查看 log history

```shell
git log
```

## 二. 查看 reflog history

```shell
git reflog
```


## 三. 选择想要回滚的指定版本

```shell
git reset --hard hash-value
```
