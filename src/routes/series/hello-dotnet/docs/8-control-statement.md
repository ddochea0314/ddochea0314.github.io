---
title: '8. 제어문'
description: '제어문(Control Statement)은 프로그램의 흐름을 제어하는 문장입니다.'
date: '2023-12-29 01:05:42'
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
    title: '7. 연산자',
    link: './7-operator'
}
next: {
    title: '9. 함수(Function)',
    link: './9-function'
}
---

제어문(Control Statement)은 프로그램의 흐름을 제어하는 문장입니다. 제어문은 조건문과 반복문으로 구분됩니다.

## 1. 조건문(Conditional Statement)

조건문은 조건식의 결과에 따라 프로그램의 흐름을 제어하는 문장입니다. 조건문에는 `if`, `switch` 문이 있습니다.

### 1.1. if 문

`if` 문은 조건식의 결과가 `true` 일 때, 특정 문장을 실행하는 문장입니다. `if` 문은 다음과 같은 형식으로 사용됩니다.

```csharp
if (조건식)
{
    // 조건식이 true 일 때, 실행될 문장
}
```

`if` 문은 조건식의 결과가 `true` 일 때, 중괄호(`{}`) 안에 있는 문장을 실행합니다. `if` 문은 조건식의 결과가 `false` 일 때, 중괄호(`{}`) 안에 있는 문장을 실행하지 않습니다.

```csharp
int a = 1;
int b = 2;

if (a > b)
{
    Console.WriteLine("a가 b보다 큽니다.");
}

if (a < b)
{
    Console.WriteLine("a가 b보다 작습니다.");
}
```

위 예제에서 `a` 변수의 값은 `1`이고, `b` 변수의 값은 `2`입니다. `a` 변수의 값이 `b` 변수의 값보다 작으므로, `a < b` 조건식의 결과는 `true`가 됩니다. 따라서 `a < b` 조건식이 `true` 이므로, `if` 문의 중괄호(`{}`) 안에 있는 `Console.WriteLine("a가 b보다 작습니다.");` 문장이 실행됩니다.

### 1.2. if ~ else 문

`if ~ else` 문은 조건식의 결과에 따라 실행할 문장을 선택하는 문장입니다. `if ~ else` 문은 다음과 같은 형식으로 사용됩니다.

```csharp
if (조건식)
{
    // 조건식이 true 일 때, 실행될 문장
}
else
{
    // 조건식이 false 일 때, 실행될 문장
}
```

`if ~ else` 문은 조건식의 결과가 `true` 일 때, `if` 문의 중괄호(`{}`) 안에 있는 문장을 실행합니다. `if ~ else` 문은 조건식의 결과가 `false` 일 때, `else` 문의 중괄호(`{}`) 안에 있는 문장을 실행합니다.

```csharp
int a = 1;
int b = 2;

if (a > b)
{
    Console.WriteLine("a가 b보다 큽니다.");
}
else
{
    Console.WriteLine("a가 b보다 작습니다.");
}
```

### 1.3. if ~ else if ~ else 문

`if ~ else if ~ else` 문은 여러 개의 조건식을 사용하여 실행할 문장을 선택하는 문장입니다. `if ~ else if ~ else` 문은 다음과 같은 형식으로 사용됩니다.

```csharp
if (조건식1)
{
    // 조건식1이 true 일 때, 실행될 문장
}
else if (조건식2)
{
    // 조건식2가 true 일 때, 실행될 문장
}
else
{
    // 조건식1과 조건식2가 모두 false 일 때, 실행될 문장
}
```

예시는 아래와 같습니다.

```csharp
int a = 1;
int b = 2;

if (a > b)
{
    Console.WriteLine("a가 b보다 큽니다.");
}
else if (a < b)
{
    Console.WriteLine("a가 b보다 작습니다.");
}
else
{
    Console.WriteLine("a와 b가 같습니다.");
}
```

