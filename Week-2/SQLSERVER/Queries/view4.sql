create view View2
with schemabinding
as
select Id,Name,City from dbo.Person
Go
drop table Person
drop view View2