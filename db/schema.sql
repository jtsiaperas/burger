drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers (
   id int auto_increment unique,
   burger_name varchar(140) not null,
   devoured boolean default false,
   primary key (id)
);