조건식은 복합으로 작성할 수 있습니다. 

```csharp
int a = 1;
int b = 2;

if (a > b && a > 0)
{
    Console.WriteLine("a가 b보다 크고, a는 0보다 큽니다.");
}
else if (a < b || a > 0)
{
    Console.WriteLine("a가 b보다 작거나, a는 0보다 큽니다.");
}
else
{
    Console.WriteLine("a와 b가 같습니다.");
}
```

조건식에 작성된 연산자는 지난시간에 배웠던 연산의 우선순위에 따라 통상적으로 왼쪽부터 오른쪽으로 계산됩니다. 그리고 왼쪽 식에서 계산된 결과에 따라, 오른쪽 식의 계산을 수행하지 않을 수 있습니다.
아래 예시는 `a` 변수의 값이 `b` 변수의 값보다 작고, `a` 변수의 값을 `0`으로 나누었을 때, `if` 문의 조건식이 `true`가 되는지 확인하는 예시입니다. 지난 회차인 [7. 연산자](./7-operator)에서 산술연산 나누기(/) 사용시 0으로 나누면 `DivideByZeroException` 예외가 발생한다고 배웠습니다. 그리고 아래 예시에선 a / 0 이란 산술식이 조건식에 사용되었습니다.

```csharp
int a = 1;
int b = 0;

if (a < b && a / 0 == 0)
{
    Console.WriteLine("a가 b보다 작고, a를 0으로 나눈 값은 " + a / 0 + "입니다.");
}
else {
    Console.WriteLine("a가 b보다 크거나 같습니다.");
}
```

해당 코드는 오류를 유발할까요? 아래 스크린샷은 해당 코드를 실행한 결과입니다.

![if문 오른쪽 식 a/0 실행 결과](/series/hello-dotnet/8/1-if-divide-0.png)

`a < b` 조건이 이미 `false`이기 때문에, `a / 0 == 0` 조건식은 실행되지 않습니다. 따라서 `DivideByZeroException` 예외가 발생하지 않습니다.

> 종종 코딩 테스트에서 다음과 같은 코드를 내고 오류 유발 여부와 그 이유를 묻는 문제가 출제됩니다. 이처럼 우선순위를 잘 이해한다면 해당 코드가 왜 오류가 나지 않고 정상실행되는지 정확하게 답변하실 수 있으실 것 입니다.

### 1.4. switch 문

`switch` 문은 여러 개의 조건식을 사용하여 실행할 문장을 선택하는 문장입니다. `switch` 문은 다음과 같은 형식으로 사용됩니다.

```csharp
switch (변수)
{
    case 값1:
        // 변수의 값이 값1 일 때, 실행될 문장
        break;
    case 값2:
        // 변수의 값이 값2 일 때, 실행될 문장
        break;
    default:
        // 변수의 값이 값1과 값2가 아닐 때, 실행될 문장
        break;
}
```

`switch` 문은 여러 개의 조건식을 사용할 수 있습니다. `switch` 문은 변수의 값과 `case` 문의 값이 일치하는지 검사합니다. `case` 문의 값과 일치하는 `case` 문이 있으면, 해당 `case` 문의 중괄호(`{}`) 안에 있는 문장을 실행합니다. `case` 문의 값과 일치하는 `case` 문이 없으면, `default` 문의 중괄호(`{}`) 안에 있는 문장을 실행합니다.

```csharp
int a = 1;

switch (a)
{
    case 1:
        Console.WriteLine("a는 1입니다.");
        break;
    case 2:
        Console.WriteLine("a는 2입니다.");
        break;
    default:
        Console.WriteLine("a는 1과 2가 아닙니다.");
        break;
}
```

C# 8.0부터 switch 식이라는 개념이 추가되었습니다. switch 식은 다음과 같은 형식으로 사용됩니다. swtich case의 결과에 따라 대입할 값을 선택할 때 사용합니다. 

