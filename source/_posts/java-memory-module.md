---
title: jvm - java - 内存模型
date: 2019-02-17 19:26:44
author: Imperator
tags: [JVM]
excerpt: Java 虚拟机内存模型分析与简介
---


# Java 虚拟机内存模型

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

## 一. 组成

### 1.  程序计数器

程序计数器是一个很小的内存区域，不再 RAM 上，而是直接划在 CPU 上。JVM 在解释字节码（.class）文件时，存储当前线程执行的字节码行号，只是一种概念模型，各种 JVM 所采用的方法不一样。字节码解释工作时，就是通过改变程序计数器的值来去下一条要执行的指令，分支，循环，跳转、线程恢复等基础功能都是依赖此技术区完成的。

由于 Java 虚拟机的多线程是通过线程轮流切换并分配处理器执行时间的方式来实现的，在任何一个确定的时刻，一个处理器（对于多核处理器来说是一个内核）只会执行一条线程中的指令。因此，为了线程切换后能恢复到正确的执行位置，每条线程都需要有一个独立的程序计数器，各条线程之间的计数器互不影响，独立存储，我们称这类内存区域为“线程私有”的内存。

如果线程正在执行的是一个 Java 方法，这个计数器记录的是正在执行的虚拟机字节码指令的地址；如果正在执行的是 Natvie 方法，这个计数器值则为空（Undefined）。此内存区域是唯一一个在 Java 虚拟机规范中没有规定任何 OutOfMemoryError 情况的区域。

### 2.JVM 栈

与程序计数器一样，Java 虚拟机栈（Java Virtual Machine Stacks）也是线程私有的，
它的生命周期与线程相同。虚拟机栈描述的是 Java 方法执行的内存模型：每个方法被执
行的时候都会同时创建一个栈帧（Stack Frame）用于存储局部变量表、操作栈、动态
链接、方法出口等信息。每一个方法被调用直至执行完成的过程，就对应着一个栈帧在
虚拟机栈中从入栈到出栈的过程。

经常有人把Java 内存区分为堆内存（Heap）和栈内存（Stack），这种分法比较粗
糙，Java 内存区域的划分实际上远比这复杂。这种划分方式的流行只能说明大多数程序
员最关注的、与对象内存分配关系最密切的内存区域是这两块。其中所指的“堆”在后
面会专门讲述，而所指的“栈”就是现在讲的虚拟机栈，或者说是虚拟机栈中的局部变
量表部分。

局部变量表存放了编译期可知的各种基本数据类型（boolean、byte、char、short、int、
float、long、double）、对象引用（reference 类型，它不等同于对象本身，根据不同的虚拟机实现，它可能是一个指向对象起始地址的引用指针，也可能指向一个代表对象的句柄或
者其他与此对象相关的位置）和returnAddress 类型（指向了一条字节码指令的地址）。
其中64 位长度的long 和double 类型的数据会占用2 个局部变量空间（Slot），其余
的数据类型只占用1 个。局部变量表所需的内存空间在编译期间完成分配，当进入一个
方法时，这个方法需要在帧中分配多大的局部变量空间是完全确定的，在方法运行期间
不会改变局部变量表的大小。

在Java 虚拟机规范中，对这个区域规定了两种异常状况：如果线程请求的栈深度大
于虚拟机所允许的深度，将抛出StackOverflowError 异常；如果虚拟机栈可以动态扩展
（当前大部分的Java 虚拟机都可动态扩展，只不过Java 虚拟机规范中也允许固定长度的
虚拟机栈），当扩展时无法申请到足够的内存时会抛出OutOfMemoryError 异常。

### 3. 本地方法栈

