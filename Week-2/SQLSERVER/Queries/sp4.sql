--fetch employees using project
create procedure sp_GetEmployeesByProject(@projectCode varchar(20))
as
begin
begin try
select * from Employee where ProjectCode=@projectCode
end try
begin catch
select ERROR_MESSAGE()
end catch
end
exec sp_GetEmployeesByProject 'P002'