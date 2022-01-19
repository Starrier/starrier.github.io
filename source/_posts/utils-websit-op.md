---
title: utils-websit-op
date: 2021-01-23 20:58:20
tags: [性能优化]
author: Imperater
excerpt: 网站性能优化
swiper:
keywords: [性能优化]
description: 网站性能优化
---

# 网站性能优化

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

## JPG，PNG 等替换为使用 webp

1. 下载 `cwebp`

```shell script
brew install cwebp
```

2. 在需要替换的目录下，执行替换命令

```shell script
cwebp beian-log.png -o beian-log.webp
```

3. 使用 `html` 支持的标签，替换


