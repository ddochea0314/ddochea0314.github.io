---
title: '3. Hello World 프로그램 만들기'
description: '개발 환경을 설치 후, 입문자의 통과의례라 할 수 있는 Hello World 프로그램을 생성해봅니다.'
date: '2023-12-25 00:29:00'
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
    title: '2. 개발환경 구성하기',
    link: './2-setup-dotnet-develop-enviroment'
}
next: {
    title: '4. C# 기본 자료형(Data Type)',
    link: './4-about-datatype'
}
---

개발환경 설치가 완료되었다면, 이제 Hello World 프로젝트를 생성해봅시다.

## 1. Visual Studio를 이용한 Hello World 프로젝트 생성

### 1.1. 프로젝트 생성

Visual Studio를 실행하면 다음과 같은 화면이 표시됩니다. `Craete a new project`를 클릭합니다.

![Create a new project](/series/hello-dotnet/3/vs-1-create-new-project.png)

### 1.2. 새 프로젝트 만들기

다음 화면에서는 프로젝트 템플릿을 선택합니다. `Console App`를 선택하고, `Next` 버튼을 클릭합니다.

> 검색창에 `console app`을 입력하면 `Console App`, `Console App (.NET Framework)`두 템플릿이 표시됩니다. 현재 단계에선 어느것을 선택해도 동일한 결과가 나오므로 상관없지만, 향후 익히게 될 `C# 12` 문법을 사용하려면 `.NET 8` 기반으로 설정된 `Console App`을 선택하는게 좋습니다. 

![Console App](/series/hello-dotnet/3/vs-2-console-app.png)

### 1.3. 새 프로젝트 구성

프로젝트 이름과 저장 위치를 지정합니다. 프로젝트 이름은 `HelloWorld`로 지정합니다. 저장 위치는 사용자의 환경에 따라 다를 수 있습니다.

![프로젝트 이름 및 저장 위치](/series/hello-dotnet/3/vs-3-project-name.png)

해당 단계에서 설정하는 요소는 아래와 같은 역할을 합니다.

- Project name : 프로젝트 이름 입력란입니다. 해당 이름으로 프로젝트 폴더가 생성되며, 별도 설정이 없다면, 프로젝트명에 따라 프로그램의 이름이 결정됩니다.
- Location : 프로젝트를 저장할 위치를 지정합니다. 프로젝트를 저장할 위치는 사용자의 환경에 따라 다를 수 있습니다.
- Solution name : 솔루션 이름 입력란입니다. 솔루션은 하나 이상의 프로젝트를 묶어서 관리하는 단위입니다.

저장 위치를 지정한 후, `Next` 버튼을 클릭합니다.

### 1.4. 추가정보(Additional Infomation) 설정

프로젝트 생성이 완료되면, 추가정보(Additional Infomation) 설정 화면이 표시됩니다. 해당 화면은 프로젝트 템플릿 선택에 따라 약간 차이가 있을 수 있습니다.

![추가정보 설정](/series/hello-dotnet/3/vs-4-additional-infomation.png)

- Framework : 프로젝트를 실행할 .NET 버전을 지정합니다. 해당 시리즈에서는 .NET 8.0을 사용합니다.
- Do not use-top-level statements : 최상위 문장(Top-level statements)을 사용할 것인지 여부를 지정합니다. 최상위 문장은 프로그램의 시작점을 지정하는 `Main` 메서드를 생략할 수 있게 해주는 기능입니다. 해당 옵션은 Console 및 일부 프로젝트 템플릿 한정으로 표기되는 옵션입니다. 체크시 Main() 메서드가 생성된 Program.cs 파일이 생성됩니다.

```
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
```

