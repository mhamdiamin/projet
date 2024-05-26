CREATE DATABASE blogs ;

USE blogs;

create table user (
    id INT PRIMARY KEY ,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

create table  posts (
    id_p int primary key ,
    texte VARCHAR(100) NOT NULL,
    description VARCHAR(100),
	image  VARCHAR(100)NOT NULL,
    foreign key (id) references user(id)
);