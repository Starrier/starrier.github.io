---
title: Hexo 常用命令
date: 2021-03-23 10:47:25
author: Starriers
tags: [hexo]
excerpt: Hexo 常用命令
swiper:
keywords: [hexo,命令]
description: [hexo,命令]
---

# Hexo 常用命令

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~


```markdown
npm install hexo -g #安装  
npm update hexo -g #升级  
hexo init #初始化

hexo n "我的博客" == hexo new "我的博客" #新建文章
hexo p == hexo publish
hexo g == hexo generate#生成
hexo s == hexo server #启动服务预览
hexo d == hexo deploy#部署

hexo server #Hexo 会监视文件变动并自动更新，您无须重启服务器。
hexo server -s #静态模式
hexo server -p 5000 #更改端口
hexo server -i 192.168.1.1 #自定义 IP

hexo clean #清除缓存 网页正常情况下可以忽略此条命令
hexo g #生成静态网页
hexo d #开始部署

hexo generate #使用 Hexo 生成静态文件快速而且简单
hexo generate --watch #监视文件变动

两个命令的作用是相同的
hexo generate --deploy
hexo deploy --generate
```

