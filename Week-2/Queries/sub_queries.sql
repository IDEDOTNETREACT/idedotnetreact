--Sub Queries
-- a subquery is a query nested another sql query
--use subqueries in select,update,insert,delete
select * from Project
select * from Employee
--subquery in where clause
select * from Employee where ProjectCode=(select ProjectCode from Project where ProjectName='AbcSchool')
select Id,Name from(Select Id,Name from Employee where ProjectCode='P001') as ABCEmployees
select * from Employee where ProjectCode in(select ProjectCode from Project where ProjectName in('Abcschool','HealthCare'))
select * from Employee
insert into Employee values('E0005','Rishab','4.21.2025','Programmer',23000,null)
select Max(Salary) from Employee
select * from Employee where Salary=Max(Salary)
select * from Employee where Salary=(Select Max(Salary) from Employee)
--2nd highetst salary
select * from Employee where Salary=(Select Max(Salary) from Employee where Salary<(Select Max(Salary) from Employee))
--get employees who are having highest salary of all employees of p002
select * from Employee where salary>all(Select max(Salary) from Employee where ProjectCode='P002')
select Name from Employee E where exists(select * from Project P where E.ProjectCode=P.ProjectCode)
select Name from Employee where ProjectCode is not null