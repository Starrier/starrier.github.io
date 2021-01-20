---
title: 单元测试 - Mockito - powermock - 静态方法
date: 2020-12-22 22:18:10
tags: [test,mockito,powermock]
excerpt: 单元测试-Mockito, 静态方法调用，使用示例
---
# 单元测试 - Mockito - powermock - 静态方法

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

> 具体 pom 版本，可去 maven 中心仓库选择。

##### 1. 我们需要在测试类上加上需要使用静态类的 class

```java
@PrepareForTest(Utils.class)
public class test(){
}
```

##### 2.  在对应需要测试的地方，加上 mock 静态方法的逻辑

```java
  PowerMockito.mockStatic(RedisProviderHelper.class);
  Mockito.when(Utils.getUtils()).thenReturn(null);
```
