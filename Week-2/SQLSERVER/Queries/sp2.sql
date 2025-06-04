alter procedure sp_square(@n varchar(10))
as
begin
begin try
declare @result int
set @result=cast(@n as int)*cast(@n as int)
return @result
end try
begin catch
select 'Error Occured'
select ERROR_MESSAGE()
select ERROR_LINE()
select ERROR_NUMBER()
select ERROR_PROCEDURE()
select ERROR_SEVERITY()
select ERROR_STATE()
end catch
end
declare @r int
exec @r=sp_square 'abc'
select @r