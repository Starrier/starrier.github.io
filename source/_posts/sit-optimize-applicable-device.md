---
title: sit-optimize-applicable-device
date: 2021-01-27 13:36:17
author: Imperator
tags: [性能优化]
excerpt: 网站优化，设备适配优化
swiper:
keywords: [seo,applicable-device]
description: 网站设备适配优化
---

# 网站优化 - 设备适配优化

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

## 1. PC 

如果该网页只适合在电脑上进行浏览，例如（http://starrier.org/ ），

在html中加入如下meta：

```html
 <meta name="applicable-device" content="pc">  
```


## 2. Mobile 移动端
如果该网页只适合在移动设备上进行浏览，例如（http://m.starrier.org/ ），

在 html中加入如下meta：

```html
 <meta name="applicable-device" content="mobile"> 
```

## 3. PC && 移动端都适配

如果网页采用了响应式网页设计，例如（http://starrier.starrier.org/） 不需要经过url自适配跳转就可以根据浏览器的屏幕大小自适应的展现合适的效果，同时适合在移动设备和电脑上进行浏览

在html中加入如下meta：  

```html
<meta name="applicable-device" content="pc,mobile">

```
