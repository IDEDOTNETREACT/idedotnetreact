select * from Employee
create view vw_employee
as
select Id,Name,Joindate,Designation from Employee
Go
select * from vw_employee
select Id,Name from vw_employee
select * from vw_employee where Designation='Programmer'
update vw_employee set Designation='Sr Programmer' where id='E0003'