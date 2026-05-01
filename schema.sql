use student;
create table user(
    id varchar(255) primary key,
    name varchar(50) unique,
    email varchar(255) not null,
    password varchar(50)not null
)