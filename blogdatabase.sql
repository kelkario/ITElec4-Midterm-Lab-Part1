create database blogdatabase;
use blogdatabase;
create table posts (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title varchar(255) NOT NULL,
    content TEXT NOT NULL
);