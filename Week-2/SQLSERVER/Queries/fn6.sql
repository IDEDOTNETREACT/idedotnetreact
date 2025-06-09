create function fn_getProject(@pcode varchar(10))
returns varchar(10)
as
begin
declare @projectName varchar(10)
select @projectName=ProjectName from Project where ProjectCode=@pcode
return @projectName
end
Go
select EmployeeId,Name,dbo.fn_getProject(ProjectCode) as ProjectName from Employee
where dbo.fn_getProject(ProjectCode) is not null order by Name asc