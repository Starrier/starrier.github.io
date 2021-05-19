---
title: Git 删除远程分支
date: 2021-04-20 15:44:26
author: Starrier
tags: [开发工具]
excerpt: Git 删除远程分支
swiper:
keywords: [git,git-delete,git删除远程分支，删除分支]
description: Git 删除远程分支
---

# Git 删除远程分支

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

## 1. 切换到 master

```git
git checkout master
```

## 2. 删除目标分支

### 1）. 推送空分支，相当于删除分支

```git
git push origin :target-branch
```

### 2).  使用 `delete` 关键字

```gitexclude
git push origin --delete targe-branch
```
