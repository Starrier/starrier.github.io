---
title: GitHub - Hexo - 网站数据分析 - Baidu
date: 2021-01-11 17:13:31
author: Imperator
tags: [Hexo]
excerpt: hexo 静态 blog，添加 baidu 网站数据分析流程
---

# GitHub - Hexo - 网站数据分析 - Baidu

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

## 一. Baidu

### 1. 进入 `theame` 文件夹，正在使用的主题

编辑文件 `themes/使用的主题/_config.yml`,添加一行配置，

```yml
baidu_tongji: true
```

### 2. 新建用于分析的脚本文件

新建 `themes/使用的主题/layout/_partial/baidu_tongji.ejs`,新增内容：

```js
<% if (theme.baidu_tongji) { %>
<script type="text/javascript">
#申请的百度统计代码
</script>
<% } %>
```

编辑 `themes/使用的主题/layout/_partial/head.ejs` 在 `</head>` 前添加 `<%- partial("baidu_tongji") %>` 重新生产部署站点即可。
