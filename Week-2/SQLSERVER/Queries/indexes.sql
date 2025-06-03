--Indexers
select * from sales.customers where state='NY'
sp_helpindex project
sp_helpindex employee
sp_helpindex person
select * from Person
create nonclustered index nc_name on Person(Name)