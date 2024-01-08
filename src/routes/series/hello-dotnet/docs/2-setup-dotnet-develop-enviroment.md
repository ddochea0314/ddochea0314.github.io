---
title: '2. 개발환경 구성하기'
description: '.NET 개발환경을 설치하는 방법을 알아봅니다.'
date: '2023-12-24 01:46:12'
tags: ['dotnet', 'csharp', 'hello-dotnet']
prev: {
    title: '1. .NET 이란?',
    link: './1-intro-what-is-dotnet'
}
next: {
    title: '3. Hello World 프로그램 만들기',
    link: './3-create-helloworld'
}
---

Microsoft 에서 제공하는 .NET 개발환경은 Visual Studio와 Visual Studio Code 2가지가 있습니다.

> 아래 두 가지 방식 `1. Visual Studio` 과 `2. Visual Studio Code` 중 하나를 선택하여 설치하면 됩니다. 두 가지 방법 모두 설치하실 필요는 없습니다. 두 가지 모두 설치하고자 할 경우, `1. Visual Studio` 를 먼저 설치 후, `2. Visual Studio Code` 단계에서 .NET SDK 설치를 건너뛰고(Skip) `Visual Studio Code` 설치단계부터 수행하면 됩니다.

## 1. Visual Studio

사용하는 개발환경이 Windows OS 환경이라면 Visual Studio를 설치하는 것을 추천합니다. Visual Studio는 마이크로소프트에서 제공하는 통합 개발 환경(IDE)입니다. Visual Studio를 설치하면 .NET SDK 및 개발언어를 작성하는데 필요한 도구를 한번에 설치할 수 있습니다.

