---
title: 'SqlCommand로 프로시저 호출 시 the Size property has an invalid size of 0 오류해결방법'
date: '2023-04-20 22:34:00'
description: 'Ado.NET에서 SqlCommand로 프로시저 호출 시 the Size property has an invalid size of 0 오류가 발생한다면 확인해야 할 사항을 알아봅니다.'
tags:
  - '.NET'
  - 'ADO.NET'
  - '프로시저 호출'
  - 'CSharp'
  - 'Database'
  - 'SqlServer'
  - 'MSSQL'
  - 'SqlCommand'
  - 'SqlClient'
  - 'SqlParameter'
---

요새 .NET에선 Dapper, EntityFramework 사용하기 때문에 해당 오류를 잘 볼일은 없습니다. 하지만, 레거시 코드를 오랫동안 운영중인 회사에선 여전히 ADO.NET 원형코드를 사용하고 있습니다.
Dapper, EFCore 에서 신경쓰지 않아도 될 부분이 많아지게 되죠. `the Size property has an invalid size of 0` 도 그 중 하나입니다.

## the Size property has an invalid size of 0 발생이유

이 오류는 SqlCommand로 프로시저를 호출할 때 파라메터 설정인 SqlParameter에 Size를 지정하지 않을 경우 발생합니다.
파라메터를 프로시저의 매개변수로 전달하는 `ParameterDirection.Input`의 경우는 전달할 값 자체를 C# 코드내 변수 값을 통해 지정하기 때문에 일반적으로 Size를 지정하지 않아도 됩니다.
값 자체에 Size가 있기 때문이죠.

그러나 반대로 값을 받아오는 경우인 `ParameterDirection.Output`의 경우는 사전에 Size를 알 수 없어 필수적으로 지정해줘야 합니다.
만약 프로시저에서 `@Result`를 `VARCHAR(10)`으로 선언했다면, 값을 받을 `SqlParameter`의 Size를 10으로 지정해줘야 합니다.

## 이슈 예시 

확인을 위해 아래와 같은 테이블과 프로시저를 생성합니다.

```sql
use ApplicationDB
GO
-- 테이블 생성
CREATE TABLE [dbo].[Student](
	[StudentId] [int] NOT NULL PRIMARY KEY IDENTITY(1,1),
	[Name] [nvarchar](50) NOT NULL
) ON [PRIMARY]
GO

-- 프로시저 생성
CREATE PROCEDURE InsertStudent
    @Name NVARCHAR(50),
    @Result VARCHAR(10) OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO ApplicationDB.dbo.Student ("Name") VALUES (@Name);
    SET @Result = 'Success';
END
GO
```

C# 코드는 아래와 같이 작성합니다.

> 예시코드의 SqlConnection 문자열은 본인 환경에 맞게 수정해주세요.

```csharp
using System.Data.SqlClient;

SqlConnection conn = new SqlConnection("Server=localhost;Database=ApplicationDB;User Id=sa;Password=P@ssw0rd;"); 
conn.Open(); 

SqlCommand cmd = new SqlCommand("InsertStudent", conn);
cmd.CommandType = System.Data.CommandType.StoredProcedure;
cmd.Parameters.Add(new SqlParameter("@Name", "John"));
cmd.Parameters.Add(new SqlParameter("@Result", System.Data.SqlDbType.VarChar));
cmd.Parameters["@Result"].Direction = System.Data.ParameterDirection.Output;

cmd.ExecuteNonQuery();

// print result
Console.WriteLine(cmd.Parameters["@Result"].Value);

conn.Close();
```

해당 코드는 아래와 같은 에러를 발생시킵니다.

```text
Unhandled exception. System.InvalidOperationException: String[1]: the Size property has an invalid size of 0
```

## 해결방법

위의 코드에서 `@Result`의 Size를 지정해주면 해결됩니다.

```csharp
cmd.Parameters.Add(new SqlParameter("@Result", System.Data.SqlDbType.VarChar, 10));
```

전체 코드는 아래와 같습니다.

```csharp
using System.Data.SqlClient;

SqlConnection conn = new SqlConnection("Server=localhost;Database=ApplicationDB;User Id=sa;Password=P@ssw0rd;"); 
conn.Open(); 

SqlCommand cmd = new SqlCommand("InsertStudent", conn);
cmd.CommandType = System.Data.CommandType.StoredProcedure;
cmd.Parameters.Add(new SqlParameter("@Name", "John"));
cmd.Parameters.Add(new SqlParameter("@Result", System.Data.SqlDbType.VarChar, 10));
cmd.Parameters["@Result"].Direction = System.Data.ParameterDirection.Output;

cmd.ExecuteNonQuery();

// print result
Console.WriteLine(cmd.Parameters["@Result"].Value);

conn.Close();
```

수정 후 실행시 아래와 같이 정상적으로 출력됩니다.

```text
Success
```
