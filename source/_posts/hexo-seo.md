---
title: hexo-seo 优化
date: 2021-01-21 09:35:56
author: Imperator
tags: [hexo]
excerpt: hexo seo 优化
swiper: true
swiperImg: https://cdn.jsdelivr.net/gh/Starrier/configure-resources/images/starrier/snow.webp
img: https://cdn.jsdelivr.net/gh/Starrier/configure-resources/images/starrier/fin-series.jpeg
---

# Hexo SEO  优化

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

## 一. 

## 二. `nofollow` 标签

### 1. 安装插件

#### 1). npm

```shell script
npm i hexo-filter-nofollow --save
```

#### 2). yarn

```shell script
yarn add hexo-filter-nofollow

```

### 2. 启用配置

在根目录下的 `_config.yml` 中启用配置

```yaml
# nofollow
nofollow:
  enable: true
  field: site
  exclude:
    - 'starriers.starrier.org'
    - 'github.com/Starrier'
    - 'github.com/Starriers'
```

配置说明：

- enable - 是否启用插件，默认值为 true
- field - 插件的处理范围，默认值为 site，可选 post 或 site
  - post - 仅处理文章内容
  - site - 处理全站所有页面
- exclude - 域名白名单，不同的子域名视为不同的域名（如 www）
  - starriers.starrier.org不包括 http://starriers.starrier.org 或 starriers.starrier.org

## 三. 开启压缩文件

### 1. 下载配置

```shell script
npm install hexo-neat --save
```

### 2. 开启配置

```yaml
# hexo - neat
# 开启压缩, 博文压缩
neat_enable: true
# 压缩 html
neat_html:
  enable: true
  exclude:
# 压缩 css
neat_css:
  enable: true
  exclude:
    - '**/*.min.css'
# 压缩 js
neat_js:
  enable: true
  mangle: true
  output:
  compress:
  exclude:
    - '**/*.min.js'
    - '**/index.js'
```

## 四. hexo search

```shell script
npm install hexo-generator-searchdb
```

## 五. hexo keywords

关键字优化，为文章添加 HTML meta keywords 关键字描述

```javascript
 <% if (page.keywords){ %>
    <meta name="keywords" content="<%= page.keywords %>,<%= config.keywords %>">
 <% } else if (config.keywords){ %>
    <meta name="keywords" content="<%= config.keywords %>">
  <%} %>
```
