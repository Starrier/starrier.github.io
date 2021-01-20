---
title: git-checkout
date: 2019-01-13 20:08:19
tags:
---

# git-checkout

1. 本地从当前所在分支上创建一个新分支。

``` git
git chekout -b 新分支名
```

2. 拉取远程某个分支到本地：

```git
git chekout -b 本地分支名 origin/远程分支名
``` 

# git-rebase

```git
git rebase <basebranch> <topicbranch>
```

git rebase origin/a

git am --show-current-patch


git 查看当前分支是从哪个分支切出来的

`git reflog --date=local | grep 分支名`

查看git log的图

`git log --graph --all --decorate`

git 添加上游仓库

`git remote add upstream url`

`git fetch upstream`

`git merge upstream/master`

### 从远程分支新建分支

`git checkout -b newBranchName origin/RemoteBranchName`


### 删除远程分支

`git push --delete oriign remoteBranchName`