- Enable Native AOT publish : 빌드시 IL 를 네이티브 코드로 컴파일하여 실행속도를 향상시키는 기능입니다. 해당 옵션을 사용하면 .NET 이 설치되어있지 않은 환경에서도 실행 가능한 파일을 생성할 수 있으며, 실행속도가 향상되고, 메모리 공간을 더 적게 사용하는 이점을 가질 수 있습니다. 단, 빌드속도가 오래걸리고, 용량이 커지며, Decompiler 등의 도구를 통해 소스코드를 열람하거나 동적참조, 마샬링 사용불가 등 제약이 따르게 됩니다. 일부 단점은 .NET 버전이 올라감에 따라 해소될 수 있겠지만 일반적인 상황에선 사용하지 않는 것을 권장합니다.
관련 내용은 [limitations-of-native-aot-deployment](https://learn.microsoft.com/ko-kr/dotnet/core/deploying/native-aot/?tabs=net8plus%2Cwindows#limitations-of-native-aot-deployment)에서 확인할 수 있습니다.

기본 선택 상태 그대로 `Create` 버튼을 클릭합니다.

### 1.5. Hello World 프로젝트 실행

생성이 완료되면 화면과 같이 `Program.cs` 파일이 열립니다. 

![Hello World 프로젝트](/series/hello-dotnet/3/vs-5-hello-world-project.png)

화면에서 상단 `HelloWorld`로 적힌 버튼을 누르거나, `F5` 키를 눌러 실행합니다. 실행이 완료되면, 별도 터미널 창이 열리며, `Hello World!`가 출력되는 것을 확인할 수 있습니다.

![Hello World 프로젝트 실행](/series/hello-dotnet/3/vs-6-hello-world-run.png)

`Hello World!` 만 출력하기만 하면 심심할 수 있으니, 코드를 아래와 같이 수정해봅시다.

```csharp
// See https://aka.ms/new-console-template for more information
Console.Write("Insert your Name : ");
var name = Console.ReadLine();
Console.WriteLine($"Hello, World! {name}");
```

각 줄의 코드를 설명하면 다음과 같습니다.

- `Console.Write("Insert your Name : ");` : 콘솔에 `Insert your Name : `을 출력합니다.
- `var name = Console.ReadLine();` : 콘솔에서 입력받은 값을 `name` 변수에 저장합니다.
- `Console.WriteLine($"Hello, World! {name}");` : 콘솔에 `Hello, World! {name}`을 출력합니다. `{name}`은 `name` 변수의 값을 출력합니다.

코드를 수정한 후, `HelloWorld` 버튼을 눌러 실행합니다. 실행이 완료되면, 별도 터미널 창이 열리며, `Insert your Name : `이 출력되는 것을 확인할 수 있습니다. `Insert your Name : `에 이름을 입력하고 엔터를 누르면, `Hello, World! {name}`이 출력되는 것을 확인할 수 있습니다.

![이름을 입력받는 Hello World 프로젝트 실행](/series/hello-dotnet/3/vs-7-hello-world-run-with-name.png)

![이름을 입력받는 Hello World 프로젝트 실행 결과](/series/hello-dotnet/3/vs-8-hello-world-run-with-name.png)

## 2. Visual Studio Code를 이용한 Hello World 프로젝트 생성

### 2.1. 프로젝트 생성

Visual Studio Code를 실행하면 다음과 같은 화면이 표시됩니다. `Craete .NET Project`를 클릭 하거나, 상단 검색창(Ctrl+P)에서 `> .NET: New Project` 입력 후 엔터를 누른 뒤, `Console App`을 선택합니다.

> Visual Studio Code 기능을 통한 생성은 프레임워크의 버전이나, `Do not use-top-level statements` 등 옵션 기능을 직접적으로 제공하지 않습니다. 해당 옵션을 통해 프로젝트를 생성하려면 `dotnet new console` 명령어를 통해 생성해야 합니다.
자세한 내용은 [dotnet new console](https://docs.microsoft.com/ko-kr/dotnet/core/tools/dotnet-new?tabs=netcore22#console-app)에서 확인할 수 있습니다.

> 만약 Main 함수를 포함하여 생성해야 할 경우 `--use-program-main` 옵션을 사용하면 됩니다.

![Create .NET Project](/series/hello-dotnet/3/vscode-1-create-new-project.png)

### 2.2. 프로젝트 생성경로 설정

프로젝트를 생성할 경로를 선택합니다. 경로 선택은 자유지만, 다른 프로젝트와 분할을 위해 경로 마지막에 솔루션명으로 사용할 디렉토리를 생성한 후, 해당 경로에 프로젝트 생성하는 것을 추천드립니다. 
2023년 12월 기준으로, Visual Studio 와 달리, Visual Studio Code에선 솔루션에 대한 별도 경로 생성 및 하위 프로젝트 경로에 대해 고려하지 않고 생성됩니다.

![프로젝트 생성 경로](/series/hello-dotnet/3/vscode-2-select-project-path.png)

### 2.3. 프로젝트 이름 설정

경로 설정이 완료되었다면 프로젝트명을 입력하는 란이 표시됩니다. 프로젝트명을 `HelloWorld`로 입력하고 엔터를 누릅니다.

![프로젝트 이름 설정](/series/hello-dotnet/3/vscode-3-input-project-name.png)

생성이 완료되면, 해당 경로로 VSCode가 이동됩니다. 첫 실행시 신뢰할 수 있는 작성자가 만든 경로인지 질의하는데, `Yes, I trust the authors`를 선택해야 설치했던 C# 확장 프로그램을 사용할 수 있습니다.

![신뢰할 수 있는 작성자](/series/hello-dotnet/3/vscode-4-trust-authors.png)

설정이 완료되면, `Program.cs` 파일이 열립니다.

![Hello World 프로젝트](/series/hello-dotnet/3/vscode-5-hello-world-project.png)

### 2.4. Hello World 프로젝트 실행

`Program.cs` 파일이 열린 상태에서 `F5` 키를 누르거나, `Run` 메뉴에서 `Start Debugging`을 선택합니다. 실행이 완료되면, 하단의 터미널 창이 열리며, `Hello World!`가 출력되는 것을 확인할 수 있습니다.

![Hello World 프로젝트 실행](/series/hello-dotnet/3/vscode-6-hello-world-run.png)

![Hello World 프로젝트 실행 결과](/series/hello-dotnet/3/vscode-7-hello-world-run-result.png)

Visual Studio 와 동일하게 코드를 수정하고 실행하면, 하단 터미널 창에서 입력을 받고, `Hello, World! {name}`이 출력되는 것을 확인할 수 있습니다.

![이름을 입력받는 Hello World 프로젝트 실행](/series/hello-dotnet/3/vscode-8-hello-world-run-with-name.png)

다음 시리즈에서는 C#의 기본 자료형을 알아보겠습니다.