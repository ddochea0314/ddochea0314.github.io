---
title: 'ASP.NET Core에서의 Dependency Injection'
date: '2023-03-26 01:00'
description: 'ASP.NET Core에서의 Dependency injection (의존성 주입)은 애플리케이션의 객체 간 종속성 관리를 단순화하고 테스트 용이성을 개선하기 위한 기술입니다.'
tags:
  - 'Dependency Injection'
  - 'DI'
  - 'Inversion of Control'
  - 'IoC'
  - '의존성 주입'
  - '제어의 역전'
  - 'ASP.NET Core'
---

## ASP.NET Core에서의 Dependency Injection

ASP.NET Core에서의 Dependency injection (의존성 주입)은 애플리케이션의 객체 간 종속성 관리를 단순화하고 테스트 용이성을 개선하기 위한 기술입니다.

ASP.NET Core에서는 의존성 주입을 구현하기 위해 내장된 DI 컨테이너를 제공합니다. DI 컨테이너는 서비스를 등록하고 요청에 따라 인스턴스를 제공하는 역할을 합니다. 의존성 주입을 사용하면 애플리케이션의 객체 간 종속성을 명시적으로 선언할 수 있으며, DI 컨테이너는 종속성을 관리하고 객체를 만들어서 애플리케이션에서 사용할 수 있도록 해줍니다.

DI는 ASP.NET Core 애플리케이션에서 매우 중요한 역할을 합니다. DI를 사용하면 애플리케이션의 유연성과 확장성을 향상시킬 수 있으며, 코드의 재사용성과 유지보수성도 향상시킬 수 있습니다. 또한 DI를 사용하면 테스트하기 쉬운 코드를 작성할 수 있으므로, 테스트 주도 개발 방법론을 적용하기에도 좋습니다.

## 서비스 등록

ASP.NET Core에서는 서비스 등록을 위해 다음과 같은 방법을 제공합니다.

- AddSingleton
- AddScoped
- AddTransient

이 세가지 요소를 ASP.NET Core에서 서비스의 생명주기(lifecycle)라고 부릅니다. 서비스의 생명주기는 서비스가 생성되고 해제되는 방식을 의미합니다.

### AddSingleton

애플리케이션 전체에서 단일 인스턴스를 사용해야 하는 서비스에 사용됩니다. 즉, 애플리케이션에서 한 번만 인스턴스를 만들고 모든 요청에 대해 동일한 인스턴스를 반환합니다.

```csharp
services.AddSingleton<IMyService, MyService>();
```

### AddScoped

요청 처리 동안 한 번만 인스턴스를 만들어야 하는 서비스에 사용됩니다. 요청이 끝나면 인스턴스가 해제됩니다.

```csharp
services.AddScoped<IMyService, MyService>();
```

### AddTransient

매번 새로운 인스턴스를 만들어야 하는 서비스에 사용됩니다.

```csharp
services.AddTransient<IMyService, MyService>();
```

IMyService는 인터페이스이며 MyService는 IMyService를 구현한 클래스입니다. 이 코드는 DI 컨테이너에 IMyService 서비스와 그에 해당하는 MyService 클래스를 등록하는 예제입니다.

서비스 등록 후 DI 컨테이너에서 해당 서비스를 요청하면 DI 컨테이너가 등록된 서비스에 따라 인스턴스를 생성하고 반환합니다.

메소드 사용 위치는 .NET 6.0 기준 Program.cs 파일의 builder 객체의 Services 프로퍼티를 통해 등록할 수 있습니다.

## 서비스 요청

서비스를 요청하기 위해서는 DI 컨테이너를 주입받아야 합니다. ASP.NET Core에서는 DI 컨테이너를 주입받기 위해 다음과 같은 방법을 제공합니다.

### 생성자 주입

생성자를 통해 DI 컨테이너를 주입받습니다. 생성자 주입은 클래스의 생성자에서 DI 컨테이너를 주입받아 필요한 서비스를 가져와 클래스의 멤버 변수로 할당하는 방식입니다.

```csharp
public class MyController : ControllerBase
{
    private readonly MyClass _myClass;

    public MyController(MyClass myClass)
    {
        _myClass = myClass;
    }

    [HttpGet]
    public IActionResult Get()
    {
        _myClass.DoSomething();
        return Ok();
    }
}

```

### 속성 주입

ASP.NET Core에서 DI 컨테이너를 주입받는 또 다른 방법은 속성 주입입니다. 속성 주입은 생성자 주입과 달리, 클래스의 생성자에서 의존성을 주입받지 않고, 클래스의 멤버 변수로서 DI 컨테이너에서 직접 필요한 서비스를 가져와 할당하는 방식입니다.

다음은 속성 주입을 사용하는 예시입니다.

```csharp
public class MyController : ControllerBase
{
    [FromServices]
    public IMyService MyService { get; set; }

    [HttpGet]
    public IActionResult Get()
    {
        MyService.DoSomething();
        return Ok();
    }
}
```

위의 예시에서 MyController 클래스는 IMyService 인터페이스를 사용합니다. MyController 클래스의 멤버 변수인 MyService 속성은 [FromServices] 특성을 사용하여 DI 컨테이너에서 IMyService 인터페이스의 구현체를 가져오도록 설정합니다.

이제 Get() 메서드에서 MyService 속성을 사용하여 IMyService 인터페이스의 메서드를 호출할 수 있습니다. 속성 주입은 생성자 주입보다 간결하고 편리하지만, DI 컨테이너에서 직접 가져오기 때문에 사용하지 않는 서비스도 주입받을 수 있으므로 주의가 필요합니다.

### 메서드 주입

메서드 주입은 생성자 주입과 속성 주입과 달리, 클래스의 생성자나 멤버 변수에서 의존성을 주입받지 않고, 메서드의 매개변수로서 DI 컨테이너에서 직접 필요한 서비스를 가져와 할당하는 방식입니다.

다음은 메서드 주입을 사용하는 예시입니다.

```csharp
public class MyController : ControllerBase
{
    private readonly IMyService _myService;

    public MyController(IMyService myService)
    {
        _myService = myService;
    }

    [HttpGet]
    public IActionResult Get([FromServices] ILogger<MyController> logger)
    {
        _myService.DoSomething();
        logger.LogInformation("Hello, world!");
        return Ok();
    }
}

```

위의 예시에서 MyController 클래스의 Get() 메서드에서 `ILogger<MyController>`를 인자로 받아와서 사용합니다. 이때, [FromServices] 특성을 사용하여 DI 컨테이너에서 `ILogger<MyController>`의 구현체를 가져오도록 설정합니다.

메서드 주입은 클래스의 생성자가 아닌 멤버 메서드에서 의존성을 주입받는 방식이기 때문에, 특정 메서드에서만 사용하는 의존성을 주입받을 때 유용합니다. 그러나, 메서드마다 DI 컨테이너에서 가져와야 하기 때문에, 코드 중복이 발생할 수 있습니다. 또한, 이 방식은 생성자 주입과 달리 DI 컨테이너에서 필요한 서비스의 수명 범위를 제어할 수 없습니다.

위 세 가지 종속성 주입 방법 중에서도 생성자 주입이 가장 많이 사용되며, 일반적으로 권장되는 방식입니다. 이유는 생성자 주입은 클래스의 의존성이 명확하게 드러나기 때문에 유지보수와 테스트가 쉽기 때문입니다. 하지만 특정 상황에 따라 속성 주입 또는 메서드 주입이 필요한 경우도 있을 수 있습니다.

## 참고

- [Dependency injection in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0)
