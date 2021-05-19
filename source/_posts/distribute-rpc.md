---
title: 分布式系统 - RPC
date: 2021-05-19 09:43:33
author: Starrier
tags: [分布式基础]
excerpt: 分布式系统 - RPC
swiper:
keywords: [RPC,分布式]
description: 分布式系统 - RPC
---

# 分布式系统 - RPC 

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢 ~~

> 1. [RPC - 序列化]()

## 简介

> 像调用本地的类的方法样来调用服务器端的方法实现

`RPC`（ RemoteProcedureCall）—远程过程调用 ，它是一种通过网络从远程计算机程序上请求服务，而不需要了解底层网络技术的协议。`RPC` 协议假定某些传输协议的存在，如 `TCP` 或 `UDP`，为通信程序之间携带信息数据。在 `OSI` 网络通信模型中，`RPC` 跨越了传输层和应用层。

比如两个不同的服务 `A`,`B` 部署在两台不同的机器上，那么服务 `A` 如果想要调用服务 `B` 中的某个方法该怎么办呢？使用 `HTTP` 请求当然可以，但是可能会比较慢而且一些优化做的并不好。`RPC` 的出现就是为了解决这个问题。

## 原理

`RPC` 采用客户端（服务调用方）/服务器端（服务提供方）模式， 都运行在自己的 `JVM` 中。客户端只需要引入要使用的接口，接口的实现和运行都在服务器端。`RPC` 主要依赖的技术包括序列化、反序列化和数据传输协议，这是一种定义与实现相分离的设计。

![](https://ask.qcloudimg.com/http-save/yehe-5836255/sqmh32g7mx.jpeg?imageView2/2/w/1620)

同时在此处要对 RMI( Remote Method Invoke，远程方法调用)中的 stub (桩)和skeleton (骨架)的概念有一点了解。RMI 的代理模式是通过代理对象将方法传递给实际对象的。stub 驻留客户端,承担着代理远程对象实现者的角色。skeleton 类帮助远程对象与 stub 连接进行通信。 

![](https://ask.qcloudimg.com/http-save/yehe-5836255/rok7xkgm7z.jpeg?imageView2/2/w/1620)

服务调用方（client）调用以本地调用方式调用服务；
client stub 接收到调用后负责将方法、参数等组装成能够进行网络传输的消息体；
client stub 找到服务地址，并将消息发送到服务端；
server stub 收到消息后进行解码；
server stub 根据解码结果调用本地的服务；
本地服务执行并将结果返回给 server stub；
server stub 将返回结果打包成消息并发送至调用方；
client stub 接收到消息，并进行解码；
服务调用方得到最终结果。

主要组成元素：

实体对象
业务接口
接口实现

实体对象和业务接口由客户端和服务端公用。

接口实现是由服务端对定义好的业务接口进行功能实现，并将接口实例注册服务中提供给客户端调用。

### 设计的技术细节

`RPC` 涉及 序列化、压缩算法、协议、动态代理、服务注册、加密、网络编程、连接管理、健康检测、负载均衡、优雅启停机、异常重试、业务分组以及熔断限流等

## 常见 `RPC` 框架

目前 `Java` 使用比较多的 `RPC` 方案主要有 `RMI`（JDK自带）、`Hessian`、`Dubbo`、`Hprose`、`Thrift` 以及 `HTTP` 等。

> 注意：
> `RPC` 主要指内部服务之间的调用，`RESTful` 也可以用于内部服务之间的调用，但其主要用途还在于外部系统提供服务，


如何进行选择？
是否允许代码侵入： 即需要依赖相应的代码生成器生成代码，比如 Thrift。
是否需要长连接获取高性能： 如果对于性能需求较高的 haul，那么可以果断选择基于 TCP 的 Thrift、Dubbo。
是否需要跨越网段、跨越防火墙： 这种情况一般选择基于 HTTP 协议的Hessian 和 Thrift 的 HTTP Transport。
此外，Google 推出的基于 HTTP2.0 的 gRPC 框架也开始得到应用，其序列化协议基于 Protobuf，网络框架使用的是 Netty4 ,但是其需要生成代码，可扩展性比较差。

现代 RPC 的本质其实就是在网络上传输数据包，而这个数据包的特点是Header + Body。Header 即协议头，分为定长或者变长，这个取决于协议的设计者。例如 dubbo 协议就是定长的。而有些协议是变长的。Body 就是消息体，其实就是对象序列化的过程，把序列化好的数据放入 Body 里面。现在流行的序列化方案有 Hessian，Java-built-in，JSON，MsgPack，Protobuf 等。底层框架一般使用 NIO/Netty 架构，因为是异步通信，需要支持高性能、高并发。


参考文章

[性能基础之常见RPC框架浅析](https://cloud.tencent.com/developer/article/1465446)
