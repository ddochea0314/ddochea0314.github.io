---
title: '13. 정적(static)요소 정리'
description: 'static 키워드를 사용하여 정적 요소를 만들 수 있습니다.'
date: '2023-12-31 09:04:06'
tags: ['dotnet', 'csharp', 'hello-dotnet']
prev: {
    title: '12. 클래스 - 상속',
    link: './12-inheritance'
}
---

static 키워드를 사용하여 정적 요소를 만들 수 있습니다. 정적 요소는 아래와 같은 특징을 가집니다.

- 정적 요소는 클래스의 인스턴스가 생성되지 않아도 사용할 수 있습니다.
- 인스턴스의 생성 여부와 상관없이 하나의 메모리만 사용합니다.
- 정적 요소는 클래스의 인스턴스가 생성되기 전에 먼저 생성됩니다.

정적 요소는 아래와 같은 것들을 만들 수 있습니다.

- 정적 필드
- 정적 메서드
- 정적 생성자
- 정적 클래스

## 정적 필드

정적 필드는 static 키워드를 사용하여 만들 수 있습니다. 정적 필드는 클래스의 인스턴스가 생성되지 않아도 사용할 수 있습니다.

```csharp
class Student
{
    public int StudentNumber;
    public int Grade;
    public int Class;
    public string Name;
    public bool IsGraduated;

    // 정적 필드
    public static int StudentCount;
}
```

## 정적 메서드

정적 메서드는 static 키워드를 사용하여 만들 수 있습니다. 정적 메서드는 클래스의 인스턴스가 생성되지 않아도 사용할 수 있습니다.

```csharp
class Student
{
    public int StudentNumber;
    public int Grade;
    public int Class;
    public string Name;
    public bool IsGraduated;

    // 정적 메서드
    public static void PrintStudentCount()
    {
        Console.WriteLine($"학생 수: {StudentCount}");
    }
}
```

## 정적 생성자

정적 생성자는 static 키워드를 사용하여 만들 수 있습니다. 정적 생성자는 인스턴스의 생성 수량과 상관없이 1회만 실행됩니다.

```csharp
class Student
{
    public int StudentNumber;
    public int Grade;
    public int Class;
    public string Name;
    public bool IsGraduated;

    // 정적 생성자
    static Student()
    {
        StudentCount = 0;
    }

    // 정적 필드
    public static int StudentCount;
}
```

정적 필드, 정적 메서드, 정적 생성자와 인스턴스 생성자를 사용하여, 학생 객체를 생성할 때마다 학생 수를 증가시키는 예제를 만들어보겠습니다.

```csharp
class Student
{
    public int StudentNumber;
    public int Grade;
    public int Class;
    public string Name;
    public bool IsGraduated;

    // 정적 생성자
    static Student()
    {
        StudentCount = 0;
    }

    // 인스턴스 생성자
    public Student(int Grade, int Class, string Name)
    {
        this.Grade = Grade;
        this.Class = Class;
        this.Name = Name;

        StudentCount++;
    }

    // 정적 필드
    public static int StudentCount;

    // 정적 메서드
    public static void PrintStudentCount()
    {
        Console.WriteLine($"학생 수: {StudentCount}");
    }
}
```

Program.cs 파일에서 학생 객체를 생성할 때마다 학생 수를 증가시키는 코드를 추가합니다.

```csharp
Student student1 = new Student(1, 1, "홍길동");
Student student2 = new Student(1, 2, "홍길순");
Student student3 = new Student(2, 1, "홍길만");

Student.PrintStudentCount();
```

![실행 결과](/series/hello-dotnet/13/1-run-result.png)

## 정적 클래스

정적 클래스는 static 키워드를 사용하여 만들 수 있습니다. 정적 클래스는 인스턴스를 생성할 수 없습니다. 정적 클래스는 정적 필드와 정적 메서드만 가질 수 있습니다.

```csharp

// 정적 클래스

static class Student
{
    public static int StudentCount;

    public static void PrintStudentCount()
    {
        Console.WriteLine($"학생 수: {StudentCount}");
    }
}
```

정적 클래스는 주로 확장 메서드(Extension Method)를 만들 때 사용됩니다. 아래 식은 문자열을 정수로 변환하는 확장 메서드를 만드는 예시입니다.

```csharp
static class StringExtension
{
    public static int ToInt(this string value)
    {
        try 
        {
            return int.Parse(value);
        }
        catch
        {
            return 0;
        }
}
```

string에는 개발자가 직접적으로 멤버 함수나 정적 함수를 추가할 수 없습니다. 하지만 위와 같이 확장 메서드를 사용하면, 마치 기능이 존재하는 것처럼 사용할 수 있습니다. 동일한 작업을 수행하는 로직을 많이 구현해야 하지만,
그 대상이 Nuget이나 수동 추가한 외부 DLL 처럼 수정을 가할 수 없는 라이브러리의 객체일 경우 유용하게 사용할 수 있습니다.

```csharp
string value = "123";
int number = value.ToInt();
```

## 참고

- [정적 클래스 및 정적 클래스 멤버](https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/classes-and-structs/static-classes-and-static-class-members)
- [정적 생성자](https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/classes-and-structs/static-constructors)