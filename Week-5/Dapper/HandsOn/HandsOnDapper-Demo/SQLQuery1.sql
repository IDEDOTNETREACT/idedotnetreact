USE [ADMDOTNET]
GO

DECLARE	@return_value Int

EXEC	@return_value = [dbo].[GetAllProducts]

SELECT	@return_value as 'Return Value'

GO
