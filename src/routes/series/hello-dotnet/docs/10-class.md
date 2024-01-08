---
title: '10. 클래스 - 접근 제한자'
description: '클래스(Class)는 객체(Object)를 만들기 위한 틀입니다.'
date: '2023-12-29 09:01:54'
tags: ['dotnet', 'csharp', 'hello-dotnet']
prev: {
    title: '9. 함수(Function)',
    link: './9-function'
}
next: {
    title: '11. 클래스 - 생성자와 소멸자',
    link: './11-constructor-and-destructor'
}
---

클래스(Class)는 실세계의 데이터를 추상화하여 프로그램에서 사용할 수 있는 형태로 정의한 것입니다. 가령 `학생`을 정의한다면 어떤 것들이 있을까요? 이 학생의 `학번`이 무엇인지, `학년`은 몇 학년인지, `반`은 몇 반인지 등의 정보가 있을 것입니다. 이러한 정보를 추상화하여 프로그램에서 사용할 수 있는 형태로 정의한 것이 클래스입니다.

이를 클래스로 정의한다면 다음과 같이 정의할 수 있습니다.

```csharp
class Student
{
    public int StudentNumber; // 학번
    public int Grade; // 학년
    public int Class; // 반
    public string Name; // 이름
    public bool IsGraduated; // 졸업여부
}
```

위 예제는 `Student`라는 클래스를 정의한 것입니다. 이 클래스는 `학번`, `학년`, `반`, `이름`, `졸업여부`라는 정보를 가지고 있습니다. 이러한 정보를 `멤버변수(Member Variable)` 또는 `필드(Field)`라고 부릅니다. 필드는 클래스 내부에 선언되며, 필드의 타입은 `int`, `string`, `bool` 등의 기본 타입 뿐만 아니라 클래스 자체도 사용할 수 있습니다.

필드에는 기본값을 지정할 수도 있습니다.

```csharp
class Student
{
    public int StudentNumber = 0; // 학번
    public int Grade = 0; // 학년
    public int Class = 0; // 반
    public string Name = ""; // 이름
    public bool IsGraduated = false; // 졸업여부
}
```

메소드도 정의할 수 있습니다. 아래 예제는 학생이 3학년인지 확인하고, 졸업 여부를 설정하는 메소드입니다.

```csharp
class Student
{
    public int StudentNumber; // 학번
    public int Grade; // 학년
    public int Class; // 반
    public string Name; // 이름
    public bool IsGraduated; // 졸업여부

    public void SetIsGraduated()
    {
        if (Grade == 3)
        {
            IsGraduated = true;
        }
        else
        {
            IsGraduated = false;
        }
    }
}
```

각 클래스의 구성요소를 `멤버(Member)`라고 부릅니다. 클래스의 멤버는 기본적으로 `필드(Field)`와 `메소드(Method)`로 구성됩니다. 

> 그 외에도 C# 에선 `속성(Property)`, `이벤트(Event)`, `연산자(Operator)`, `인덱서(Indexer)` 등의 멤버를 가질 수 있습니다. 이러한 개념은 이번 시리즈에서 설명하고자 하는 OOP의 개념과는 조금 거리가 있으므로, 이번 시리즈에서는 필드와 메소드에 대해서만 설명하도록 하겠습니다.

## 접근제한자에 대한 이해

현재 구성하고 있는 `멤버(Member)`는 모두 `public`으로 선언되어 있습니다. `public`은 접근제한자 중 1가지로 클래스의 멤버에 접근할 수 있는 범위를 지정합니다. `public`으로 선언된 멤버는 클래스 외부에서도 접근할 수 있습니다.

C#에서 사용할 수 있는 접근제한자는 다음과 같습니다.

- `public` : 클래스 외부에서도 접근할 수 있습니다.
- `private` : 클래스 내부에서만 접근할 수 있습니다.
- `protected` : 클래스 내부 또는 파생 클래스에서 접근할 수 있습니다.
- `internal` : 같은 어셈블리 내에서만 접근할 수 있습니다.

### private과 public의 차이점

단순 설명만으론 잘 이해가 되지 않으실 것 입니다. 아래 예제를 통해 접근제한자에 대해 이해해보도록 하겠습니다. 지금까지 진행했던 시리즈의 예제들보다 비교적 복잡하므로 별도 프로젝트를 생성하여 설명하도록 하겠습니다.
> 생성 예제는 Visual Studio 2022 를 기준으로 작성되었습니다.

