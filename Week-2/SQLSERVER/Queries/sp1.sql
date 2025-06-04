--create stored procedure
create procedure sp_sum(@a int,@b int)
as
begin
--write quries here
declare @result int
set @result=@a+@b
select @result as [Output]
end
Go
--execute procedure
exec sp_sum 12,10
exec sp_sum @b=15,@a=10 --named parameters