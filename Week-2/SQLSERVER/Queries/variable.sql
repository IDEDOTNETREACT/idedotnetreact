--create varible
declare @id int
declare @name varchar(20)
declare @order_date date
--assign value to the variable
set @id=3240
set @name='Virat'
set @order_date='2018.2.23'
--assing multiple variable values
select @id=3409832,@name='Sachin',@order_date=getdate()
print @id
print @name
print @order_date
Go