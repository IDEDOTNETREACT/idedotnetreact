--In Sql Joins are used to combine rows from two or more tables based on related columns between them
--Inner,Left OuterJoin,Right OuterJoin,Cross Join,SelfJoin
--Inner Return matching rows from the both tables
--Left join All rows from left tables+matching rows from right
--Right Join All rows from right table+matching rows from left
--Full Join All rows when there is match in either table
--Cross Join Cartesian product of both the table
--Self Join Join a table itself
select * from Project
select * from Employee
insert into Project values('P004','Project-k')
insert into Project values('P005','Project-G')
insert into Employee values('E0006','Khanna',getdate(),'Programmer',23000,null)

--Inner Join
Select E.Name,P.ProjectName from Employee E
join Project P
on E.ProjectCode=P.ProjectCode
--Left Outer Join
Select E.Name,P.ProjectName from Employee E
left outer join Project P
on E.ProjectCode=P.ProjectCode

--Right Outer Join
Select Employee.Name,Project.ProjectName from Employee
right outer join Project
on Employee.ProjectCode=Project.ProjectCode
--Full Outer Join
Select E.Name,P.Projectname from Employee E
Full Join Project P on 
E.ProjectCode=P.ProjectCode
--Cross Join
Select E.Name,P.ProjectName from Employee e
cross join Project P
Select A.Name as Employee,B.Name As Manager
from Employee A inner join Employee B on A.MId=B.Id
where A.Mid is not null

select * from Employee
alter table Employee add MId char(5) default 'E0005'
update Employee set Mid='E0006' where id not in('E0001','E0002')