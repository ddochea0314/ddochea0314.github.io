---
title: '1. .NET 이란?'
description: '.NET은 마이크로소프트에서 만든 프로그래밍 플랫폼입니다. 과거 .NET은 .NET 윈도우에서만 사용할 수 있었지만, .NET Core가 나오면서 리눅스나 맥에서도 사용할 수 있게 되었습니다.'
date: '2023-12-24 00:12:45'
tags: 
- 'dotnet'
- 'csharp'
- 'hello-dotnet'
- '.NET 튜토리얼'
- '.NET Tutorial'
- 'C# 튜토리얼'
- 'C# Tutorial'
- 'Get started with C#'
next: {
    title: '2. 개발환경 구성하기',
    link: './2-setup-dotnet-develop-enviroment'
}
---

.NET은 마이크로소프트에서 만든 프로그래밍 플랫폼입니다. 과거 .NET은 .NET 윈도우에서만 사용할 수 있었지만, .NET Core가 나오면서 리눅스나 맥에서도 사용할 수 있게 되었습니다.

## .NET의 특징

.NET은 크게 3가지 특징이 있습니다.

### 1. 언어 독립성

.NET은 언어 독립성을 가지고 있습니다. 즉, C#으로 만든 프로그램을 F#으로도 만들 수 있습니다. 물론 C#과 F#은 서로 다른 언어이지만, .NET이라는 플랫폼 위에서 동작하기 때문에 서로 호환이 가능합니다.

### 2. 플랫폼 독립성

.NET은 플랫폼 독립성을 가지고 있습니다. 즉, 윈도우에서 만든 프로그램을 리눅스나 맥에서도 동작할 수 있습니다. 물론 .NET Framework는 윈도우에서만 동작하지만, .NET Core는 리눅스나 맥에서도 동작합니다.

### 3. 구조 독립성

.NET은 구조 독립성을 가지고 있습니다. 즉, 32비트에서 만든 프로그램을 64비트에서도 동작할 수 있습니다. 물론 32비트와 64비트는 서로 다른 구조이지만, .NET이라는 플랫폼 위에서 동작하기 때문에 서로 호환이 가능합니다.

## .NET의 구성요소

.NET은 크게 3가지 구성요소로 이루어져 있습니다.

### 1. CLR

CLR은 Common Language Runtime의 약자로, .NET의 가상머신입니다. CLR은 .NET 어셈블리를 실행하는 역할을 합니다. .NET 어셈블리는 C#이나 F# 등의 언어로 만든 프로그램을 컴파일한 결과물입니다. .NET Core 이상부터 CoreCLR이라고 부르기도 합니다.

### 2. BCL

BCL은 Base Class Library의 약자로, .NET의 기본 클래스 라이브러리입니다. BCL은 .NET 어셈블리를 실행하는 데 필요한 기본 클래스를 정의합니다. FCL(Framework Class Library)이란 명칭과도 혼용되는데, FCL은 BCL보다 약간 넓은 개념으로 사용되기도하며, 약자에서 보듯 .NET Framework 에서 사용하던 용어이기도 합니다. BCL, FCL 모두 .NET 어셈블리를 실행하기 위한 구성요소이긴 하지만 직접적인 용어를 외우고 있는 것보단, `System.DateTime`, `System.Collections.Generic.List<T>` 등의 클래스가 기본적으로 속해있는 라이브러리이다. 정도로 이해하고 넘어가도 됩니다.

### 3. CTS

CTS는 Common Type System의 약자로, .NET의 타입 시스템입니다. CTS는 .NET 어셈블리를 실행하는 데 필요한 타입을 정의합니다. CTS는 .NET 언어들이 공통적으로 사용하는 타입을 정의합니다. 예를 들어, C#의 `int` 타입은 CTS의 `System.Int32` 타입과 매핑됩니다. CTS는 .NET 언어들이 공통적으로 사용하는 타입을 정의하기 때문에, C#의 `int` 타입과 F#의 `int` 타입은 CTS의 `System.Int32` 타입과 매핑됩니다.

CTS에 구성된 .NET의 모든 형식은 값 형식과 참조 형식 2가지로 나뉩니다.

 - 값 형식 : 대입 시 값이 복사되는 형식을 의미합니다. 대표적으로 `int`, `double`, `bool` 등이 있습니다. 값 형식은 대입 연산자를 사용할 때 값이 복사되기 때문에, 값 형식의 변수를 다른 변수에 대입하면 값이 복사됩니다. 그래서 값 형식의 변수를 다른 변수에 대입하면, 두 변수는 서로 독립적으로 동작합니다.
 - 참조 형식 : 대입 시 값이 복사되지 않는 형식을 의미합니다. 대표적으로 `class`를 통해 생성한 객체변수가 있습니다. 참조 형식은 대입 연산자를 사용할 때, 메모리 상에 존재하는 값의 메모리 주소를 복사하기 때문에, 참조 형식의 변수를 다른 변수에 대입하면 값이 복사되지 않습니다. 그래서 참조 형식의 변수를 다른 변수에 대입하면, 두 변수는 서로 동일한 값을 참조하게 됩니다.

> C#의 `string` 타입은 값 형식처럼 동작하지만, 참조형식입니다. C#의 `string` 타입은 CTS의 `System.String` 타입과 매핑됩니다. C#의 `string` 타입은 값 형식처럼 동작하는 이유는, C# 컴파일러가 `string` 타입을 사용할 때마다 `System.String` 타입의 인스턴스를 생성하고, `System.String` 타입의 인스턴스를 대입 연산자를 통해 복사하기 때문입니다.
 
## .NET의 버전

.NET은 2002년부터 출시되어 현재까지도 유지보수 되고 있는 .NET Framework와 2016년 .NET Core라는 이름으로 시작하여 현재까지도 매해 11월마다 정식 릴리즈되는 .NET 버전이 있습니다.

- .NET Framework : 2002년 2월에 1.0으로 최초 릴리즈되어 현재 4.8까지 유지보수되고 있는 윈도우(Window) OS 전용 .NET 버전입니다. 여전히 지원되고 있지만, 신규 서비스 개발에서는 크로스플랫폼 기반의 .NET을 사용하는 것을 권장합니다.
- .NET Core : 2016년 6월에 1.0으로 최초 릴리즈되어 현재 3.1까지 유지보수되고 있는 크로스플랫폼(Cross Platform) 기반의 .NET 버전입니다. .NET Framework와 달리 윈도우, 리눅스, 맥 등 다양한 운영체제에서 사용할 수 있습니다. .NET 5.0 부터는 Core라는 명칭이 사라지고, .NET이라는 명칭으로 릴리즈 됩니다. 매해 11월마다 새로운 버전이 릴리즈되며, 2023년 11월에는 .NET 8.0이 정식 릴리즈 되었습니다.

![릴리즈 스케줄](/series/hello-dotnet/1/release-schedule-dark.svg)

닷넷 버전은 LTS 기준 36개월, STS 기준 18개월간 보안패치, 기능수정, 버그수정 등의 업데이트 서비스를 제공합니다. 자세한 사항은 [.NET 릴리즈 수명](https://dotnet.microsoft.com/ko-kr/platform/support/policy/dotnet-core#cadence)에서 확인가능합니다.

다음 과정에선 개발환경을 구성하는 과정을 진행하겠습니다.

## 참조
- [BCL](https://learn.microsoft.com/ko-kr/dotnet/standard/glossary#bcl)
- [CTS](https://learn.microsoft.com/ko-kr/dotnet/standard/base-types/common-type-system)