먼저, `IntroClass` 솔루션과 프로젝트를 생성합니다.

![프로젝트 생성](/series/hello-dotnet/10/1-create-project.png)

`IntroClass` 프로젝트에 `Student` 클래스를 생성합니다. 생성방법은 Visual Studio에서 `IntroClass` 프로젝트를 우클릭하고 `Add > New Items`을 선택합니다.

![클래스 생성](/series/hello-dotnet/10/2-create-class.png)

![클래스 생성](/series/hello-dotnet/10/3-create-class.png)

> 버전에 따라 `Add New Item` 팝업이 아닌 Template 선택 팝업이 나타날 수 있습니다. 해당 화면이 표기될 경우 Class 선택 후 이름 입력과 함께 `Add` 버튼을 클릭하면 됩니다.

![템플릿을 통한 클래스생성](/series/hello-dotnet/10/4-create-class-with-template.png)

생성이 완료되면 `Student.cs` 파일이 생성됩니다.

```csharp
namespace IntroClass
{
    internal class Student
    {
    }
}
```

`namespace` 부분 안에 있는 Student 클래스를 아래와 같이 수정합니다.

```csharp
namespace IntroClass
{
    internal class Student
    {
        public int StudentNumber;
        public int Grade;
        public int Class;
        public string Name;
        public bool IsGraduated;

        public void SetIsGraduated()
        {
            if (Grade == 3)
            {
                IsGraduated = true;
            }
            else
            {
                IsGraduated = false;
            }
        }
    }
}
```

이번엔 `Program.cs` 를 수정 후 실행해보도록 하겠습니다.

```csharp
// See https://aka.ms/new-console-template for more information

using IntroClass;

Student student = new Student()
{
    StudentNumber = 2021030101,
    Grade = 3,
    Class = 1,
    Name = "홍길동",
    IsGraduated = false
};

Console.WriteLine($"{student.Name}은 {student.Grade}학년 입니다");

student.SetIsGraduated();

Console.WriteLine($"{student.Name}은 {(student.IsGraduated? "졸업" : "미졸업")}학년 입니다");
```

![실행결과](/series/hello-dotnet/10/5-run.png)

IsGraduated 값이 true여부에 따라 졸업 여부를 출력하는 것을 확인할 수 있습니다. 그런데 IsGraduated 필드는 `public`으로 선언되어 있어 `student.SetIsGraduated();` 함수 직후 직접 접근하여 값을 변경할 수 있습니다.

```csharp
// See https://aka.ms/new-console-template for more information

using IntroClass;

Student student = new Student()
{
    StudentNumber = 2021030101,
    Grade = 3,
    Class = 1,
    Name = "홍길동",
    IsGraduated = false
};

Console.WriteLine($"{student.Name}은 {student.Grade}학년 입니다");

student.SetIsGraduated();
student.IsGraduated = false; // 직접 접근하여 값을 변경

Console.WriteLine($"{student.Name}은 {(student.IsGraduated? "졸업" : "미졸업")}학년 입니다");
```

이렇게 되면 `SetIsGraduated` 함수를 통해 판별했던 졸업학년 여부 설정이 무의미해지며, 결과적으로 잘못된 값을 출력하게 됩니다. 현재 소스코드야 간단한 에제이기 때문에 단순히 `IsGraduated` 값을 설정하는 부분만 수정하면 되는거 아닌가 생각할 수 있지만, 실무 프로젝트에서는 본인 외 개발자들이 작성한 클래스를 사용하거나, 본인이 작성한 클래스를 다른 개발자들이 사용할 수 있습니다. 이런 경우 문제점을 찾아내는데 까지 오랜 시간이 소요되고, 그 동안 잘못된 데이터로 인해 서비스가 중단되거나, 올바르지 않은 결과로 금전적 손실을 입을 수 있습니다.

![실행결과](/series/hello-dotnet/10/6-run.png)

이러한 문제를 해결하기 위해 `IsGraduated` 필드의 접근을 제한해야 합니다. 아래와 같이 `IsGraduated` 필드의 접근을 `private`으로 변경하고, `GetIsGraduated` 함수를 추가해보겠습니다.

