
-- C:\Program Files\MySQL\MySQL Server 8.0\bin

-- C:\Users\Sai Teja>mysql -u root -p
-- Enter password: ********
-- Welcome to the MySQL monitor.  Commands end with ; or \g.
-- Your MySQL connection id is 51
-- Server version: 8.0.39 MySQL Community Server - GPL

-- Copyright (c) 2000, 2024, Oracle and/or its affiliates.

-- Oracle is a registered trademark of Oracle Corporation and/or its
-- affiliates. Other names may be trademarks of their respective
-- owners.

-- Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

-- mysql>


CREATE TABLE user (
    id INT PRIMARY KEY ,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50)  UNIQUE NOT NULL ,
    password VARCHAR(50)   NOT NULL 
);