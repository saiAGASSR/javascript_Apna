// DB 
// CEEATE DATABASE db_name;
// CEEATE DATABASE IF NOT EXISTS db_name;

// DROP DB
// DROP DATABASE db_name;
// DROP DATABASE IF EXISTS db_name;


// show

// SHOW DATABASES;
// SHOW TABLES;

// CREATE TABLE user();

// CHAR(5) AND VARCHAR(5)


// TinyINT  Unsigned   0 to 255 


// Constraints 
//  rule for define the data 

// UNIQUE 
// NOT NULL
// DEFAULT
// check

// CREATE TABLE user(
// user_id    INT  NOT NULL,
// user_name   VARCHAR(50)    NOT NULL,
// user_email  VARCHAR(50)    NOT NULL UNIQUE,
// age         INT         NOT NULL,
// FOLLOWERS   INT         DEFAULT 0,
// FOLLOWING   INT         DEFAULT 0,
// CONSTRAINT CHECK (age >=13)

// );



// KEYS 
// PRIMARY KEY 
// FOREIGN KEY 
// 

// 2 WAYS 
//  ID    int  PRIMARY KEY
//  PRIMARY KEY   (id)

// CREATE TABLE post(

//     id  int  PRIMARY KEY,
//     content VARCHAR(),
//     LIKES    int   DEFAULT 0,
//     COMMENTS  int   DEFAULT 0



// );


// To visualize tables
// Select database 
// reverse engineer database 
// 

// key icon indicates primary key ...
// dark blue diamond indicats constraint  NOT NULL 

// Arorw foreign relation ..
// 
// ER Diagram 
// 
// INDEXES

// inserting data into the 
// INSERT INTO user
// (order of columns)
// VALUES
// (),
// ();

// SELECT * FROM TABLENAME;
// SELECT column names from  TABLE NAME;
// SELECT  DISTINCT column names from  TABLE NAME;
// (1,"content1",1,100,20)
// (1,"content1",1,100,20)
// (1,"content1",1,100,20)
// (1,"content1",1,100,20)