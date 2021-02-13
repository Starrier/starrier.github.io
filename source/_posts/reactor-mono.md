---
title: reactor-mono
date: 2021-01-13 20:17:20
author: Imperator
tags: [Reactor]
excerpt: Reactor 简介
---

# Reactor

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

Reactor 有两种类型：Flux<T> 和 Mono<T>。Flux 类似于 RxJava 的 Observable，它可以触发零到多个事件，并根据实际情况结束处理或触发错误。我们可以从返回类型获知一个方法：发射并忘记或者请求等待(Mono)/处理一个包含多个数据项的流(Flux)。

Flux 和 Mono 主要用途是在于把对象合并到更高层次的流中，搜易一般来说，在现有代码上应用响应式模式，不应该把 `long getCount()` 这样的方法转换成 `Mono<Long> getCount()`。

![SpringWebFlux](https://docs.spring.io/spring-framework/docs/5.0.0.BUILD-SNAPSHOT/spring-framework-reference/html/images/webflux-overview.png)

### Router Function

对标注 `@Controller`,`@RequestMapping` 等标准的 Spring MVC 注解，提供一套函数式风格的 API，用于创建 Router， Handler 和 Filter。

### WebFlux 

核心组件，协调上下游各个组件，提供响应式编程支持。可以平衡请求或响应率，即，响应堵塞时，会同时堵塞请求。

背压，是一种通过传输（通知）接受者可以消费多少元素来调节生产的机制（消费决定生产）；TCP 具有字节抽象而不是逻辑元素抽象。我们通常所说的背压控制是控制向网络发送/接收的逻辑原件的数量。即使 TCP 有自己的流控制，这个流控制仍然是字节而不是逻辑元素。



### Reactive Streams 

一种支持背压（Backpressure）的异步数据流处理标准，主流实现有 RxJava 和 Reator，Spring WebFlux 默认继承的是 Reactor。（Reactor 类似于 RxJava 2.0）

## Flux

file.getName(),null,InspectPlanListExportTO.class,getExcelType(),null

existInspectStandard != null && inspectStandard.getInspectStandardPO().getId() != existInspectStandard.getId()

 for (InspectPlanProcedureRelationPO inspectPlanProcedureRelationPO : this.inspectPlanProcedureRelationPOs) {
            inspectPlanProcedureRelationPO.setInspectPlanId(this.inspectPlanPO.getId());
        }
