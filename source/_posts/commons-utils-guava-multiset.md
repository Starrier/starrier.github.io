---
title: Guava - MultiSet 原理与实战
date: 2021-01-13 20:15:08
author: Imperater
tags: [开发工具]
excerpt: Java 集合 ArrayList 详解
swiper: 
keywords: [guava,multiset]
description: Guava - MultiSet 原理与实战
---

# Guava - MultiSet 原理与实战

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

函数签名：

```java
@GwtCompatible
public interface Multiset<E> extends Collection<E> {}
```

`MultiSet` 可以跟踪每种对象的数量，所以可以用来进行数字统计。

常规的 `Java` 方法：

```java
 Map<String, Integer> map1 = new HashMap<>();

 List<String> wordList = Arrays.asList("the","b");
 for (String word : wordList) {
      Integer count =  map1.get(word);
      map1.put(word,(count == null)?1:count +1);
    }
    Integer count = map1.get("the");
    System.out.println(count);//1
```

如果使用 `MultiSet`：

##### 参考文章

