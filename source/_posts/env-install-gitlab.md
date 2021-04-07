---
title: env-install-gitlab
date: 2019-01-13 19:58:10
author: Imperator
tags: [gitlab,docker]
---

#  环境搭建 - Docker - 安装 GitLab

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

## 一. 使用 Docker 安装 GitLab 镜像服务器

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

## 二. GitLab 配置

### 1. 配置邮件服务器

```shell
#配置下面，需要配置smtp_tls 注意gitlab_rails['smtp_tls'] 这个是设定为true
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp.exmail.qq.com"
gitlab_rails['smtp_port'] = 465
gitlab_rails['smtp_user_name'] = "xxx@*****.com"
gitlab_rails['smtp_password'] = "********"
gitlab_rails['smtp_domain'] = "smtp.exmail.qq.com"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_tls'] = true
##配置邮箱来源， 与展示的名称
gitlab_rails['gitlab_email_enabled'] = true
gitlab_rails['gitlab_email_from'] = 'xxn@*****.com'
gitlab_rails['gitlab_email_display_name'] = ''
```
