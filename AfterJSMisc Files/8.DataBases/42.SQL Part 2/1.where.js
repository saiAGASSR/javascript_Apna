// SELECT  * FROM posts
// WHERE Likes>=400;

// WHERE age + 1 = 18


// BITS  0 , 1      electricity pass 1       , not pass 0 

// AND  LOGICAL AND 
// &    Bitwise and 


// LIMIT

// SELECT age 
// FROM user
// WHERE age>=15
// LIMIT 10;


// ORDER BY 


// SELECT age 
// FROM user
// WHERE age>=15
// LIMIT 10;
// ORDER BY  age   ASC ;
// ORDER BY  id   DESC ;
// ORDER BY  id    ;   by default ascending 


// Aggregate Functions 
// SELECT COUNT(age) 
// FROM user ;
// SELECT MAX(age) 
// FROM user ;
// SELECT MIN(age) 
// FROM user ;
// SELECT SUM(age) 
// FROM user ;
// SELECT AVG(age) 
// FROM user ;


// FLOW in mySQL



// CREATE DATABASE college;
// create database xyzcomppany;

// use college;
// create table student(
// 	ROLL_NO  integer unique,
//     NAME    varchar(30)     NOT NULL,
//     Age  	int      NOT null);
    
// INSERT INTO student
// VALUES 
// (1,"SAI",26),
// (2,"raj",24);

// USE college;
// ALTER TABLE user

// add  primary key   (user_id);




// SELECT * FROM college.user;



// CREATE TABLE posts(

//     id  int  PRIMARY KEY,
//     content  VARCHAR(10000),
//     user_id_f  INT,
//     LIKES    int   DEFAULT 0,
//     COMMENTS  int   DEFAULT 0postsposts_ibfk_1posts_ibfk_1posts_ibfk_1,
//     foreign key (user_id_f) references user(user_id)
// );

// SELECT id,content FROM posts;

// SELECT * FROM posts;

// INSERT INTO posts
// VALUES
// (1,"content1",1,100,20),
// (2,"content2",1,200,20),
// (3,"content3",1,300,20),
// (4,"content4",1,400,20);

// SELECT * FROM user;

// INSERT INTO user
// VALUES
// (1,"sai","sai@134",26,0,100);

// SELECT  content,LIKES  
// FROM posts
// WHERE Likes>=400;

// SELECT * 
// FROM posts 
// WHERE Likes >= 200 AND id >=3;


// Group by 

// select  colname count(colname)
// conditions 
// group by columnname(Here the colnames specifeid in the select should be present ) 