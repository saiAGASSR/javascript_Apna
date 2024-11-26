// CREATE TABLE    IF NOT EXISTS student_info(
//     roll_no   INT PRIMARY KEY,
//     name    varchar(45) ,
//     city    varchar(45) ,
//     marks int 
// );

// INSERT INTO student_info
// (roll_no , name , city , marks)
// VALUES
// (110,"adam","delhi",76),
// (108,"bob","mumbai",65),
// (124,"casey","Pune",94),
// (112,"duke","Pune",80);


// // 1

// SELECT name , marks
// FROM student_info
// WHERE marks >75;

// // 2

// SELECT city 
// FROM student_info
// GROUP BY city ;

// SELECT DISTINCT city
// FROM student_info;
 

// // 4
// SELECT city , MAX(marks) 
// FROM student_info
// GROUP BY city ;

// // 5
// SELECT avg(marks)
// FROM student_info;


// //6

// ALTER TABLE student_info
// ADD COLUMN grade varchar(5) ;

// // 6
// UPDATE   student_info
// SET grade = "O"
// WHERE marks >= 80;


// UPDATE   student_info
// SET grade = "A"
// WHERE marks >= 70 AND < 80; 


// UPDATE   student_info
// SET grade = "B"
// WHERE marks >= 60 AND <70;
