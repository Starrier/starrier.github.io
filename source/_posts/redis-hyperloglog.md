---
title: redis-hyperloglog
date: 2021-01-12 22:53:25
author: Imperator
tags: [redis,hyperloglog]
excerpt: Redis HyperLogLog 源码分析
---

# Redis - HyperLogLog

HyperLogLog 使用动态字符串存储数据，为了区别普通的 SDS，在头部固定了字节 `HYLL`

HyperLogLog 底层数据结构

```c
struct hllhdr {
    // 固定值 HYLL
    char magic[4];      /* "HYLL" */
    // 编码格式 HLL_DENSE 和 HLL_SPARSE
    uint8_t encoding;   /* HLL_DENSE or HLL_SPARSE. */
    uint8_t notused[3]; /* Reserved for future use, must be zero. */
    uint8_t card[8];    /* Cached cardinality, little endian. */
    uint8_t registers[]; /* Data bytes. */
};
```
HLL  存储分为两部分：hllhdr 和 registers。

registers: 用来存储组数据，
hllhdr: 为 HLL 的头部信息，

其中encoding来标识使用的编码，可以简单理解为空分组较多时使用稀疏编码存储，空分组较少时使用密集编码存储，内部计算使用HLL_RAW编码，因为数据总是增加的，所以一般只存在稀疏编码转为密集编码。

## HLL 的命名

- pfadd
- pfcount
- pfmerge

### PFADD

1. 功能：

pfadd 用来讲一个或多个元素添加到指定的 HLL 中。Redis 不保存元素本身，而是将元素散列后，找到对应分组并比较计数值，如果大于旧值则更新，反之则不更新。

> PFADD key element [element element ...]

2. 原理

将所有元素添加到之地当的 HLL 数据结构中。如果对应的近似基数发生变化，则返回 `1`，否则返回 `0`。如果指定的 key 不存在，则会自动创建一个空的 HLL 数据结构并执行添加操作。不知道 element 的情况下，如果 key 不存在，也会创建一个新的 HLL 数据结构并返回 `1`。否则什么也不做，并返回 `0`。

3. 源码实现原理

TODO 待处理

