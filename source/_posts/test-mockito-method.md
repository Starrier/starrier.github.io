---
title: 单元测试 - Mockito - powermock -实例函数调用
date: 2020-12-26 22:10:53
tags: [test,mockito,powermock]
excerpt: 单元测试-Mockito, 函数方法调用使用示例
---

# 单元测试 - Mockito - powermock -实例函数调用

## 一. 引入 Maven 坐标

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

## 二 测试类声明

在当前的测试类上，引入下列代码。其中 `@PrepareForTest`  用于声明所需要引入的静态类（如工具类）。详情参见：[单元测试 - Mockito - powermock - 静态方法](https://starrier.starrier.org/blogs/test-mockito-static.html)

```java
@RunWith(PowerMockRunner.class)
@PowerMockRunnerDelegate()
@PowerMockIgnore({"javax.management.*", "javax.net.ssl.*"})
@PrepareForTest({     
})
```

## 三. 注入实例

注入对应的实例变量，包括待测试的类以及对应类所引用的实例（需要被 mock 的方法）

```java
    //  待测试的类
    @InjectMocks
    private TargetService targetService;
   
    //  需要被 mock 的实例方法
    @Mock
    private TargetDao targetDao;
   
    // mock 初始化
    @Before
    public void before() throws Exception {
        MockitoAnnotations.initMocks(this);
        MemberModifier
                .field(TargetService.class, "targetDao")
                .set(targetService, targetDao);
    }
```

## 四.  在 test 中，引入 mock 的数据

```java
   @Test
    public void saveCertificatePolicy() {
    Mockito
     .when(targetDao.insert(Mockito.any(TargetMapping.class)))
    .thenReturn(new TargetEntity());
   }
```

##### 注意：

1.  如果 Mockito 中，包含多个参数，则要么都为实际参数，要么都是 Mockito 所构造的参数，否则会报错。
2.  如果对于返回值 `thenReturn` 需要指定的数据，则自行自己定义并放入即可。
