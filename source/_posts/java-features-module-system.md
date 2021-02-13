---
title: java-features-module-system
date: 2020-12-28 22:36:35
author: Imperator
tags: [java,jdk,jdk9,features,module-system]
excerpt: jdk 9 module-system 简介
---

# Java Features - Module System -JDK 9

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

## 一. 背景
Java 8 以前，我们使用 maven 或者 gradle 管理 jar 包时，可能会因为某一个小方法而必须引入一整个对应的 jar 包，这就导致当前 jar 包的 classpath 路径名会非常长，从而形成 jar hell。

## 二. module system 的目标
Java 9 引入 Model System，您可以将 Java 应用程序视为具有明确定义的边界和这些模块之间依赖关系的交互模块的集合。 模块系统的开发具有以下目标：

1. 可靠的配置
2. 强封装
3. 模块化JDK/JRE

Java 9 中的模块系统脱胎于 OpenJDK 的 Jigsaw 项目。Jigsaw的设计目标是：

- 为了让开发者构建和维护一个大型的库或应用程序更容易

- -提高javaSE平台及JDK实现的安全性和可维护性；

- 提升应用的性能；

- 在javase及JDK平台，让应用更小以便于部署于更小的计算单元及紧密的云部署系统。

## 三. 如何使用

为了解决 jar hell 的问题，同时达到目标，module system 实际上是在 package 的级别上又封装了一层。

### 1. 引入 module-info.java
我们需要对应的 package 的目录下引入` module-info.java` 文件。

### 2. 在 文件中，写入相关信息

```java
module test{
  export com.test;
  require java.security;
}
```

- test  为当前 module 名。

- export 为暴露的模块名

- require  为当前模块需要依赖的 module 名。

### 四. module 种类
