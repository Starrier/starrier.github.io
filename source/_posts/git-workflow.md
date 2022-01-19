---
title: git-workflow
date: 2019-01-13 20:08:28
author: Starriers
tags: [开发工具]
---

# Different Authority

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

 
 Before the read following content, I consider you hava already had the basics of Git by default. If not, be sure to familiar with it first.

 1. As a developer, that is,having the authority of the repo.
 2. As a open source developer


## 1. 

You should checkout a new branch for your own development env. from the develop branch.

### Branch name regular:

##### New Branch：

`f-datatime-newFeature-developerName`

**eg.** 

`f-20190326-init-starrier`

**Fix Bug**

 `b-dataTime-projectName-developerName`

**eg.**

 `b-20190326-original-starrier`

 **Note**
 
 Whether your are developing new features or fixing bugs,make sure your commit(s) content makes sense every time.

 Before you complete the contennt, the recommanded recommendation is to use `git stash` to temporarily store the current workspace. Otherwise, at the end of the execute `git push`, use `git rebase` or `git cherry-pick` to modify the commit record. Make sure the cleanliness of the project's commit.

 ## 2.

 Before you PR(pull request), please fork your own version repo. When the new feature or modified content of your request has been confirmed, execute the PR finally.
