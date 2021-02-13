---
title: env-install-ngnix
date: 2019-01-13 20:04:41
author: Imperator
tags: [nginx,docker]
---

#  Nginx

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

```shell script
 Nginx

 docker run --name nginx -d -p 82:80 \
-v /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
 -v /data/nginx/logs:/var/log/nginx -d docker.io/nginx
```
