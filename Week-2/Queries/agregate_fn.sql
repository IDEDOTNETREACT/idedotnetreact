--Aggrigate functions
Count,Max,Min,Sum,Avg
select * from production.products
select count(*) from production.products
select count(*) as 'Count' from production.products where brand_id=9
select max(list_price) as 'Max Price' from production.products
select min(list_price) as 'Min Price' from production.products
select avg(list_price) as 'Avg Price' from production.products
select sum(list_price) as 'Sum' from production.products where brand_id=9