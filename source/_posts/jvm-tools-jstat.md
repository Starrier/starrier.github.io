---
title: jvm-tools-jstat
date: 2021-05-14 11:12:49
author: Starrier
tags: [JVM]
excerpt: jvm-tools-jstat
swiper:
keywords: [jvm,jstat]
description: jvm-tools-jstat
---

# jvm-tools-jstat

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

### 介绍：

##### 一个极强的监视VM内存工具。可以用来监视VM内存内的各种堆和非堆的大小及其内存使用

##### 1. jstat -class pid:

显示加载class的数量，及所占空间等信息。

##### 2. jstat -compiler pid:

显示VM实时编译的数量等信息。

##### 3. jstat -gc pid:

可以显示gc的信息，查看gc的次数，及时间。其中最后五项，分别是young gc的次数，young gc的时间，full gc的次数，full gc的时间，gc的总时间。

##### 4. jstat -gccapacity:

可以显示，VM内存中三代（young,old,perm）对象的使用和占用大小，如：PGCMN显示的是最小perm的内存使用量，PGCMX显示的是perm的内存最大使用量，PGC是当前新生成的perm内存占用量，PC是但前perm内存占用量。其他的可以根据这个类推， OC是old内纯的占用量。

##### 5. jstat -gcnew pid:

new对象的信息。

##### 6. jstat -gcnewcapacity pid:new

对象的信息及其占用量。

##### 7. jstat -gcold pid:old

对象的信息。

##### 8. jstat -gcoldcapacity pid:old

对象的信息及其占用量。

##### 9. jstat -gcpermcapacity pid: perm

对象的信息及其占用量。

##### 10. jstat -printcompilation pid:

当前VM执行的信息。
