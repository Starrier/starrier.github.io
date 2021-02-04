---
title: Linux 下文件的打包与压缩
date: 2019-06-23 21:27:10
author: Imperator
tags:
excerpt: Linux 下文件的打包与压缩
swiper:
keywords:
description: Linux 下文件的打包与压缩
---

# Linux 下文件的打包与压缩

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 PR 谢谢~~



| 工具 | 文件扩展名 | 描述 |
| --- | --- | --- |
| bzip2 | .bz2 | 采用 Burrows-Wheeler 块排序文本压缩算法和霍夫曼编码 |
| compress | .Z | 原始的 Unix 文件压缩工具，逐渐消失中 |
| gzip | .gz | GUN 压缩工具，用 Lempel-Ziv 编码 |
| zip | .zip | Win 上的 PKZIP 工具的 unix 实现 |

## bzip2

1. bzip2

> 1. bzip2 用于压缩文件
2. bzcat 用来显示压缩文本文件内容
3. bunzip2 用来解压缩 .bz2 文件
4. bzip2recover 用来尝试恢复损坏的压缩文件

2. bzcat

> 用来显示压缩的文本文件内容

3. bunzip2

> 用来解压缩 .bz2 文件

### tar

| 功能 | 全名 | 描述 |
| -- | -- | -- |
| -A | --concatenate | 将一个已有 tar 归档文件追加到另一个已有 tar 归档文件 |
| -c | --create | 创建一个新的 tar 归档文件 |


## 归档

``` linux
 tar
      c  创建
      f  指定归档文件名称
      t  显示归档文件中的内容
      r  向归档文件中添加文件
      --get 取出单个文件
      --delete 删除单个文件
      x   取出归档文件中的所有内容
      -C  指定解档目录
      -z  gz 格式压缩
      -j  bz2 格式压缩
      -J  xz 格式压缩
```

## 压缩

1. gz
2. gzip etc.tar  压缩成 gz 格式
3. gunzip etc。tar.gz 压缩成 gz 格式压缩包
4. tar zcf etc.tar.gz /etc 把文件归档为 tar 并压缩成 gz （将打包和压缩合并成一步）
5. tar zxf etc.tar.gz 解压并解档 gz 格式压缩包（将打包解压到当前目录）

```
--gzip bin.tar  （将打包好的 bin.tar 压缩成 gz 格式，压缩完成后，之前的打包消失）
```
