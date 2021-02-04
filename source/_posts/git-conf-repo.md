---
title: Git 远程仓库设置
date: 2021-01-11 16:35:33
author: Imperator
tags: [git]
excerpt: git 本地代码关联远程仓库配置
swiper: 
keywords: [git,repository]
description: Git 远程仓库设置
---

# Git 远程仓库设置

## 一. 切换远程仓库地址

### 1. 本地仓库暂无关联的远程仓库

> 更换远程仓库地址，URL为新地址ß

```git
git remote set-url origin URL
```

### 2. 本地仓库已有关联的远程仓库

#### 1. 删除现有远程仓库

```git
git remote rm origin
```

#### 2. 关联远程仓库

```git
git remote add origin URL
```
