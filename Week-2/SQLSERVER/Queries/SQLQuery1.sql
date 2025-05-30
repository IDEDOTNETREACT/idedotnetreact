-- Create new Database
create database ADMDOTNET
create database IDEDOTNET
--A Database is a collection of objects
--objects include tables,views,stored procedures,functions,triggers,curstos etc
-- In a Database table objects are used to manage the data(Customer,Employee,Items,Products,Orders)
--select database
use IDEDOTNET
create table Person(Id int,[Name] varchar(20),[Address] varchar(100))