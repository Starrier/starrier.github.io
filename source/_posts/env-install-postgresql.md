---
title: env-install-postgresql
date: 2019-01-13 20:01:48
tags: [docker,env,postgresql]
---

## 安装 postgresql container

``` docker
docker run --name gitlab-postgresql -d \
    --env 'DB_NAME=gitlabhq_production' \
    --env 'DB_USER=gitlab' --env 'DB_PASS=password' \
    --volume /srv/docker/gitlab/postgresql:/var/lib/postgresql \
    sameersbn/postgresql:9.4-12
```
