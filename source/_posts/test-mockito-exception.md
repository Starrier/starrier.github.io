---
title: 单元测试 - Mockito - powermock - 异常测试
date: 2021-01-12 22:39:39
author: Imperater
tags: [test,mockito,powermock]
excerpt: 单元测试-Mockito, 静态方法调用，使用示例
---

# 单元测试 - Mockito - powermock - 异常测试

> * 原文地址：[https://starrier.starrier.org/blogs/test-mockito-exception.html](https://starrier.starrier.org/blogs/test-mockito-exception.html)
> * 原文作者：[imperater](https://github.com/imperater)
> * 本文永久链接：[https://starrier.starrier.org/blogs/test-mockito-exception.html](https://starrier.starrier.org/blogs/test-mockito-exception.html)

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

> 1. [单元测试 - Mockito - powermock - 实例函数调用](https://starrier.starrier.org/blogs/test-mockito-method.html)
>
> 2. [单元测试 - Mockito - powermock - 静态方法](https://starrier.starrier.org/blogs/test-mockito-static.html)
>
> 3. [单元测试 - Mockito - powermock - 异常测试](https://starrier.starrier.org/blogs/test-mockito-exception.html)
>
> 4. [单元测试 - Mockito - powermock - 内部私有函数](https://starrier.starrier.org/blogs/test-mockito-private.html)

## 一. 引入 maven 坐标
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

> 具体的版本，可去 maven 中心仓库自行查找自己想要的

## 二. Mock 异常

### 1. mock 异常的发生

```java
Mockito.when(Mockito.anyObject())
        .thenThrow(new Exception());
```

或者使用

```java
 Mockito.when(Mockito.anyObject())
        .thenThrow(Exception.class);
```

### 2. 对异常进行断言

####  1）. 使用 `@Test` 注解
在测试类上加上注解，`expected` 中的异常为具体的  `mock`  异常。
```java
@Test(expected = Exception.class)
```

####  2）. 使用 `try-catch`

#### 3）.  使用 `@Rule`  结合 `JUnit` 的 `ExpectedException` 类

-  声明全局变量，且为 `public` 类型
```java
    @Rule
    public ExpectedException exception = ExpectedException.none();
```

- 在调用方法前，使用断言

```java
exception.expect(IOException.class);
```
