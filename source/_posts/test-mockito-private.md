---
title: 单元测试 - Mockito - powermock - 内部私有函数
date: 2021-02-03 10:41:40
author: Imperater
tags: [mockito,powermock,test]
excerpt: 单元测试 - Mockito - powermock - 内部私有函数
swiper:
keywords: [mockito,powermock,私有函数测试]
description: 单元测试 - Mockito - powermock - 内部私有函数
---

# 单元测试 - Mockito - powermock - 内部私有函数

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 PR 谢谢~~


## 第一种方式：

> 部分版本可能会有问题，未深究。


## 第二种方式

##### 1. 首先，我们需要引入相关 maven 依赖。

```xml
        <dependency>
            <groupId>org.powermock</groupId>
            <artifactId>powermock-api-mockito</artifactId>
            <version>${powermock.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.powermock</groupId>
            <artifactId>powermock-core</artifactId>
            <version>${powermock.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.powermock</groupId>
            <artifactId>powermock-module-junit4</artifactId>
            <version>${powermock.version}</version>
            <scope>test</scope>
        </dependency>
```

#### 2. 使用注解 `@Spy` 进行方法注入

```java
@Spy
private TestService mockService = new TestService();
```

#### 3. 在方法中引用

```java
Whitebox.invokeMethod(powerMock, "getCarOperationService", vehicleGuidePriceParam);
```
