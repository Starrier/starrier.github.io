---
title: hexo-function
date: 2021-01-22 10:12:15
tags: [hexo]
excerpt: hexo 小功能
swiper: https://cdn.jsdelivr.net/gh/Starrier/configure-resources/images/starrier/fin-series.jpeg
keywords: hexo
img: https://cdn.jsdelivr.net/gh/Starrier/configure-resources/images/starrier/fin-series.jpeg
description: hexo 功能升级
---

# Hexo 功能启用

## 搜索功能

```javascript
var stripe_code_line_num = function(str) { // 去除代码
    return str.replace(/<figure class="highlight.*?<\/figure>/ig, '');
}
var stripe = function (str) { // 去除html标签
    return str.replace(/(<([^>]+)>)/ig, '');
}
var minify = function (str) { // 压缩成一行
    return str.trim().replace(/\n/g, ' ').replace(/\s+/g, ' ');
}

module.exports = function(locals) {
  var config = this.config;
  var database = require('./database')(locals, config);
  database.forEach( function(element, index) {
    element.content = minify(stripe(stripe_code_line_num(element.content)));
  });
  var xml = searchTmpl.render({
    articles: database,
    config  : config.search
  });
  return {
    path: config.search.path,
    data: xml
  };
};

```
