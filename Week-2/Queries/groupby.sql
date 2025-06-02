-- Group by is used to group rows that have same values in specified column
--it used with aggregate fns like count,sum etc
--select col1,ag_fun(col2)
-- from table_name
-- group by col1
select * from Employee
select ProjectCode,count(*) as 'Count' from Employee group by ProjectCode
select * from sales.customers
select City,COUNT(*) as 'Customer_Count' from sales.customers group by city
select City,COUNT(*) as 'Customer_Count' from sales.customers group by city order by Customer_Count
--using having clause
select City,COUNT(*) as 'Customer_Count' from sales.customers group by city having count(*)>2 order by Customer_Count
select City,State,count(*) as 'Count' from sales.customers
group by City,State
select * from Employee
select ProjectCode,sum(Salary) as 'Total Salary' from Employee group by ProjectCode