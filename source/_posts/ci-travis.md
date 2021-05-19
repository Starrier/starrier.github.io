---
title: GitHub 集成 Travis-CI Maven 项目
date: 2021-02-04 22:50:36
author: Imperater
tags: [DevOps]
excerpt: GitHub 集成 Travis-CI Maven 项目
swiper:
keywords: [github,travis,maven]
description: GitHub 集成 Travis-CI Maven 项目
---

# GitHub 集成 Travis-CI Maven 项目

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~


`GitHub` 开源项目的集成，可以使用的工具很多，以下介绍 `GitHub` 与 `Travis-CI` 的集成。 

目前，`Travis-CI` 存在两个域名地址，`travis-ci.org` 与 `travis-ci.com`。`.org` 即将被弃用，目前已经存在的项目可以无缝迁移至 `.com`。迁移完成后，之前的历史记录不会被迁移，新迁移的项目，将会在该项目迁移后的第一次指定集成分支提交代码后，进行集成工作。

## 一. 新建 `.travis.yml`

在需要使用 travis 的项目的根目录，新建 `.travsi.yml` 文件。

`Travsi` 可以与多种开发语言及多种开发工具进行配合使用。具体使用方式，开参考官方文档。以下简介几种集成。

### 1. Maven

```yml
language: java

jdk:
  - openjdk8

cache:
  directories:
    - '$HOME/.m2/repository'

before_install:

script:
  - mvn clean package -DskipTests=true
  ## Codecov CI
  - mvn cobertura:cobertura

after_success:
  ## Codecov CI
  - bash <(curl -s https://codecov.io/bash)
  - cd ./target
  - git init
  - git config user.name "Starrier"
  - git config user.email "starrier@starrier.com"
  - git add .
  - git commit -m "travis-ci"
  - git push --force --quiet "https://${GITHUB_TOKEN}@${GH_REF}" master:master

## 指定需要进行集成的代码分支

branches:
  only:
    - master

## 环境配置，可以设置在  travis-ci 的界面中，作为环境变量植入
env:
  global:
    - GH_REF=https://github.com/Starrier/commons.git
```
