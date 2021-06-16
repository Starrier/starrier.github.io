---
title: 日常工具-端口占用-Mac-Wind
date: 2021-01-20 09:53:18
author: Imperater
tags: [开发工具]
excerpt: 日常工作，常用命令解析，端口占用，Mac，Win 环境。
---

# 日常工具-端口占用-Mac-Wind

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

## 一. Mac 环境

### 1. 根据指定端口，查找占用端口的进程的 pid

```shell script
lsof -i:4000
```

##### Result:

```shell script
starrier:starrier.github.io starrier$ lsof -i:4000
COMMAND  PID     USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    1879 starrier   46u  IPv6 0x8546bfa6d2b2dd07      0t0  TCP *:terabase (LISTEN)
```

### 2. 解除端口与进程的关联

```shell script
kill -9 1897
```

#### `lsof` 更多的使用方式，参见 [lsof command 命令用法]()

