create view vw_employeeproject
as
select e.id,e.name,e.designation,p.projectname from 
Employee e join Project p
on e.ProjectCode=p.ProjectCode
select * from vw_employeeproject
select name,projectname from vw_employeeproject
select * from vw_employeeproject where ProjectName='ECommerce'
sp_helptext vw_employee
sp_helptext vw_employeeproject