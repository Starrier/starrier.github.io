---
title: env-install-jenkins
date: 2019-01-13 19:59:24
author: Imperator
tags: [DevOps]
---

# 环境搭建 - docker - 安装 jenkins

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

```shell script
docker run --name devops-jenkins \ 
--user=root \
-p 8080:8080 \
-p 50000:50000 \
-v /opt/data/jenkins_home:/var/jenkins_home \
-d jenkins/jenkins
```

