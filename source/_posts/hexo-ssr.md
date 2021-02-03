---
title: hexo-rss
date: 2021-01-22 13:10:58
author: Imperator
tags: [hexo,rss]
excerpt:  使用 RSS 作为 Hexo 的文章推送渠道
swiper: https://github.com/Starrier/configure-resources/blob/master/images/starrier/fin-series.jpeg
img: https://cdn.jsdelivr.net/gh/Starrier/configure-resources/images/starrier/fin-series.jpeg
keywords: [hexo,rss]
description: hexo 使用 RSS 推送新文章发布消息
---

# Hexo - RSS - 文章推送

使用 SSR 推送新文章给订阅者。

## 一. 下载 hexo 插件

```npm
npm install hexo-generator-feed
```

## 启用

```shell script

# 配置 Rss 订阅
Plugins: 
- hexo-generate-feed
```
