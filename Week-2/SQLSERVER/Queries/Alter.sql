-- alter commands
-- use to add new column, drop column,chage datatype, add constraint
sp_help Person
--add column
alter table Person add city varchar(20) null
--chage datatype
alter table Person alter column Id varchar(20) not null
--drop column
alter table Person drop column [address]
sp_helpconstraint Person
--add primary key constraint to the Id
alter table Person add constraint Pk_Id Primary key(Id)