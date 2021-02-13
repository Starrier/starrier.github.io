---
title: 深入理解 MyBatis - PooledDataSource 
date: 2021-01-12 22:41:47
author: Imperator
tags: [mybatis,源码,source-code]
excerpt: MyBaits PooledDataSource 分析
---

# 深入理解 MyBatis - PooledDataSource 

> * 原文地址：[]()
> * 原文作者：[]()
> * 本文永久链接：[]()

##### **特别说明**

当前文章内容迁移中，如有问题，请提交 [issues](https://github.com/Starrier/starrier.github.io/issues) 谢谢~~

我们在进行数据库链接操作时，会通过 `JDBC`  的 `connection` 进行数据库操作。但是频繁的创建和销毁 `connection` 会影响执行效率。因此 `MyBatis` 中存在连接池技术

 - `pooled`
 - `unpooled` 

### `PooledDataSource` 分析

数据库基础配置以及事务的隔离级别

```java
 
  private String driver;
  private String url;
  private String username;
  private String password;

  private Boolean autoCommit;
  private Integer defaultTransactionIsolationLevel;
```

初始化时，会加载并注册驱动

```java
  static {
    Enumeration<Driver> drivers = DriverManager.getDrivers();
    while (drivers.hasMoreElements()) {
      Driver driver = drivers.nextElement();
      registeredDrivers.put(driver.getClass().getName(), driver);
    }
  }
```

获取数据库的连接时，会调用以下方法

1.  构造配置文件，用户名和密码，准备链接
2.  加载驱动，准备链接
3.  获取数据库连接
4.  对连接进行配置

```java
public class UnpooledDataSource implements DataSource {

  private Connection doGetConnection(String username, String password) throws SQLException {
    Properties props = new Properties();
    if (driverProperties != null) {
      props.putAll(driverProperties);
    }
    if (username != null) {
      props.setProperty("user", username);
    }
    if (password != null) {
      props.setProperty("password", password);
    }
    return doGetConnection(props);
  }

  private Connection doGetConnection(Properties properties) throws SQLException {
    initializeDriver();
    Connection connection = DriverManager.getConnection(url, properties);
    configureConnection(connection);
    return connection;
  }
```

初始化驱动

```java
  private synchronized void initializeDriver() throws SQLException {
    if (!registeredDrivers.containsKey(driver)) {
      Class<?> driverType;
      try {
        if (driverClassLoader != null) {
          driverType = Class.forName(driver, true, driverClassLoader);
        } else {
          driverType = Resources.classForName(driver);
        }
        // DriverManager requires the driver to be loaded via the system ClassLoader.
        // http://www.kfu.com/~nsayer/Java/dyn-jdbc.html
        Driver driverInstance = (Driver)driverType.newInstance();
        DriverManager.registerDriver(new DriverProxy(driverInstance));
        registeredDrivers.put(driver, driverInstance);
      } catch (Exception e) {
        throw new SQLException("Error setting driver on UnpooledDataSource. Cause: " + e);
      }
    }
  }

```

 对链接进行配置，查看是否是自动提交，是否存在配置的事务隔离级别
 
```java
  private void configureConnection(Connection conn) throws SQLException {
    if (autoCommit != null && autoCommit != conn.getAutoCommit()) {
      conn.setAutoCommit(autoCommit);
    }
    if (defaultTransactionIsolationLevel != null) {
      conn.setTransactionIsolation(defaultTransactionIsolationLevel);
    }
  }
}

```

