---
title: 使用 git-convert 回滚已经提交的 commit
date: 2021-01-28 16:55:55
author: Imperater
tags: [git,git-revert,commit]
excerpt: 使用 git-convert 回滚已经提交的 commit
swiper:
keywords: [使用git-convert回滚已经提交的commit]
description: 使用 git-convert 回滚已经提交的 commit
---

# 使用 git-convert 回滚已经提交的 commit

## 一. 简介

`git-revert` 用于撤销某次指定提交的操作，被操作的版本，之前和之后的内容（包括 commit 和 history 都会被保留下来）

## 二. 用法

1. 对当前版本进行回滚操作

```git
git revert HEAD           
```

2. 对上一个版本内容进行回滚

```git
git revert HEAD^   
```

3. 对指定版本进行回滚

```git
git revert commit hashValue
```

## 三. git-revert 和 git-rebase 比较

1. `git revert` 是对之前 `commit` 内容进行覆盖。而 `git reset` 是直接删除指定的 `commit`。

2. 两个命令效果一致：
   
   - `git-revert` 与之前的旧分支合并时，不会有新旧 `commit` 内容的冲突；
     
   - `git-reset` 时，与旧分支合并时，旧分支的 `commit` 会被引入，有可能会产生冲突。
    
3. git reset 是把 `HEAD` 向后移动了一下，而 `git revert` 是 `HEAD` 继续前进，只是新的 `commit` 的内容和要 `revert` 的内容正好相反，能够抵消要被 `revert`的内容。
