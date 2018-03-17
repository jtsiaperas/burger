use i0sh31pnm26y4vhe;
drop table burgers;
create table burgers (
   id int auto_increment not null,
   burger_name varchar(140) not null,
   devoured boolean default false,
   createdAt TIMESTAMP default current_timestamp,
   primary key (id)
);