--Date functions
--GetDate()-- Returns current date and time
select GetDate()
--SysDateTime()
select SYSDATETIME()
--Current_TimeSteamp
select CURRENT_TIMESTAMP
--Date Part Functions
--Year(date)
select Year(getdate())
select year('2.23.2000')
select Month(getdate())
select Month('3.3.2023')
select Day('2.23.2010')
select DatePart(DD,getdate())
select DatePart(MM,getdate())
select DatePart(YY,getdate())
select DatePart(HOUR,getdate())
select DATENAME(weekday,getdate())
select DATENAME(weekday,'12.2.2000')
select DATENAME(weekday,'08.15.1947')
select DateAdd(yy,3,'12.2.2010')
select DATEADD(day,5,getdate())
select DateDiff(day,'2025.1.1',getdate())
select DateDiff(year,'1.1.2000',getdate())
select DATETRUNC(Month,getdate()) --works for sqlserver2022 and leter
select Cast(Getdate() as Date);
select convert(varchar,Getdate(),103); --dd/mm/yy
select FORMAT(getdate(),'yy-MM-dd')
select FORMAT(getdate(),'dd-MM-yy')