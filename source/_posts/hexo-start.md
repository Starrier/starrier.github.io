---
title: 用 Hexo 部署 github.io 静态网站 - 起源
date: 2019-06-23 21:07:35
author: Imperator
tags: [Hexo]
excerpt: 用 Hexo 部署 github.io 静态网站 - 起源
swiper:
keywords: [Hexo,git,hexo,github.io]
description: 用 Hexo 部署 github.io 静态网站 - 起源
---

# 用 Hexo 部署 github.io 静态网站 - 起源

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 `PR` 谢谢~~


## 一. 环境配置

1. 安装 `Node.js` 和配置好 `Node.js` 的环境，输入 `node -v` 和 `npm -v`，检查是否安装成功

2. 安装 `Git` 和配置好 `Git` 的环境，输入 `git --version`，检查是否安装成功

## 二. `GitHub` 账户注册与新建项目

1. 登录 `GitHub` 官网进行账户注册，注册完成后点击右上角的 + 号的 `New repository` 新建一个项目，项目名称使用 “账户名.github.io”，并勾选 `Initialze this repository with a README`

2. 在建好的项目右侧的 `settings` 中，有一个 `Github Pages`，那儿有一个网址，这就是你刚刚部署的项目，能够通过外网访问它

## 三. `Hexo` 安装与配置

#### 1. 安装 Hexo，在合适的地方建立一个文件夹

在该文件夹下打开 `Git Bash` ，输入以下命令即可安装 `Blog`：

```javascript
npm install hexo -g
```

检查 `hexo` 是否安装成功

   ``` javascript
   hexo -v
   ```

初始化该文件夹，若成功，可看见 `start blogging with hexo!`:

  ``` javascript
    hexo init
 ```

安装所需组件

  ``` js
   hexo install
  ```

生成静态页面，开始使用 `hexo`

 ``` js
 hexo generate(hexo g)
 ```

启动服务器，访问网址即可(若端口被占用，可使用 `hexo server -p 端口号`)

 ``` js
 hexo s
 ```

#### 2. 将 Hexo 与 Github Pages 联系起来（如果 Git 已经连接过 Github 可忽略）。 设置 Git 的 user name 和 email

``` javascript
 `git config --global user.name "用户名"`
 `git config --global user.email "邮箱"`）
```

检查是否有 .ssh 文件(以下命令非 win 环境)：

``` shell
 cd ~/.ssh
```

生成密钥：

``` shell
ssh-keygen -t rsa -C "邮箱"
```

将密钥添加到 ssh-agent

``` shell
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```

登录 Github，点击头像下的 settings，添加 ssh，点击 SSH and GPG keys，新建 New SSH key，将 is_rsa.pub 里的内容复制过来

用以下命令查看是否添加成功，出现Hi后加你的用户名就是成功了：

```shell
ssh -T git@github.com
```
#### 3. 配置 Deployment

在文件夹根目录中找到 `_config.yml` 文件，在末尾找到 deploy` 并修改

``` yml
  deploy：
    type: git
    repository: git@github.com:用户名/用户名.github.io.git （即用于Clone的SSH的地址）
    branch: master
```

注意每个冒号后面要空一格（英文格式下）

#### 4. 新建博客，

输入 `hexo new post "博客名"`, 此时在 **source/_posts** 目录下便可以看到新建的文件,在生成、部署文章前，要安装一个扩展:

```javascript
npm installhexo-deployer-git --save
 ```

安装完成后便可提交到 `GitHub` 上

编好文章后（Markdown格式），输入以下命令即可:

  ```javascript
  hexo deploy（hexo d）
  ```

，便部署到GitHub上了。

部署成功后，你的仓库会多出很多文件，而使用  `https://用户名.github.io` 就可以看到你的网站。

### **注意：**

1. 每次对博客进行修改后需要先用  `hexo s` 进行界面查看，查看是否修改成功
   然后使用 `hexo clean && hexo g && hexo d ` 来完成部署

2. 在 CMD 命令行中显示 node、npm、hexo 没有此命令时，需要将他们的 bin 的路径部署到环境变量中的系统变量下的 PATH 中