```csharp
int a = 1;

string message = a switch
{
    1 => "a는 1입니다.",
    2 => "a는 2입니다.",
    _ => "a는 1과 2가 아닙니다."
};

Console.WriteLine(message);
```

## 2. 반복문(Iteration Statement)

반복문은 특정 문장을 반복적으로 실행하는 문장입니다. 반복문에는 `while`, `do ~ while`, `for` 문이 있습니다.

### 2.1. while 문

`while` 문은 조건식의 결과가 `true` 일 때, 특정 문장을 반복적으로 실행하는 문장입니다. `while` 문은 다음과 같은 형식으로 사용됩니다.

```csharp
while (조건식)
{
    // 조건식이 true 일 때, 실행될 문장
}
```

`while` 문은 조건식의 결과가 `true` 일 때, 중괄호(`{}`) 안에 있는 문장을 반복적으로 실행합니다. `while` 문은 조건식의 결과가 `false` 일 때, 중괄호(`{}`) 안에 있는 문장을 실행하지 않습니다.

```csharp
int i = 0;

while (i < 10)
{
    Console.WriteLine(i);
    i++;
}
```

![while문 실행 결과](/series/hello-dotnet/8/2-while.png)

while 문의 조건이 항상 `true` 이면 식이 끝나지 않습니다. 이를 무한루프라고 합니다. 아래 예제는 `exit` 문자열을 입력받을 때까지 무한루프를 실행하는 예제입니다.

```csharp
string input = "";

while (input != "exit")
{
    Console.WriteLine("exit를 입력하면 프로그램이 종료됩니다.");
    input = Console.ReadLine();
    Console.WriteLine("입력한 문자열은 " + input + "입니다.");
}

```

![while문 무한루프 실행 결과](/series/hello-dotnet/8/3-while-infinite-loop.png)

### 2.2. do ~ while 문

`do ~ while` 문은 조건식의 결과가 `true` 일 때, 특정 문장을 반복적으로 실행하는 문장입니다. `do ~ while` 문은 다음과 같은 형식으로 사용됩니다.

```csharpdo
{
    // 조건식이 true 일 때, 실행될 문장
}
while (조건식);
```

`do ~ while` 문은 조건식의 결과가 `true` 일 때, 중괄호(`{}`) 안에 있는 문장을 반복적으로 실행합니다. `do ~ while` 문은 조건식의 결과가 `false` 일 때, 중괄호(`{}`) 안에 있는 문장을 실행하지 않습니다.

```csharp
int i = 0;

do
{
    Console.WriteLine(i);
    i++;
}
while (i < 10);
```

while 문과 달리, do ~ while 문은 조건식의 결과가 처음부터 `false` 여도, 중괄호(`{}`) 안에 있는 문장을 한 번 실행하게 됩니다.

```csharp
int i = 0;

do
{
    Console.WriteLine(i);
    i++;
}
while (false);

```

### 2.3. for 문

`for` 문은 조건식의 결과가 `true` 일 때, 특정 문장을 반복적으로 실행하는 문장입니다. `for` 문은 다음과 같은 형식으로 사용됩니다.

```csharp
for (초기식; 조건식; 반복식)
{
    // 조건식이 true 일 때, 실행될 문장
}
```

아래 예제는 while 문으로 1 ~ 10 까지 출력했던 예제를 for 문으로 변경한 예제입니다.

```csharp
for (int i = 0; i < 10; i++)
{
    Console.WriteLine(i);
}
```

for 문은 주로 배열과 같은 [컬렉션(Collection)](https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/concepts/collections)을 순회할 때 사용됩니다. 아래 예제는 배열의 요소를 반복문을 통해 순회하며, 각 요소의 값을 출력합니다.

```csharp
int[] array = new int[10] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

for (int i = 0; i < array.Length; i++)
{
    Console.WriteLine(array[i]);
}
```

List를 통한 동적배열도 사용할 수 있습니다.

