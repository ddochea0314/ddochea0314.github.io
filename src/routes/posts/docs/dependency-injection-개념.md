---
title: 'Dependency Injection 이란?'
date: '2023-03-26 00:00'
description: 'Dependency Injection 이란, 의존성 주입이라고도 불리며, 제어의 역전이라고도 불립니다. 이는 객체지향 프로그래밍에서 객체 간의 의존성을 줄이기 위해 사용되는 패턴입니다'
tags:
  - 'Dependency Injection'
  - 'DI'
  - 'Inversion of Control'
  - 'IoC'
  - '의존성 주입'
  - '제어의 역전'
  - '.NET'
---

## Dependency Injection 이란?

Dependency Injection 이란, 의존성 주입이라고도 불리며, 제어의 역전이라고도 불립니다. 이는 객체지향 프로그래밍에서 객체 간의 의존성을 줄이기 위해 사용되는 패턴입니다. 의존성 주입은 객체를 생성하고, 그 객체가 사용할 의존성을 주입하는 것을 말합니다. 의존성 주입은 객체의 생성과 사용을 분리함으로써 객체 간의 결합도를 낮추고, 유연성을 높이는데 도움을 줍니다.

## 코드를 통한 비교

Dependency Injection을 사용하지 않는 경우, 의존성이 있는 객체를 직접 생성하거나 관리해야 합니다. 이는 객체 간의 결합도가 높아지며, 코드의 유지보수성과 테스트 용이성이 저하됩니다.

예를 들어, 다음과 같은 코드가 있다고 가정해 봅시다.

```csharp
public class MyClass
{
    private readonly MyDependency _myDependency;

    public MyClass()
    {
        _myDependency = new MyDependency();
    }

    public void DoSomething()
    {
        _myDependency.DoSomething();
    }
}

public class MyDependency
{
    public void DoSomething()
    {
        Console.WriteLine("Did something.");
    }
}
```

위 코드에서 MyClass는 생성자에서 MyDependency를 직접 생성하여 \_myDependency 필드에 저장합니다. 이제 DoSomething 메소드에서 \_myDependency 객체의 메소드를 호출합니다. 이 경우, MyClass는 MyDependency 객체에 강하게 의존합니다. 따라서 MyDependency 객체가 변경되면 MyClass도 변경되어야 합니다.

하지만, Dependency Injection을 사용하면 MyClass에서 MyDependency 객체를 생성하지 않고, 외부에서 주입받아 사용할 수 있습니다.

```csharp
public class MyClass
{
    private readonly IMyDependency _myDependency;

    public MyClass(IMyDependency myDependency)
    {
        _myDependency = myDependency;
    }

    public void DoSomething()
    {
        _myDependency.DoSomething();
    }
}

public interface IMyDependency
{
    void DoSomething();
}

public class MyDependency : IMyDependency
{
    public void DoSomething()
    {
        Console.WriteLine("Did something.");
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        var myDependency = new MyDependency();
        var myClass = new MyClass(myDependency);
        myClass.DoSomething();
    }
}
```

위 코드에서 MyClass는 생성자에서 IMyDependency 인터페이스를 주입받아 \_myDependency 필드에 저장합니다. 이제 DoSomething 메소드에서 \_myDependency 객체의 메소드를 호출합니다. 이 경우, MyClass는 IMyDependency 인터페이스에만 의존하므로 의존성이 더 낮아졌습니다.

> .NET 에선 Microsoft.Extensions.DependencyInjection 패키지를 제공합니다. 이 패키지는 .NET Core에 기본으로 포함되어 있으며, `ASP.NET Core`, `Worker`, `.NET MAUI` 등 현대화된 프로젝트 템플릿에서 기본적으로 사용합니다. 따라서 실제 구현시 해당 패키지를 사용하여 의존성 주입하는 것을 추천합니다. 예시 코드에선 이해를 돕기 위해 직접 대입하는 방식으로 구현했습니다.

## Dependency Injection의 장점

Dependency Injection을 사용하면 다음과 같은 장점이 있습니다.

- 객체 간의 결합도를 낮춰 유연성을 높일 수 있습니다.
- 객체의 생성과 사용을 분리하여 코드의 유지보수성과 테스트 용이성을 높일 수 있습니다.
- 객체의 재사용성을 높일 수 있습니다.

아래코드는 테스트 코드입니다. 테스트 코드에서는 실제 객체를 생성하는 대신, 모의 객체를 생성하여 테스트를 진행합니다. 테스트 코드에서는 실제 객체를 생성하지 않고, 어떤 단계까지 완료되었을 때를 가정한 모의 객체를 생성하여 테스트를 진행할 수 있으므로 데이터베이스나 외부 API와 같이 외부 요소에 실체 호출을 하지 않아도 됩니다.

```csharp
[Test]
public void MyClass_DoSomething_Should_Call_MyDependency_DoSomething()
{
    // Arrange
    IMyDependency myDependencyMock = new MyDependencyMock();
    MyClass myClass = new MyClass(myDependencyMock);

    // Act
    myClass.DoSomething();

    // Assert
    // 모의(mock) 객체의 메소드가 호출되었는지 확인하는 코드
}
```

DI 가 아닌 경우, 테스트 코드에서는 실제 객체를 생성해야 합니다. 이 경우 테스트 코드에서 실제 객체에 영향을 주게 되며, 객체가 데이터베이스 또는 외부 API에 의존하는 경우 외부 요소에 의해 테스트가 실패할 수 있습니다.

```csharp
[Test]
public void MyClass_DoSomething_Should_Call_MyDependency_DoSomething()
{
    // Arrange
    MyDependency myDependency = new MyDependency();
    MyClass myClass = new MyClass(myDependency);

    // Act
    myClass.DoSomething();

    // Assert
    // 실제 객체의 메소드가 호출되었는지 확인하는 코드
}
```

## Dependency Injection의 단점

Dependency Injection을 사용하면 다음과 같은 단점이 있습니다.

- 코드가 복잡해질 수 있습니다.
- 의존성이 많은 경우, 의존성을 관리하기 어려울 수 있습니다.

## 참고

- [Dependency Injection in .NET Worker](https://docs.microsoft.com/en-us/dotnet/core/extensions/dependency-injection)
- [Dependency Injection in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0)