本地方法栈（Native Method Stacks）与虚拟机栈所发挥的作用是非常相似的，其
区别不过是虚拟机栈为虚拟机执行Java 方法（也就是字节码）服务，而本地方法栈则
是为虚拟机使用到的Native 方法服务。虚拟机规范中对本地方法栈中的方法使用的语
言、使用方式与数据结构并没有强制规定，因此具体的虚拟机可以自由实现它。甚至
有的虚拟机（譬如Sun HotSpot 虚拟机）直接就把本地方法栈和虚拟机栈合二为一。
与虚拟机栈一样，本地方法栈区域也会抛出StackOverflowError 和OutOfMemoryError
异常。

### 4. 堆

对于大多数应用来说，Java 堆（Java Heap）是Java 虚拟机所管理的内存中最大的
一块。Java 堆是被所有线程共享的一块内存区域，在虚拟机启动时创建。此内存区域的
唯一目的就是存放对象实例，几乎所有的对象实例都在这里分配内存。这一点在Java 虚
拟机规范中的描述是：所有的对象实例以及数组都要在堆上分配①，但是随着JIT 编译器
的发展与逃逸分析技术的逐渐成熟，栈上分配、标量替换②优化技术将会导致一些微妙
的变化发生，所有的对象都分配在堆上也渐渐变得不是那么“绝对”了。
Java 堆是垃圾收集器管理的主要区域，因此很多时候也被称做“GC 堆”（Garbage
Collected Heap，幸好国内没翻译成“垃圾堆”）。如果从内存回收的角度看，由于现在
收集器基本都是采用的分代收集算法，所以Java 堆中还可以细分为：新生代和老年代；
再细致一点的有Eden 空间、From Survivor 空间、To Survivor 空间等。如果从内存分配
的角度看，线程共享的Java 堆中可能划分出多个线程私有的分配缓冲区（Thread Local
Allocation Buffer，TLAB）。不过，无论如何划分，都与存放内容无关，无论哪个区域，
存储的都仍然是对象实例，进一步划分的目的是为了更好地回收内存，或者更快地分配
内存。在本章中，我们仅仅针对内存区域的作用进行讨论，Java 堆中的上述各个区域的
分配和回收等细节将会是下一章的主题。

根据Java 虚拟机规范的规定，Java 堆可以处于物理上不连续的内存空间中，只要
逻辑上是连续的即可，就像我们的磁盘空间一样。在实现时，既可以实现成固定大小
的，也可以是可扩展的，不过当前主流的虚拟机都是按照可扩展来实现的（通过-Xmx
和-Xms 控制）。如果在堆中没有内存完成实例分配，并且堆也无法再扩展时，将会抛出
OutOfMemoryError 异常。

### 运行时常量

运行时常量池（Runtime Constant Pool）是方法区的一部分。Class 文件中除了有
类的版本、字段、方法、接口等描述等信息外，还有一项信息是常量池（Constant Pool
Table），用于存放编译期生成的各种字面量和符号引用，这部分内容将在类加载后存放
到方法区的运行时常量池中。

Java 虚拟机对Class 文件的每一部分（自然也包括常量池）的格式都有严格的规
定，每一个字节用于存储哪种数据都必须符合规范上的要求，这样才会被虚拟机认可、
装载和执行。但对于运行时常量池，Java 虚拟机规范没有做任何细节的要求，不同的
提供商实现的虚拟机可以按照自己的需要来实现这个内存区域。不过，一般来说，除
了保存Class 文件中描述的符号引用外，还会把翻译出来的直接引用也存储在运行时常
量池中。

运行时常量池相对于Class 文件常量池的另外一个重要特征是具备动态性，Java 语
言并不要求常量一定只能在编译期产生，也就是并非预置入Class 文件中常量池的内容
才能进入方法区运行时常量池，运行期间也可能将新的常量放入池中，这种特性被开发
人员利用得比较多的便是String 类的intern\(\) 方法。

既然运行时常量池是方法区的一部分，自然会受到方法区内存的限制，当常量池无
法再申请到内存时会抛出OutOfMemoryError 异常

### 5. 方法区

### 直接内存

