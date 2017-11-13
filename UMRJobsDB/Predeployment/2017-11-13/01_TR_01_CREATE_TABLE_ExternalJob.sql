USE [UMRJOBS]
GO

/****** Object:  Table [dbo].[ExternalJob]    Script Date: 11/13/2017 3:38:29 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ExternalJob](
	[ExternalJobID] [bigint] IDENTITY(1,1) NOT NULL,
	[State] [nvarchar](500) NOT NULL,
	[County] [nvarchar](500) NOT NULL,
	[ReqJobOpeningId] [int] NOT NULL,
 CONSTRAINT [PK_ExternalJob] PRIMARY KEY CLUSTERED 
(
	[ExternalJobID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO