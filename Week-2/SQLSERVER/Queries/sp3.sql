--wriete procedure to add new employee
create procedure sp_person(@id varchar(20),@Name varchar(20),@city varchar(20)='Delhi')
as
begin
insert into Person values(@id,@Name,@city)
end
exec sp_person 1,'Ram','Pune'
exec sp_person 2,'Sita'
select * from Person