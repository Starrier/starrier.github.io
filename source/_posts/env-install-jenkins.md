---
title: env-install-jenkins
date: 2019-01-13 19:59:24
author: Imperator
tags: [docker,jenkins]
---

# 环境搭建 - docker - 安装 jenkins

```shell script
docker run --name devops-jenkins \ 
--user=root \
-p 8080:8080 \
-p 50000:50000 \
-v /opt/data/jenkins_home:/var/jenkins_home \
-d jenkins/jenkins
```

