---
title: Guava - MultiSet 分析及教程
date: 2021-01-13 20:15:08
tags: [guava]
---

# Guava - MultiSet 分析及教程

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