> Mac 용 Visual Studio도 존재하지만, 2024년 8월에 정식 지원이 종료될 예정입니다. Mac 환경에서는 Visual Studio Code를 사용하는 것을 추천합니다.
> 보다 자세한 내용은 [Mac용 Visual Studio 무슨 일이 일어나고 있습니까?](https://learn.microsoft.com/ko-kr/visualstudio/mac/what-happened-to-vs-for-mac?view=vsmac-2022)에서 확인할 수 있습니다.

[Visual Studio 다운로드](https://visualstudio.microsoft.com/ko/downloads/)에서 접속하면 Community, Professional, Enterprise 버전을 다운로드 받을 수 있습니다. Community 버전은 개인 및 학습용으로 무료로 사용할 수 있습니다. Professional 버전은 기업에서 사용할 수 있으며, Enterprise 버전은 기업에서 사용할 수 있는 고급 버전입니다.

![Visual Studio 다운로드 화면](/series/hello-dotnet/2/vs-1-download.png)

> 현재 다운로드 페이지는 2023.12 월 기준으로 표시되는 화면입니다. 디자인은 변경될 수 있습니다. 

![다운받은 VisualStudioSetup.exe](/series/hello-dotnet/2/vs-2-setupfile.png)

다운로드가 완료되면, 다운로드한 파일을 실행합니다. 실행하면 Visual Studio 설치 프로그램이 실행됩니다.

![Visual Studio Installer](/series/hello-dotnet/2/vs-3-intaller.png)

Visual Studio 설치 프로그램에서 Community 버전의 `설치` 버튼을 클릭하면 개발에 필요한 환경 도구를 선택하는 `워크로드(Workload)` 화면이 표시됩니다. 개발하고자 하는 프로그램의 유형에 따라 필요한 워크로드를 선택하여 설치할 수 있습니다.

![워크로드 선택 화면](/series/hello-dotnet/2/vs-4-installer-workload.png)

닷넷의 대표적인 워크로드는 다음과 같습니다.

- ASP.NET 및 웹 개발 : ASP.NET 및 웹 개발을 위한 워크로드입니다. ASP.NET Core, ASP.NET, HTML, CSS, JavaScript, TypeScript, Node.js, Angular, React 등의 웹 개발을 위한 도구를 설치합니다.
- .NET Multi-platform App UI 개발 : .NET MAUI(Multi-platform App UI)를 위한 워크로드입니다. .NET MAUI는 닷넷으로 모바일 앱 및 기존 데스크탑 프로그램을 통합 개발할 수 있는 프레임워크입니다. .NET MAUI는 2021년 11월에 정식 릴리즈되었습니다.
- .NET 데스크톱 개발 : .NET 데스크톱 개발을 위한 워크로드입니다. WPF, Windows Forms, UWP 등의 데스크톱 개발을 위한 도구를 설치합니다.

> 해당 시리즈는 닷넷 및 C#에 대한 기본적인 내용만을 다루기 때문에 `.NET 데스크톱 개발` 워크로드만 설치해도 됩니다.

워크로드를 선택하면 관련 도구 목록이 표시됩니다. 그외 개별 선택이 필요하다면 `개별 구성 요소` 탭에서 선택할 수 있습니다.

![개별 구성 요소](/series/hello-dotnet/2/vs-5-installer-individual-components.png)

`언어 팩` 영역에서 한글을 선택하면 한글로 번역된 Visual Studio를 사용할 수 있습니다. 선호도에 따라 다를 수 있겠지만, 영어에 거부감이 심한게 아니라면 영어로 선택하시는 것을 추천합니다. 특정 기능에 대한 문의가 필요하거나, 문제가 발생했을 때 나타나는 메시지가 영어로 되어 있으면, 인터넷에서 검색할 때 보다 정확한 정보를 찾을 수 있습니다. 해당 커리큘럼에서도 Visual Studio 영문 버전을 기준으로 설명합니다.

![언어 팩](/series/hello-dotnet/2/vs-6-installer-lang.png)

필요한 설정을 마쳤다면, 설치버튼을 눌러 설치를 진행합니다.

![설치 진행](/series/hello-dotnet/2/vs-7-installer-processing.png)

설치가 완료되면 Visual Studio를 실행할 수 있습니다. 설치 이력이 없는 PC에서 첫 실행시 Visual Studio 로그인화면이 표시됩니다. 
로그인을 하지 않고 사용할 수도 있으나 향후 재설치시 클라우드에 저장된 설정을 불러올 수 없으며, 일부 버전에선 비로그인시 90일의 사용기한이 설정될 수 있습니다.

![설치 후 첫 실행](/series/hello-dotnet/2/vs-8-first-run-login.png)

이후 테마선택 창에서 자신에게 맞는 테마를 선택하고 다음을 누르면 몇 분간의 설정작업을 진행한 후 Visual Studio가 실행됩니다.

![테마 선택](/series/hello-dotnet/2/vs-9-first-run-theme.png)

해당 화면까지 왔다면 설치는 모두 마무리 되었습니다.

![프로젝트 생성화면](/series/hello-dotnet/2/vs-10-start-menu.png)


## 2. Visual Studio Code

사용하는 개발환경이 Visual Studio 를 사용할 수 없거나, 향후 다양한 플랫폼에서 개발을 진행해야 한다면 Visual Studio Code를 설치하는 것을 추천합니다. Visual Studio Code는 마이크로소프트에서 제공하는 소스코드 편집기입니다. 편집기 자체만으로는 .NET에 필요한 도구가 없지만, Microsoft에서 제공하는 확장 프로그램을 설치하면 .NET 개발에 필요한 도구를 사용할 수 있습니다.

> 만약, .NET Framework 기반의 프로그램을 관리해야 한다면, Visual Studio를 사용해야 합니다. .NET Framework 기반의 프로그램은 Visual Studio Code에서 관리할 수 없습니다.

### 2.1 .NET SDK 설치

Visual Studio Code에서 .NET 개발을 수행하려면, 먼저 .NET SDK가 설치되어 있어야 합니다. .NET SDK는 .NET 개발에 필요한 도구를 제공하는 프로그램입니다. .NET SDK는 [다운로드 페이지](https://dotnet.microsoft.com/download)에서 다운로드 받을 수 있습니다.

![.NET SDK 다운로드](/series/hello-dotnet/2/vscode-1-download-sdk.png)

다운로드 이후 안내하는 과정에 따라 진행하면 .NET SDK가 설치됩니다.

설치 완료 후 `cmd` 또는 `powershell` 콘솔창에서 `dotnet --version` 또는 `dotnet --list-sdks` 명령어를 실행하면 설치된 .NET SDK의 버전을 확인할 수 있습니다.

![.NET SDK 버전 확인](/series/hello-dotnet/2/vscode-2-check-sdk-version.png)

### 2.2 Visual Studio Code 설치

[Visual Studio Code 다운로드](https://code.visualstudio.com/download)에서 접속하면 Windows, Mac, Linux 버전을 다운로드 받을 수 있습니다. 해당 시리즈에서는 Windows 버전을 기준으로 설명합니다.

![Visual Studio Code 다운로드](/series/hello-dotnet/2/vscode-3-download-vscode.png)

다운로드가 완료되면, 다운로드한 파일을 실행합니다. 실행하면 Visual Studio Code 설치 프로그램이 실행됩니다.

설치 과정을 모두 마무리하면 Visual Studio Code가 추가됩니다. Visual Studio Code를 실행하면 다음과 같은 화면이 표시됩니다.

![Visual Studio Code 실행](/series/hello-dotnet/2/vscode-4-first-run.png)

### 2.3 C# 확장 프로그램 설치

.NET 개발을 위한 확장 프로그램 설치를 위해 좌측 메뉴에서 `Extensions` 메뉴를 선택합니다. 이후 `C# DevKit`을 검색하여 설치합니다.

![Extensions 메뉴](/series/hello-dotnet/2/vscode-5-extensions.png)

설치 완료 후 `Explorer` 메뉴를 선택하면, `Create .NET Project` 메뉴가 추가된 것을 확인할 수 있습니다.

![Create .NET Project 메뉴](/series/hello-dotnet/2/vscode-6-create-project.png)

선택하면 추가적으로 필요한 프로그램 설정 작업이 수행된 뒤, 아래와 스크린샷과 같이 프로젝트 유형을 선택하는 화면이 표시됩니다.

![프로젝트 유형 선택](/series/hello-dotnet/2/vscode-7-select-project-type.png)

해당 화면까지 왔다면 설치는 모두 마무리 되었습니다.

다음 과정에선 Visual Studio 또는 Visual Studio Code를 사용하여 Hello World 프로그램을 만들어 보겠습니다.

## 참조

- [Visual Studio 다운로드](https://visualstudio.microsoft.com/ko/downloads/)
- [Visual Studio 설치](https://docs.microsoft.com/ko-kr/visualstudio/install/install-visual-studio?view=vs-2022)
- [Mac용 Visual Studio 무슨 일이 일어나고 있습니까?](https://learn.microsoft.com/ko-kr/visualstudio/mac/what-happened-to-vs-for-mac?view=vsmac-2022)