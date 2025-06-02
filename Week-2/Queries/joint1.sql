select * from sales.customers
select * from sales.orders
select * from sales.stores
select c.customer_id,o.order_date,s.store_name from sales.customers c 
join sales.orders o on c.customer_id=o.customer_id
join sales.stores s on o.store_id=s.store_id
