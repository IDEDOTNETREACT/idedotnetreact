--if 
declare @a int
declare @b int
select @a=10,@b=20
if @a>@b
begin
print cast(@a as varchar(20))+' Is bigger'
print 'Good Day'
end
else
begin
print cast(@b as varchar(20))+' Is bigger'
print 'Good Day'
end