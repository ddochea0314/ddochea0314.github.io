---
title: '11. 클래스 - 생성자와 소멸자'
description: '클래스에는 생성자와 소멸자라는 특별한 메서드가 있습니다.'
date: '2023-12-30 01:22:31'
tags: 
- 'dotnet'
- 'csharp'
- 'hello-dotnet'
- '.NET 튜토리얼'
- '.NET Tutorial'
- 'C# 튜토리얼'
- 'C# Tutorial'
- 'Get started with C#'
prev: {
    title: '10. 클래스 - 접근 제한자',
    link: './10-class'
}
next: {
    title: '12. 클래스 - 상속',
    link: './12-inheritance'
}
---

클래스에는 생성자와 소멸자라는 특별한 메서드가 있습니다. 생성자는 클래스의 인스턴스가 생성될 때 호출되는 메서드이고, 소멸자는 클래스의 인스턴스가 소멸될 때 호출되는 메서드입니다.
간단한 이해를 위해 지난 시간에 다뤘던 `Student` 클래스를 조금 수정해보도록 하겠습니다.

## 생성자

생성자는 클래스의 인스턴스가 생성될 때 호출되는 메서드입니다. 생성자는 클래스의 이름과 동일한 이름을 가집니다.

```csharp
using System;

namespace StudentLibrary
{
    public class Student // public으로 변경
    {
        public int StudentNumber;
        public int Grade;
        public int Class;
        public string Name;
        protected bool IsGraduated;

        // 생성자
        public Student()
        {
            Console.WriteLine("Student 생성자 호출");
        }
    }
}
```

지난시간의 프로젝트를 실행하면 아래와 같은 결과가 나타납니다.

![실행 결과](/series/hello-dotnet/11/1-run-result.png)

`Student` 클래스의 인스턴스가 생성될 때 `Student 생성자 호출`이라는 메시지가 출력되는 것을 확인할 수 있습니다. Program.cs 소스 맨 끝 줄에 `Student` 객체를 한개 더 생성한다면, 메시지가 한번 더 출력될 것 입니다.

```csharp
// See https://aka.ms/new-console-template for more information
using StudentLibrary;

Student student = new Student()
{
    StudentNumber = 2021030101,
    Grade = 3,
    Class = 1,
    Name = "홍길동"
};

Console.WriteLine($"{student.Name}은 {student.Grade}학년 입니다");
student.SetIsGraduated();
Console.WriteLine($"{student.Name}은 {(student.GetIsGraduated()? "졸업" : "미졸업")}학년 입니다");

Student student1 = new Student(); // student1 객체 생성
```

![실행 결과](/series/hello-dotnet/11/2-run-result.png)

### 생성자의 파라메터

생성자는 다른 메서드와 마찬가지로 파라메터를 가질 수 있습니다. 아래 예제는 파라메터를 통해 학생의 이름을 초기화하는 생성자를 추가한 예제입니다.

```csharp
public class Student // public으로 변경
{
    public int StudentNumber;
    public int Grade;
    public int Class;
    public string Name;
    protected bool IsGraduated;

    public Student(int Grade, int Class, string Name)
    {
        this.Grade = Grade;
        this.Class = Class;
        this.Name = Name;
    }
}
```

`this`는 클래스의 인스턴스를 가리키는 키워드입니다. 일반적으론 없어도 되지만 `this.Grade` 처럼 파라메터명이 멤버 변수명과 동일하면 프로그램에서 동일이름에 대해 함수의 파라메터를 우선으로 인식하기 때문에, 멤버 변수를 가리키기 위해 `this`를 사용합니다.

program.cs 소스에선 아래와 같이 생성자를 호출할 수 있습니다.

```csharp
// See https://aka.ms/new-console-template for more information
using StudentLibrary;

Student student = new Student(3, 1, "홍길동");

Console.WriteLine($"{student.Name}은 {student.Grade}학년 입니다");

student.SetIsGraduated();

Console.WriteLine($"{student.Name}은 {(student.GetIsGraduated()? "졸업" : "미졸업")}학년 입니다");
```

### 생성자 오버로딩

