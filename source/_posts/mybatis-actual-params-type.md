---
title: mybatis-actual-params-type
date: 2021-02-22 15:48:29
author: Imperater
tags: [中间件]
excerpt: MyBatis实战-传参类型
swiper:
keywords: [MyBtais,params]
description: MyBatis - 实战 - 传参类型
---

# MyBatis - 实战 - 传参类型

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~


## 1. 单个参数

```java
   //接口方法
   int getAgeById(Integer id);
   //xml映射文件
   <select id="getAgeById" resultType="Integer">
   select age from user where user_id = #{id}
   </select>

```


## 2. 多个参数

```xml
   <!--接口方法-->
   User login(@Param("username") String username, @Param("password") String password);
   <!--xml映射文件-->
<select id="login" resultMap="BaseResultMap">
    select
    *
    from user
    where username = #{username} and password = #{password}
</select>
```


## 3. 数组参数

```xml
   <!--接口方法-->
        ArrayList<User> selectByIds(Integer [] ids);
   <!--xml映射文件-->
    <select id="selectByIds" resultMap="BaseResultMap">
        select
        *
        from user where id in
        <foreach item="item" index="index" collection="array" open="(" separator="," close=")">
            #{item}
        </foreach>
    </select>
```

## 4.List参数

```xml
<!--接口方法-->
ArrayList<User> selectByIds(List<Integer> ids);
<!--xml映射文件-->
    <select id="selectByIds" resultMap="BaseResultMap">
        Select
        <include refid="Base_Column_List"/>
        from jria where ID in
        <foreach item="item" index="index" collection="list" open="(" separator="," close=")">
            #{item}
        </foreach>
    </select>
```