```csharp
List<int> array = new List<int>();

array.AddRange(new int[10] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 });

for (int i = 0; i < array.Count; i++)
{
    Console.WriteLine(array[i]);
}
```

for 문 또한 무한 루프를 만들 수 있습니다. 아래 예제는 exit 문자열을 입력받을 때까지 무한루프를 실행하는 예제입니다.

```csharp
for (;;)
{
    Console.WriteLine("exit를 입력하면 프로그램이 종료됩니다.");
    string input = Console.ReadLine();
    Console.WriteLine("입력한 문자열은 " + input + "입니다.");
    if (input == "exit")
    {
        break;
    }
}
```

### 2.4. foreach 문

`foreach` 문은 컬렉션의 요소를 순회하는 문장입니다. `foreach` 문은 다음과 같은 형식으로 사용됩니다.

```csharp
foreach (변수 in 컬렉션)
{
    // 컬렉션의 요소를 순회하면서 실행될 문장
}
```

for 문에서 다뤘던 배열의 요소를 순회하는 예제를 foreach 문으로 변경한 예제입니다.

```csharp
int[] array = new int[10] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

foreach (int item in array)
{
    Console.WriteLine(item);
}
```

List를 통한 동적배열도 사용할 수 있습니다.

```csharp
List<int> array = new List<int>();

array.AddRange(new int[10] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 });

foreach (int item in array)
{
    Console.WriteLine(item);
}
```

foreach 문을 실행하는 동안, 컬렉션의 요소를 변경할 수 없습니다. 아래 예제는 foreach 문을 실행하는 동안, 컬렉션의 요소를 변경하려고 시도하는 예제입니다. 아래 코드는 오류를 유발합니다.

```csharp
List<int> array = new List<int>();

array.AddRange(new int[10] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 });

foreach (int item in array)
{
    Console.WriteLine(item);
    array.Remove(item);
}
```

![foreach 문 오류](/series/hello-dotnet/8/4-foreach-error.png)

## 3. break 문과 continue 문

반복문을 실행하는 동안, 특정 문장을 실행하지 않거나, 반복문을 종료할 때 사용하는 문장입니다. `break` 문과 `continue` 문의 차이점을 아래 코드로 확인해보세요.

```csharp
for (int i = 0; i < 10; i++)
{
    if (i == 5)
    {
        // i가 5일 때, break 문을 실행하여 for 루프를 종료합니다.
        break;
    }
    Console.WriteLine(i);
}
```

![break 문 실행 결과](/series/hello-dotnet/8/5-break.png)

```csharp
for (int i = 0; i < 10; i++)
{
    if (i == 5)
    {
        // i가 5일 때, continue 문을 실행하여 Console.WriteLine(i)를 실행하지 않고 다음 반복을 실행합니다.
        continue;
    }
    Console.WriteLine(i);
}
```

![continue 문 실행 결과](/series/hello-dotnet/8/6-continue.png)

## 4. goto 문

`goto` 문은 프로그램의 흐름을 특정 위치로 이동시키는 문장입니다. 아래 예제는 for 문 없이 goto와 if 문을 사용하여 1 ~ 10 까지 출력하는 예제입니다.

```csharp
int i = 0;

start:
Console.WriteLine(i);
i++;

if (i < 10)
{
    goto start;
}
```

과거 `goto` 문은 위에서 아래로 순차적으로 실행되는 프로그램의 흐름을 바꾸기 때문에 프로그램의 흐름을 이해하기 어렵게 만들 수 있다고 하여 종종 비판의 대상이 되고 있습니다.

## 참조

- [C# 조건문](https://learn.microsoft.com/ko-kr/dotnet/csharp/language-reference/statements/selection-statements)
- [C# switch 식](https://docs.microsoft.com/ko-kr/dotnet/csharp/language-reference/operators/switch-expression)
- [C# 반복문](https://learn.microsoft.com/ko-kr/dotnet/csharp/language-reference/statements/iteration-statements)