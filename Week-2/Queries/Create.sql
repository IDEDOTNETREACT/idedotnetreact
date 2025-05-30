-- Create table with constraints
create table Project(ProjectCode char(4) primary key,ProjectName varchar(20) not null unique)
create table Employee(
Id varchar(5) primary key,
[Name] varchar(30) not null,
JoinDate Date check(JoinDate<getdate()),
Designation varchar(20) default 'Programmer',
Salary int check(Salary>10000),
ProjectCode char(4) foreign key references Project(ProjectCode) on update cascade)