---
title: utils-git-commit-refactor
date: 2021-01-20 14:56:05
tags: [git,rebase]
excerpt: 使用 Git 修改 commit 的提交描述
img: https://cdn.jsdelivr.net/gh/Starrier/configure-resources/images/starrier/fin-series.jpeg
---

# Git - commit 已提交 commit 记录的重写

## 一. 修改最新的 `commit` 信息

```shell script
git commit --amend
```

## 二. 修改前 `N` 次提交的 `commit` 提交信息

```shell script
git rebase -i HEAD ~ n
```

修改后，保存退出，输入

```shell script
git commit  --amend
```

保存退出后，继续输入

```shell script
git rebase --continue
```
