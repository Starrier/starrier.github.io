---
title: 深入理解诶 JVM - 逃逸分析
date: 2021-02-04 22:27:48
author: Imperater
tags: [jvm]
excerpt: 深入理解诶 JVM - 逃逸分析
swiper:
keywords: [jvm]
description: 深入理解诶 JVM - 逃逸分析
---

# 深入理解诶 JVM - 逃逸分析

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~



> JVM 中的优化技术

### 什么是逃逸？

逃逸是指在某个方法之内创建的对象，除了在方法体之内被引用之外，还在方法体之外被其它变量引用到；这样带来的后果是在该方法执行完毕之后，该方法中创建的对象将无法被GC回收，由于其被其它变量引用。正常的方法调用中，方法体中创建的对象将在执行完毕之后，将回收其中创建的对象；故由于无法回收，即成为逃逸。

逃逸分析的基本行为就是分析对象动态作用域：当一个对象在方法中被定义后，它可能会被外部方法所引用。比如，作为调用参数传递到其他地方中，称为方法逃逸。

可以被外部线程访问到，比如赋值给类变量或可以在其他线程中访问的实例变量，称为线程逃逸。

如果可以证明一个对象不会逃逸到方法或线程外，那么这个变量可以进行一些高效的优化。

``` Java
 public static StringBuffer create(String a,String b){
      StringBuffer stringBuffer = new StringBuffer();
      stringBuffer.append(a);
      stringBuffer.append(b);
      return stringBuffer.toString();
 }
```

在不直接返回 `stringBuffer` 的情况下，StringBuffer 是不会逃逸出方法的。

``` Java
 public T t;

 public void methodA(){
     T t1 = variableEscape)();
     methodB();
 }

 public T variableEscapee(){
     T t2 =new T();
     return t2;
 }

 pulic void methodB(){
     t=new T();
 }
```

方法 `variableEscape()` 的内部对象 t2 的引用返回给 `methodA` 方法中的变量 v1，`methdoB` 的内部对象赋值给了全局变量 t，这两种场景都发生了（引用）逃逸。

可以通过 JVM 参数设置开启逃逸分析：

``` Java
 -xx:+DoEscapeAnalysis
```

### 栈上分配

Java 对象是在堆上分配的，垃圾回收机制会回收堆上不再使用的对象，但筛选可回收对象以及整理内存都会消耗时间。如果通过逃逸分析可以确定对象不会逃逸出方法之外，那么就可以将对象分配在栈上，这样对象所占用的空间就会随着栈帧出栈而销毁，这样就减轻了垃圾回收的压力。

**注意**：栈上分配受制于栈空间大小。自我迭代等对空间有较大需求的操作会导致栈溢出。

#### 1. 同步消除

逃逸分析可以判断某个对象是否始终只被一个线程访问，如果只被一个线程访问，那么对该对象的同步操作就可以转化成没有同步保护的操作，可以提高并发和性能。

#### 2. 标量替换

JVM 中的原始数据类型（基础类型和引用类型等）都不能在进一步分解，它们成为标量。如果一个对象可以继续分解，那么它就成为聚合量，Java 中的**对象**是典型的聚合量。如果逃逸分析证明一个对象不会被外部访问，且该对象可分解，那么程序执行时，就可以直接创建若干个被该方法使用到的成员变量来代替。拆分后的变量可以被单独分享和优化，可以各自分别在栈帧和寄存器上分配空间，原本的对象就无需整体分配空间了。

#### 3. 锁消除

``` Java
 public static void alloc(){
     byte[] a = new byte[50];
     synchronized(a){
         b[0]=1;
     }
 }

 public static void main(String [] args){
    long b = System.curentTimeMillis();
    for(int i =0;i<10000;i++){
        alloc();
    }
    long c = System.currentTimeMillis();
    System.out.println(c-b);
 }
```

### **总结**

JVM 为对象分配的空间，并不一定都在堆上，有可能分配在栈上，也可能两者都不在。具体情况由 JVM 自行优化。但逃逸分析存在时间消耗，所以性能提升并不明显。

