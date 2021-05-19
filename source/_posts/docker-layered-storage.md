---
title:  Docker 分层存储原理
date: 2021-04-16 12:54:28
author: imperater
tags: [Docker]
excerpt: Docker 分层存储原理
swiper:
keywords: [Docker,分层存储]
description: Docker 分层存储原理
---

# 深入理解 Docker 分层存储原理

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~


Centos 发行版的 overlay2 文件系统有三个层次结构

- lowerdir
- upperdir
- merged

1、lowerdir层：
其中lowerdir是只读的镜像层(image layer)，其中就包含bootfs/rootfs层，bootfs(boot file system)主要包含bootloader和kernel，bootloader主要是引导加载kernel，当boot成功 kernel 被加载到内存中，bootfs就被umount了，rootfs(root file system)包含的就是典型Linux系统中的/dev、/proc、/bin、/etc等标准目录。
lowerdir是可以分很多层的，除了bootfs/rootfs层以外，还可以通过Dockerfile建立很多image层，构建过程如下：

![](https://img2020.cnblogs.com/blog/1715041/202102/1715041-20210226171304231-1913260993.png)

Dockerfile中每一个指令都会生成一个新的image层，如上图所示。
当FROM时就已经生成了bootfs/rootfs层，也就是kernel和base层。

2、upperdir层
upperdir层是lowerdir的上一层，只有这一层可读可写的，其实就是Container层，在启动一个容器的时候会在最后的image层的上一层自动创建，所有对容器数据的更改都会发生在这一层。

3、merged层
merged层就是联合挂载层，也就是给用户暴露的统一视觉，将image层和container层结合，就如最上边的图中描述一致，同一文件，在此层会展示离它最近的层级里的文件内容，或者可以理解为，只要container层中有此文件，便展示container层中的文件内容，若container层中没有，则展示image层中的。


联合挂载系统的工作原理
1、读：
如果文件在upperdir(容器)层，直接读取文件；
如果文件不在upperdir(容器)层，则从镜像层(lowerdir)读取；

2、写：
首次写入：如果upperdir中不存在，overlay和overlay2执行copy_up操作，把文件从lowdir拷贝到upperdir中，由于overlayfs是文件级别的(即使只有很少的一点修改，也会产生copy_up的动作)，后续对同一文件的再次写入操作将对已经复制到容器层的文件副本进行修改，这也就是尝尝说的写时复制(copy-on-write)。

删除文件或目录：当文件被删除时，在容器层(upperdir)创建whiteout文件，镜像层(lowerdir)的文件是不会被删除的，因为它们是只读的，但without文件会阻止它们显示，当目录被删除时，在容器层(upperdir)一个不透明的目录，这个和上边的whiteout的原理一样，组织用户继续访问，image层不会发生改变

3、注意事项
copy_up操作只发生在文件首次写入，以后都是只修改副本,
overlayfs只适用两层目录，,相比于比AUFS，查找搜索都更快。
容器层的文件删除只是一个“障眼法”，是靠whiteout文件将其遮挡,image层并没有删除，这也就是为什么使用docker commit 提交保存的镜像会越来越大，无论在容器层怎么删除数据，image层都不会改变。 


![](https://img2020.cnblogs.com/blog/1715041/202102/1715041-20210226171354047-588353208.png)

为什么 Docker 那么快

![](https://img2020.cnblogs.com/blog/1715041/202102/1715041-20210226171455346-2093471854.png)

可以清楚的看到，VM比docker多了Hypervisor 和 Guest OS的过程，也正是省略了这些过程使docker技高一筹，问题又来了，为什么docker可以省略这些过程呢？
Hypervisor：主要作用是实现硬件资源虚拟化；因为docker容器上程序直接使用的都是物理机的硬件资源，所以不需要资源虚拟化的过程，也因此在CPU、内存利用率上docker将会在效率上明显提高
Guest OS：主要作用加载操作系统内核；因为docker利用的是宿主机的内核，所以在启动一个容器时，不需要像VM一样重新加载一个操作系统内核，也因此大大节约了启动时间。

