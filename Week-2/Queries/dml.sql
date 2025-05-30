--DML commands
--Insert,Update,Delete
--Insert
--add row to the table
insert into Project values('P001','ECommerce')
insert into Project values('P002','HealthCare')
insert into Project(ProjectCode,ProjectName) values('P003','AbcSchool')
select * from Project
insert into Employee values('E0001','Rajan','2.12.2024','TeamLeader',78000,'P001')
insert into Employee values('E0002','Karan','2.12.2025','Sr Programmer',48000,'P002')
insert into Employee values('E0003','Monica','4.23.2024','Programmer',34000,'P003')
insert into Employee(Id,Name) values('E0004','Rada')
select * from Employee
--Update statement
update Employee set JoinDate='3.22.2022',Salary=90000,ProjectCode='P001' where Id='E0004'
update Employee set Salary=Salary+5000
--Detete statement
Delete from Employee where Id='E0004'