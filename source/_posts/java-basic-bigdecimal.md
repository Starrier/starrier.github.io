---
title: BigDecimal 最佳实践
date: 2021-06-10 09:46:23
author: Imperator
tags: [java basic]
excerpt: BigDecimal 最佳实践
swiper:
keywords: [BigDecimal 最佳实践]
description: BigDecimal 最佳实践
---

# BigDecimal 最佳实践

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

## 1. BigDecimal.subtract()


返回一个BigDecimal，其值为 (this - subtrahend), 精度为 max(this.scale(), subtrahend.scale()).

```javascript
public class BigDecimalDemo {

    public static void main(String[] args) {

        // create 3 BigDecimal objects
        BigDecimal bg1, bg2, bg3;

        bg1 = new BigDecimal("100.123");
        bg2 = new BigDecimal("50.56");

        // subtract bg1 with bg2 and assign result to bg3
        bg3 = bg1.subtract(bg2);

        String str = "The Result of Subtraction is " + bg3;

        // print bg3 value
        System.out.println( str );
    }
}
```

## 2. NumberFormatException

一般是由于输入值为空字符串导致的。