直接内存（Direct Memory）并不是虚拟机运行时数据区的一部分，也不是Java
虚拟机规范中定义的内存区域，但是这部分内存也被频繁地使用，而且也可能导致
OutOfMemoryError 异常出现，所以我们放到这里一起讲解。
在JDK 1.4 中新加入了NIO（New Input/Output）类，引入了一种基于通道（Channel）
与缓冲区（Buffer）的I/O 方式，它可以使用 Native 函数库直接分配堆外内存，然
后通过一个存储在 Java 堆里面的 DirectByteBuffer 对象作为这块内存的引用进行
操作。这样能在一些场景中显著提高性能，因为避免了在 Java 堆和 Native 堆中来
回复制数据。

显然，本机直接内存的分配不会受到 Java 堆大小的限制，但是，既然是内存，则
肯定还是会受到本机总内存（包括 RAM 及 SWAP 区或者分页文件）的大小及处理器
寻址空间的限制。服务器管理员配置虚拟机参数时，一般会根据实际内存设置 -Xmx
等参数信息，但经常会忽略掉直接内存，使得各个内存区域的总和大于物理内存限制
（包括物理上的和操作系统级的限制），从而导致动态扩展时出现 OutOfMemoryError
异常。

逻辑内存模型我们已经看到了，那当我们建立一个对象的时候是怎么进行访问的呢？
在 Java 语言中，对象访问是如何进行的？对象访问在 Java 语言中无处不在，是最普通的程序行为，但即使是最简单的访问，也会却涉及 Java 栈、Java 堆、方法区这三个最重要内存区
域之间的关联关系，如下面的这句代码：

```Java
Object obj = new Object();
```

假设这句代码出现在方法体中，那 `Object obj` 这部分的语义将会反映到 Java 栈
的本地变量表中，作为一个 reference 类型数据出现。而 `new Object()`这部分的语义
将会反映到 Java 堆中，形成一块存储了 Object 类型所有实例数据值（Instance Data，对
象中各个实例字段的数据）的结构化内存，根据具体类型以及虚拟机实现的对象内存布
局（Object Memory Layout）的不同，这块内存的长度是不固定的。另外，在 Java 堆中
还必须包含能查找到此对象类型数据（如对象类型、父类、实现的接口、方法等）的地
址信息，这些类型数据则存储在方法区中。

由于 reference 类型在 Java 虚拟机规范里面只规定了一个指向对象的引用，并没有
定义这个引用应该通过哪种方式去定位，以及访问到 Java 堆中的对象的具体位置，因此
不同虚拟机实现的对象访问方式会有所不同，主流的访问方式有两种：使用句柄和直接
指针。

如果使用句柄访问方式，Java 堆中将会划分出一块内存来作为句柄池，reference
中存储的就是对象的句柄地址，而句柄中包含了对象实例数据和类型数据各自的
具体地址信息，如下图所示。

如果使用直接指针访问方式，Java 堆对象的布局中就必须考虑如何放置访问类型
数据的相关信息，reference 中直接存储的就是对象地址，如下图所示

这两种对象的访问方式各有优势，使用句柄访问方式的最大好处就是 reference 中存
储的是稳定的句柄地址，在对象被移动（垃圾收集时移动对象是非常普遍的行为）时只
会改变句柄中的实例数据指针，而 reference 本身不需要被修改。
使用直接指针访问方式的最大好处就是速度更快，它节省了一次指针定位的时间开
销，由于对象的访问在 Java 中非常频繁，因此这类开销积少成多后也是一项非常可观的

执行成本。就本书讨论的主要虚拟机 Sun HotSpot 而言，它是使用第二种方式进行对象访问的，但从整个软件开发的范围来看，各种语言和框架使用句柄来访问的情况也十分常见。

下面我们来看几个示例

## Test

## Others

[https://www.cnblogs.com/fubaizhaizhuren/p/4976839.html](https://www.cnblogs.com/fubaizhaizhuren/p/4976839.html)

[https://blog.csdn.net/anjoyandroid/article/details/78609971](https://blog.csdn.net/anjoyandroid/article/details/78609971)
