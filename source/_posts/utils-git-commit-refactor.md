---
title: git commit 操作详解
date: 2021-01-20 14:56:05
author: Imperater
tags: [开发工具]
excerpt: 使用 Git 修改 commit 的提交描述
img: https://cdn.jsdelivr.net/gh/Starrier/configure-resources/images/starrier/fin-series.jpeg
swiper: https://cdn.jsdelivr.net/gh/Starrier/configure-resources/images/starrier/fin-series.jpeg
keywords: [git,rebase]
description: git commit 操作详解
---

# Git - commit 已提交 commit 记录的重写

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

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

## 三. git 合并 commit 记录

存在 3 次 commit 记录，hash 值分别为 a，b，c。现在只保留 c 的 commit 记录。

```log

commit1 a

commit2 b

commit3 c

```

### 1. 进行基变操作。

```git
git rebase -i  c
```

log 文件可能如下:

```log
pick commit1-message
pick commit2-message
pick commit3-message
```

选择第三个，使用 `fixup`，我们只保留 3，修改后保存并退出。

```log
pick commit1-message
fixup commit2-message
fixup commit3-message
```

### 2. 此时，如果需要修改 author 可以进行 commit --amend

```git
git commit --amend --reset-author
```

重新提交信息即可。保存并退出。

## 过程中，可能存在的问题：

1. 找不到 hash 值：

- 使用 `IDEA` 自带的 `git` 工具
- `git-log`

2. 如果不慎操作 `git reset --hard`：

- 1. 使用 `git reflog` 命令恢复指定版本。git 操作的所有命令所形成的版本，在 relog 中都会有记录。
    - 使用 `git reset -i hash值`（想要恢复的版本）
    