생성자도 함수오버로딩이 가능합니다. 함수 오버로딩이 이해가 안된다면 [9. 함수](./9-function#함수-오버로딩)를 참고해주세요.

```csharp
public class Student // public으로 변경
{
    public int StudentNumber;
    public int Grade;
    public int Class;
    public string Name;
    protected bool IsGraduated;

    public Student(int Grade, int Class, string Name)
    {
        this.Grade = Grade;
        this.Class = Class;
        this.Name = Name;
    }

    public Student(int StudentNumber, int Grade, int Class, string Name)
    {
        this.StudentNumber = StudentNumber;
        this.Grade = Grade;
        this.Class = Class;
        this.Name = Name;
    }
}
```

### 생성자의 접근제한자

생성자에도 private, public, protected 등의 접근제한자를 사용할 수 있습니다. 하지만 public 생성자가 아닌 경우, 해당 클래스의 인스턴스를 생성할 수 없습니다. 직접 생성할 수 없게 됩니다.

```csharp
public class Student
{
    public int StudentNumber;
    public int Grade;
    public int Class;
    public string Name;
    protected bool IsGraduated;

    private Student(int Grade, int Class, string Name)
    {
        this.Grade = Grade;
        this.Class = Class;
        this.Name = Name;
    }
}
```

```csharp
using StudentLibrary;

Student student = new Student(3, 1, "홍길동"); // 컴파일 에러
```

이걸 왜 지원하는지 잘 이해가 안될 수도 있습니다. 그러나 종종 프로그램에서 1개의 클래스에서 오직 1개의 객체만을 생성하여 사용하길 제한하는 경우가 있습니다. 이것을 싱글톤 패턴(Singleton Pattern)이라고 합니다.
싱글톤 패턴은 GoF의 디자인 패턴 중 하나로, 프로그램 내에서 1개의 객체만을 생성하여 사용하도록 하는 패턴입니다. 프로그래밍 기초단계에서 설명하기엔 너무 앞서가는 내용이므로 여기서 따로 다루진 않겠습니다.

GoF 디자인 패턴에 대한 자세한 내용은 [GoF 디자인 패턴](https://ko.wikipedia.org/wiki/GoF_%EB%94%94%EC%9E%90%EC%9D%B8_%ED%8C%A8%ED%84%B4)을 참고해주세요.

```csharp
using SingletonLibrary;

Singleton singleton = Singleton.GetInstance();
Singleton singleton1 = Singleton.GetInstance();

Console.WriteLine(singleton == singleton1); // 두 객체는 사실상 같은 메모리 주소를 가리키는 1개의 변수객체
```

## 소멸자

소멸자는 클래스의 인스턴스가 소멸될 때 호출되는 메서드입니다. 소멸자는 클래스의 이름 앞에 `~`를 붙여서 사용합니다. 소멸자는 다음과 같은 형식으로 사용됩니다.

```csharp
using System;

namespace StudentLibrary
{
    public class Student // public으로 변경
    {
        public int StudentNumber;
        public int Grade;
        public int Class;
        public string Name;
        protected bool IsGraduated;

        // 생성자
        ~Student()
        {
            Console.WriteLine("Student 생성자 호출");
        }
    }
}
```

소멸자는 생성자와 달리 파라메터를 가질 수 없습니다. 또한 소멸자는 오직 한개만 존재할 수 있습니다. 소멸자가 호출되는 시점은 객체가 소멸될 때이므로, 파라메터나 오버로딩을 제공할 이유가 없기 때문입니다.
만약 소멸자가 두개 이상 존재한다면 컴파일 에러가 발생합니다.

또한 .NET 특성상 일반적으론 개발자가 직접 객체 소멸을 제어할 수 없으므로, 해당 예제에서 소멸자의 호출을 확인할 순 없습니다.

소멸시기는 가비지 컬렉터에 의해 결정됩니다. 가비지 컬렉터란? 객체와 같은 메모리 자원이 프로그램 내에서 더 이상 사용되지 않을 때, 해당 메모리 자원을 해제하여 프로세스가 사용하는 메모리양을 최적화하는 역할을 합니다.
만약 가비지 컬렉터가 없다면 개발자가 직접 메모리를 해제해야 하며, 실수로 해제하지 않을 경우 프로그램 실행 중 점점 메모리 사용량이 늘어나 결국에는 PC의 메모리를 전부 고갈시켜 프로그램이 강제 종료되는 문제가 발생할 수 있습니다.
다만 가비지 컬렉터가 메모리 수집을 하는 순간엔 프로그램의 성능이 저하될 수 있으므로, 정리 대상이 생겼다고 하여 무작정 동작하진 않습니다.

가비지 컬렉터에 대한 자세한 내용은 [가비지 수집 기본 사항](https://docs.microsoft.com/ko-kr/dotnet/standard/garbage-collection/fundamentals)를 참고해주세요.

## 참조

- [생성자 (C# 프로그래밍 가이드)](https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/classes-and-structs/constructors)
- [소멸자 (C# 프로그래밍 가이드)](https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/classes-and-structs/destructors)
- [가비지 수집 기본 사항](https://docs.microsoft.com/ko-kr/dotnet/standard/garbage-collection/fundamentals)
