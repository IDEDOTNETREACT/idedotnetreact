alter procedure sp_AddEmployee(@Id varchar(5),@Name varchar(20),@jd date,@desig varchar(20),@salary int)
as
begin
begin try
if ((select count(*) from Employee where Id=@Id)=0)
begin
insert into Employee(Id,Name,JoinDate,Designation,Salary) values(@Id,@Name,@jd,@desig,@salary)
end
else
print 'Employee Already exist with Id '+@Id
end try
begin catch
select ERROR_MESSAGE()
end catch
end
Go
exec sp_AddEmployee 'E0001','Ram','12.2.2024','Programmer',30000
exec sp_AddEmployee 'E0010','Ram','12.2.2024','Programmer',30000
select * from Employee
drop procedure sp_sum --drop the procedure