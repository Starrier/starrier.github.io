---
title: Java 环境安装 - Centos-Mac-Windows
date: 2021-01-31 13:34:10
author: Imperator
tags: [java,centos,mac,windows,win]
excerpt: Java 环境安装 - Centos,Mac,Windows
swiper:
keywords: [java,centos,mac,windows,win]
description: Java 环境安装 - Centos,Mac,Windows
---

#  Java 环境安装

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 PR 谢谢~~

## 一. Centos

1. 卸载系统自带的 `JDK` 版本

  - 查找系统 `jdk`

```shell
[root@rort ~]#  rpm -qa|grep java 
java-1.6.0-openjdk-1.6.0.37-1.13.9.4.el5_11
tzdata-java-2015g-1.el5
```
 
 - 如果存在，则进行卸载

```shell
[root@root ~]# rpm -e --allmatches --nodeps java-1.6.0-openjdk-1.6.0.37-1.13.9.4.el5_11
[root@root ~]# rpm -e --allmatches --nodeps tzdata-java-2015g-1.el5
```

 - 检查是否卸载干净

```shell
[root@root ~]#  rpm -qa|grep java 
```

2. 查找yum下可更新的Java列表

```shell
yum -y list java*
// or
yum search jdk
```

3. 安装 `java`

```shell
yum install -y java-1.8.0-openjdk.x86_64
```

4. 验证

```shell
java -version
```


配置环境变量

```shell
export JAVA_HOME=/usr/lib/jvm/jre-1.8.0-openjdk
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
```
