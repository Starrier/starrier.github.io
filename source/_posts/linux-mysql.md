---
title: linux-mysql
date: 2021-01-13 20:12:13
tags:
---

# Linux 环境下 MySQL 数据库操作



导出数据库

scp

`scp username@ip:mysql 路径/x.tar.gz ./`

cd ~ 

```sql
mysqldump -u databaseusername -p databaseName > x.sql
```


scp  username@ip:path ./

Note: 
 - username 为服务器用户名
 - ip 为服务器公网 IP，存在 domain 时，可以使用 domain 替代
 - ./ 可以修改，当前意义为，存储在当前目录下


MySQL command import

 ``` sql
 source path/x.sql
 ```
