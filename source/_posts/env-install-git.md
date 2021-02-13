---
title: env-install-git
date: 2021-01-13 20:13:11
author: Imperator
tags:
---

# Centos Git

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

## 检查服务器中是否存在 Git

`rpm -qa|grep git`

如果已经安装，先卸载

`rpm -e --nodeps git` 或者 `rpm -e git`

安装 Git

`yum install git`
