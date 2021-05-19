---
title: git-commit 修改提交的 commit 信息 author
date: 2021-01-28 14:04:27
author: Imperater
tags: [开发工具]
excerpt: git-commit 修改提交的 commit 信息 author
swiper:
keywords: [git,amend,reset]
description: git-commit 修改提交的 commit 信息 author
---

#  git-commit 修改提交的 commit 信息 author

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

### 1. 直接修改当前的作者信息

```gitexclude
git commit --amend --reset-author
```

### 2. 对于已经 commit 的信息，可以使用如下命令

```gitexclude
git commit --amend --author="NewAuthor <NewEmail@address.com>"
```
