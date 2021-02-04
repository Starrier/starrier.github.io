---
title: env-install-gitlab
date: 2019-01-13 19:58:10
author: Imperator
tags: [gitlab,docker]
---

#  环境搭建 - Docker - 安装 GitLab

```shell script
docker run -dit \
-p 8443:443 \
-p 8080:80 \
-p 2222:22 \
-p 9090:9090 \
--name gitlab \
--restart always \
-v /home/gitlab/config:/etc/gitlab \
-v /home/gitlab/logs:/var/log/gitlab \
-v /home/gitlab/data:/var/opt/gitlab 
```
