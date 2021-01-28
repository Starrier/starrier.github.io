# Starrier's Blog

[![Build Status](https://travis-ci.com/Starrier/starrier.github.io.svg?branch=master)](https://travis-ci.com/Starrier/starrier.github.io)

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
