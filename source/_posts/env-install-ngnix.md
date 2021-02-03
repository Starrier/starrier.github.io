---
title: env-install-ngnix
date: 2019-01-13 20:04:41
author: Imperator
tags: [nginx,docker]
---

#  Nginx

```shell script
 Nginx

 docker run --name nginx -d -p 82:80 \
-v /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
 -v /data/nginx/logs:/var/log/nginx -d docker.io/nginx
```
