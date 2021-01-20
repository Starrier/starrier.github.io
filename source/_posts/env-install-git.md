---
title: env-install-git
date: 2021-01-13 20:13:11
tags:
---

# Centos Git

## 检查服务器中是否存在 Git

`rpm -qa|grep git`

如果已经安装，先卸载

`rpm -e --nodeps git` 或者 `rpm -e git`

安装 Git

`yum install git`
