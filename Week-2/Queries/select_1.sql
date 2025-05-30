select * from sales.customers
select customer_id,first_name,last_name,email from sales.customers
select customer_id from sales.customers
select first_name+' '+last_name as 'full_name' from sales.customers
select * from sales.customers where city='Fairport'
select * from sales.customers where state='CA'
select * from sales.customers where city='Campbell' and state='CA'
select * from sales.customers where city='Campbell' or State='NY'
select * from sales.customers where city in('Campbell','Fairport','Buffalo')
select * from sales.customers where city not in('Campbell','Fairport','Buffalo')
select * from sales.customers where phone is null
select * from sales.customers where city='Fairport' order by first_name asc
select * from sales.customers where city='Fairport' order by last_name desc
select * from sales.customers where state='NY' order by city
select * from sales.customers where customer_id=210
select * from sales.customers where first_name like 'T%'
select * from sales.customers where first_name like '%y'
select * from sales.customers where first_name like 'F%y'
select * from sales.customers where first_name like '[a-c]%'
select * from sales.customers where first_name like '%o%'
select * from sales.customers where first_name like '_o%'
select * from production.products
select * from production.products where model_year between 2018 and 2019
select * from production.products where list_price between 1 and 100
select * from production.products where list_price between 100 and 200
select * from production.products where list_price not between 100 and 200