```csharp
namespace IntroClass
{
    internal class Student
    {
        public int StudentNumber;
        public int Grade;
        public int Class;
        public string Name;
        private bool IsGraduated;

        public void SetIsGraduated()
        {
            if (Grade == 3)
            {
                IsGraduated = true;
            }
            else
            {
                IsGraduated = false;
            }
        }

        public bool GetIsGraduated()
        {
            return IsGraduated;
        }
    }
}
```

`Process.cs` 파일을 수정하여 `GetIsGraduated` 함수를 사용하도록 변경합니다.

```csharp
// See https://aka.ms/new-console-template for more information

using IntroClass;

Student student = new Student()
{
    StudentNumber = 2021030101,
    Grade = 3,
    Class = 1,
    Name = "홍길동",
    // IsGraduated = false // 더 이상 직접 접근할 수 없음
};

Console.WriteLine($"{student.Name}은 {student.Grade}학년 입니다");

student.SetIsGraduated();
// student.IsGraduated = false; // 더 이상 직접 접근할 수 없음

Console.WriteLine($"{student.Name}은 {(student.SetIsGraduated()? "졸업" : "미졸업")}학년 입니다");
```

더 이상 `IsGraduated` 필드에 직접 접근할 수 없기 때문에 `SetIsGraduated` 데이터가 오염되는 일이 발생하지 않게 됩니다. 이 처럼 접근제한자는 개발자가 실수할 여지가 있는 부분을 최대한 막아주는 안전장치의 역할을 합니다.

### protected 접근제한자

protected 접근제한자를 이해하려면 먼저 `상속(Inheritance)`에 대해 이해해야 합니다. 상속은 부모 클래스의 멤버를 자식 클래스에서 사용할 수 있도록 해주는 개념입니다. 예를 들어, 학생 중 문과 학생과 이과 학생이 있다고 가정해봅시다.
두 유형 모두 학생이지만, 내신 평가 방식이나 졸업 요건 등이 다를 수 있습니다.

이 경우 상속없이 클래스를 정의한다면 아래와 같이 모든 유형의 학생에 대해 모든 정보를 정의하거나, 문과 학생과 이과 학생에 대해 각각 클래스를 정의해야 합니다.

```csharp
class Student
{
    public int StudentNumber;
    public int Grade;
    public int Class;
    public string Name;
    public bool IsGraduated;
    public bool IsLiberalStudent; // 문과 학생 여부
    
    // 이과 학생 평가 반영 점수
    public int MethScore; // 수학 점수
    public int ChemScore; // 화학 점수
    public int PhysScore; // 물리 점수

    // 문과 학생 평가 반영 점수
    public int KorScore; // 국어 점수
    public int EngScore; // 영어 점수
    public int JepanScore; // 일본어 점수

    // 문과 학생 평가 반영 점수합계 구하기
    public int GetLiberalArtsScore()
    {
        return KorScore + EngScore + JepanScore;
    }

    // 이과 학생 평가 반영 점수합계 구하기
    public int GetScienceScore()
    {
        return MethScore + ChemScore + PhysScore;
    }
}
```

하지만 상속을 사용한다면 아래와 같이 부모 클래스를 정의하고, 자식 클래스에서 부모 클래스를 상속받아 사용할 수 있습니다.

```csharp
class Student
{
    public int StudentNumber;
    public int Grade;
    public int Class;
    public string Name;
    public bool IsGraduated;
}

// 문과 학생 클래스
class LiberalStudent : Student
{
    public int KorScore; // 국어 점수
    public int EngScore; // 영어 점수
    public int JepanScore; // 일본어 점수

    public int GetTotalScore()
    {
        return KorScore + EngScore + JepanScore;
    }

    public void SetIsGraduated()
    {
        if (Grade == 3 && GetTotalScore() >= 150)
        {
            IsGraduated = true;
        }
        else
        {
            IsGraduated = false;
        }
    }
}

// 이과 학생 클래스
class ScienceStudent : Student
{
    public int MethScore; // 수학 점수
    public int ChemScore; // 화학 점수
    public int PhysScore; // 물리 점수

    public int GetTotalScore()
    {
        return MethScore + ChemScore + PhysScore;
    }

    public void SetIsGraduated()
    {
        if (Grade == 3 && GetTotalScore() >= 150)
        {
            IsGraduated = true;
        }
        else
        {
            IsGraduated = false;
        }
    }
}
```

이처럼 상속은 중복되는 코드를 줄여주고, 유지보수를 용이하게 해주는 장점이 있습니다.

