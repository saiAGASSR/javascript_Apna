// mySQL ----->DB 
// To use that DB we learn a language called SQL  structured query language


// DB with CRUD 
// DBMS -> operations on DB 
// SQL is a programming language used to interact with relational databases
// 

// https://www.mysql.com/

// https://dev.mysql.com/downloads/

// https://dev.mysql.com/downloads/installer/

// password : pass@123


// To create DB 
//  
// CREATE DATABASE db_name 
// ;           -> is compulsory 
// CREATE DATABASE college;   
// create database xyzcomppany;
// DROP database xyzcomppany;

//  To create a table in DB     first we ashould use that  DB 
//  USE db_name;


// create table student(
	// ROLL_NO  integer unique,
    // NAME    text     NOT NULL,
    // Age  	int      NOT null);

// Once i have defined and declared  
//  to change the datatype of student from text to VARCHAR(30)
// create table student(
// 	ROLL_NO  integer unique,
//     NAME    varchar(30)     NOT NULL,
//     Age  	int      NOT null);

// 15:32:13	create table student(  ROLL_NO  integer unique,     NAME    varchar(30)     NOT NULL,     Age   int      NOT null)	Error Code: 1050. Table 'student' already exists	0.000 sec


// To insert the data into the table 
// INSERT INTO student
// VALUES 
// (1,SAI,26),
// (2,raj,24)

// To view the table data 
// SELECT * FROM student;