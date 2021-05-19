---
title: 深入理解 SpringBoot 注解 @ShellMethod 
date: 2021-01-12 23:26:26
author: Imperator
tags: [Spring Boot]
excerpt: SpringBoot @ShellMethod 简介
keywords: [spring-boot,ShellMethod]
description: 深入理解 SpringBoot 注解 @ShellMethod
---

# 深入理解 SpringBoot 注解 @ShellMethod

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

`@ShellMethod` 将一个方法声明为 Shell 命令。默认情况下：

1. 方法名为命令名称
2. 类名称为 `shell` 所属分组
3. springshell 默认将驼峰方法名用 `-` 连接符替换
> caculateSum -> caculate-sum



## 一. 定义 shell 属性

```java
@ShellMethod(value = "caculate two value sum", key = {"add","sum"}, group = "group1", prefix = "-")
public int sum(int a, int b){
    return a + b;
}
```

## 二. 查看分组名

在终端，使用  help 命令，查看更多信息。

```shell
help
```

## 三. 方法调用


```shell
shell:>add 2 1
3
shell:>sum 2 1
3
```

带参调用

```shell
shell:>add -a 2 -b 1
3
```

