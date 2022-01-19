---
title: 环境搭建 - kafka -docker
date: 2021-01-25 12:39:05
author: Imperator
tags: [环境搭建]
excerpt: 使用 `Docker` 搭建 `kafka` 环境
swiper: 
keywords: [docker,kafka]
description: 使用 `docker` 搭建 `kafka` 环境
---

# 使用 `docker` 搭建 `kafka` 环境

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

## 一. 下载镜像

```dockerfile
docker pull wurstmeister/zookeeper
docker pull wurstmeister/kafka
```

kafka

## Docker zookeeper

docker run -d --name zookeeper -p 2181:2181 -t zookeeper

## Docker Kafka 创建

docker run -d --name kafka --publish 9092:9092 \
--link zookeeper \
--env KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181 \
--env KAFKA_ADVERTISED_HOST_NAME=127.0.0.1 \
--env KAFKA_ADVERTISED_PORT=9092 \
wurstmeister/kafka

## Kafka manager

docker run -d --name kafka-manager \--link zookeeper:zookeeper \--link kafka:kafka -p 9001:9000 \--restart=always \--env ZK_HOSTS=zookeeper:2181 \sheepkiller/kafka-manager