여기서 IsGraduated 필드는 `Student` 클래스에서 정의되었지만, `LiberalStudent` 클래스와 `ScienceStudent` 클래스에서도 사용할 수 있습니다. 하지만 이전 예제처럼 `public`으로 선언하면 Program.cs에서 직접 접근할 수 있기 때문에 문제가 발생할 수 있습니다.
그렇다고 `private` 으로 선언한다면 `LiberalStudent` 클래스와 `ScienceStudent` 클래스에서도 접근할 수 없기 때문에 함수 내부에서 `IsGraduated` 값을 설정할 수 없습니다. 이런 경우 `protected` 접근제한자를 사용합니다.

```csharp
class Student
{
    public int StudentNumber;
    public int Grade;
    public int Class;
    public string Name;
    protected bool IsGraduated; // protected로 변경
}
```

### internal 접근제한자

`internal` 접근제한자는 같은 어셈블리 내에서만 접근할 수 있습니다. 어셈블리란 프로젝트를 빌드하면 생성되는 파일을 의미합니다.
현 프로젝트에서 경로에서 `bin\Debug\net8.0` 폴더를 확인해보면 IntroClass.dll 파일이 생성되어 있습니다. 이 IntroClass.dll 파일이 바로 어셈블리입니다.

![어셈블리 위치예시](/series/hello-dotnet/10/7-assembly-location.png)

예시를 위해 생성했던 `IntroClass` 솔루션에 새로운 프로젝트를 추가하겠습니다.

![프로젝트 추가](/series/hello-dotnet/10/8-add-project.png)

템플릿 선택창에서 `Class Library` 프로젝트를 선택합니다.

![프로젝트 추가](/series/hello-dotnet/10/9-add-project.png)

라이브러리명칭은 `StudentLibrary`로 설정하겠습니다.

![라이브러리 명칭 설정](/series/hello-dotnet/10/10-add-project.png)

프로젝트 생성이 완료되면 `StudentLibrary` 프로젝트에 `Class1` 클래스가 생성되어 있습니다. 해당 파일을 지우고 `Student` 클래스를 생성합니다. 그 후, 기존 `IntroClass` 프로젝트에 생성했던 `Student` 클래스를 복사하여 붙여넣습니다.

```csharp
namespace StudentLibrary
{
    internal class Student
    {
        public int StudentNumber;
        public int Grade;
        public int Class;
        public string Name;
        protected bool IsGraduated;
    }
}
```

![클래스 생성](/series/hello-dotnet/10/11-add-project.png)

기존 프로젝트에서 `Student` 클래스를 참조하기위해 `StudentLibrary`를 프로젝트에 참조를 추가합니다.

![프로젝트 참조 추가](/series/hello-dotnet/10/12-add-project.png)


`Program.cs` 파일을 수정하여 `StudentLibrary` 프로젝트의 `Student` 클래스를 사용하도록 변경합니다.

```csharp
// See https://aka.ms/new-console-template for more information

using StudentLibrary; // StudentLibrary 프로젝트의 Student 클래스가 소속된 네임스페이스를 사용한다고 명시

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
```

해당 코드를 실행하려하면 아래와 같은 오류가 발생합니다.

![접근 제한자 오류](/series/hello-dotnet/10/13-error.png)

이는 `StudentLibrary` 프로젝트의 `Student` 클래스가 `internal`로 선언되어 있기 때문입니다. `internal`로 선언된 클래스는 같은 어셈블리 내에서만 접근할 수 있습니다. 이를 해결하기 위해 `StudentLibrary` 프로젝트의 `Student` 클래스를 `public`으로 변경합니다.

```csharp
namespace StudentLibrary
{
    public class Student // public으로 변경
    {
        public int StudentNumber;
        public int Grade;
        public int Class;
        public string Name;
        protected bool IsGraduated;
    }
}
```

이제 `Program.cs` 파일을 실행하면 오류가 사라지며, 프로그램 또한 정상적으로 실행됩니다.

예제에선 internal 외 다른 접근 제한자를 모두 멤버변수에만 적용했지만 클래스에도 적용할 수 있습니다. internal 또한 멤버변수에도 적용 가능합니다.

## 참조

- [C# 프로그래밍 가이드 - 클래스 및 구조체](https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/classes-and-structs/)
- [C# 프로그래밍 가이드 - 접근 한정자](https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers)
- [C# 프로그래밍 가이드 - 상속](https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/classes-and-structs/inheritance)