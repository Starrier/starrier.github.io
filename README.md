# Starrier's Blog

[![Build Status](https://app.travis-ci.com/Starrier/starrier.github.io.svg?branch=master)](https://travis-ci.com/Starrier/starrier.github.io)

## 一. `Gulp` 说明

如果在使用  `gulp` 命令时，导致压缩 `html` 无法被压缩，出现异常，目前的解决方法是，在 `gulpfile.js` 中禁用 `
minify-html` 模块


#### **特别说明**

1. 使用 `hexo new` 语法生成的文章中：

```markdown
---
title:  
date:  
tags:  
excerpt:  
swiper:
keywords:  
description:  
---
```

所以 `value` 禁止出现 `markdown` 语法内容。


## 站点性能检测

1. 安装插件

```npm
npm install 
```

2. 新增文件 `budget.json`,直接复制下文内容

```json
[
  {
    "path": "/*",
    "timings": [
      {
        "metric": "interactive",
        "budget": 3000
      },
      {
        "metric": "first-meaningful-paint",
        "budget": 1000
      }
    ],
    "resourceSizes": [
      {
        "resourceType": "script",
        "budget": 125
      },
      {
        "resourceType": "total",
        "budget": 300
      }
    ],
    "resourceCounts": [
      {
        "resourceType": "third-party",
        "budget": 10
      }
    ]
  }
]
```


3. 运行

```shell
lighthouse http://localhost:4000 --budget-path=./budget.json
```
