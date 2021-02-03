---
title: 响应式编程 - RxJava - Disposable
date: 2021-01-12 22:21:24
author: Imperater
tags: [rxjava,reactive,响应式编程]
excerpt: 响应式编程 RxJava API Disposable 分析
---

# 响应式白城 - RxJava - Disposable

###  1. Disposable 有两个方法

```java
 // 取消订阅
 void dispose();
 // 判断订阅状态
 boolean isDisposed();
```

在 RxJava 中，在数据流结束后，如果不取消订阅，则可能会导致内存泄露。我们可以通过使用 Disposable 来取消订阅关系。在 RxJava 中，`onError` 和 `onComplete` 中，都存在 `this::dispose`。这也是为什么  `onError` 和 `onComplete` 不能同时存在的原因。

### 2. CompositeDisposable

CompositeDisposable 类是一个存放 Disposable 的 hash 容器，对放入其中的 disposable 会将其解除订阅。如果在添加是，容器内已经被解除，那么新增的会被阻断。


在使用的时候，我们使用容器，调用，`add `或者 `addAll`，容器退出时，调用 `clear` 方法即可将容器内的关系解除。
