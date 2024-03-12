---
title: 单元测试 - Mockito - powermock - 内部私有函数
date: 2021-02-03 10:41:40
author: Imperater
tags: [单元测试]
excerpt: 单元测试 - Mockito - powermock - 内部私有函数
swiper:
keywords: [mockito,powermock,私有函数测试]
description: 单元测试 - Mockito - powermock - 内部私有函数
---

# 单元测试 - Mockito - powermock - 内部私有函数

> * 原文地址：[https://starrier.starrier.org/blogs/test-mockito-private.html](https://starrier.starrier.org/blogs/test-mockito-private.html)
> * 原文作者：[imperater](https://github.com/imperater)
> * 本文永久链接：[https://starrier.starrier.org/blogs/test-mockito-private.html](https://starrier.starrier.org/blogs/test-mockito-private.html)

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

> 1. [单元测试 - Mockito - powermock - 实例函数调用](https://starrier.starrier.org/blogs/test-mockito-method.html)
>
> 2. [单元测试 - Mockito - powermock - 静态方法](https://starrier.starrier.org/blogs/test-mockito-static.html)
>
> 3. [单元测试 - Mockito - powermock - 异常测试](https://starrier.starrier.org/blogs/test-mockito-exception.html)
>
> 4. [单元测试 - Mockito - powermock - 内部私有函数](https://starrier.starrier.org/blogs/test-mockito-private.html)

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

##### 参考文章
