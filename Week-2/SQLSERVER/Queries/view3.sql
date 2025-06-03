create view view1
with encryption
as
select [Name],city from Person
go
sp_helptext view1
drop table Person