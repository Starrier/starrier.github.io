---
title: java-clean-code-警告压制
date: 2020-12-31 22:26:37
author: Imperator
tags: [Java 基础]
excerpt: 警告压制
---

# Java-clean-code-警告压制

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

## 一. 列表

| 值	  | 作用  |
|--|--|
| `all` | 抑制所有警告  |
| `boxing`|抑制与封装/拆装作业相关的警告|
| `cast` |抑制与强制转型作业相关的警告|
| `dep-ann` |抑制与淘汰注释相关的警告|
| `deprecation`|抑制与淘汰的相关警告|
| `fallthrough` |抑制与 `switch` 陈述式中遗漏 `break` 相关的警告|
| `finally` |抑制与未传回finally区块相关的警告|
| `hiding` |抑制与隐藏变数的区域变数相关的警告|
| `incomplete-switch` |抑制与 `switch` 陈述式（`enum case`）中遗漏项目相关的警告|
| `javadoc` |抑制与 `javadoc` 相关的警告|
| `nls` |抑制与非 `nls` 字串文字相关的警告|
| `null` |抑制与空值分析相关的警告|
| `rawtypes` |抑制与使用 `raw` 类型相关的警告|
| `resource` |抑制与使用 `Closeable` 类型的资源相关的警告|
| `restriction` |抑制与使用不建议或禁止参照相关的警告|
| `serial` |抑制与可序列化的类别遗漏 `serialVersionUID` 栏位相关的警告|
| `static-access` |抑制与静态存取不正确相关的警告|
| `static-method` |抑制与可能宣告为 `static` 的方法相关的警告|
| `super` |抑制与置换方法相关但不含 `super` 呼叫的警告|
| `synthetic-acces` |抑制与内部类别的存取未最佳化相关的警告|
| `sync-override` |抑制因为置换同步方法而遗漏同步化的警告|
| `unchecked` |抑制与未检查的作业相关的警告|
| `unqualified-field-access` |抑制与栏位存取不合格相关的警告|
| `unused` |抑制与未用的程式码及停用的程式码相关的警告|

## 二. 示例

### 1. `all`

