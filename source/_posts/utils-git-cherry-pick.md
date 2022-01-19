---
title: 使用 git cherry-pick 获取指定提交内容
date: 2021-02-01 22:10:23
author: Starrier
tags: [开发工具]
excerpt: 使用 git cherry-pick 获取指定提交内容
swiper:
keywords: [git,cherry-pick]
description: 使用 git cherry-pick 获取指定提交内容
---

# 使用 git cherry-pick 获取指定提交内容

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 PR 谢谢~~

简而言之，`cherry-pick` 就是从不同的分支中捡出一个单独的 commit，并把它和你当前的分支合并。如果你以并行方式在处理两个或以上分支，你可能会发现一个在全部分支中都有的 bug。如果你在一个分支中解决了它，你可以使用 `cherry-pick` 命令把它 commit 到其它分支上去，而不会弄乱其他的文件或 commit。

以我目前做的项目为例，现在有 4 个开发者维护着四个分支，以自己的用户名命名，开发出一个特性后定时合并到 dev 分支。并且规定各自分支不能将合并后的 dev 分支代码合并回自己分支，以免发生混乱。但是这样就有个问题，比如 A 开发出一个特性，B 的后续特性需要依赖 A 开发出来的特性，由于 B 不能合并远程的 dev 分支，故 B 是没有办法获取 A 开发的特性的。

这个时候，`cherry-pick` 就起作用了，假设 dev 分支上 A 最近一次提交为 `hash-1`，B 就可以在自己分支上执行 `git cherry-pick hash-1` 来获取 A 最近一次提交更新的文件，如果没有冲突，B 的分支将自动进行一次与 A 一致的提交，否则进行合并后提交。这时，B 就可以使用 A 开发的特性了。

##### 参考文章
