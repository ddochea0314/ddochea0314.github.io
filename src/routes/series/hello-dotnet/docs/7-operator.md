---
title: '7. 연산자'
description: '연산자(Operator)란 프로그래밍 언어에서 특정한 연산을 수행하기 위해 사용되는 기호입니다.'
date: '2023-12-28 11:00:22'
tags: ['dotnet', 'csharp', 'hello-dotnet']
prev: {
    title: '6. 값 형식과 참조 형식의 차이점',
    link: './6-value-type-and-reference-type'
}
next: {
    title: '8. 제어문',
    link: './8-control-statement'
}
---

연산자(Operator)란 프로그래밍 언어에서 특정한 연산을 수행하기 위해 사용되는 기호입니다. 연산자는 피연산자(Operand)라는 특정한 값들을 대상으로 연산을 수행합니다. 예를 들어, `1 + 2`라는 연산식에서 `+`는 연산자이고, `1`과 `2`는 피연산자입니다.

## 1. 대입 연산자(Assignment Operator)

대입 연산자는 피연산자의 값을 연산자의 오른쪽에 있는 피연산자의 값으로 대입합니다.

| 연산자 | 설명 |
| --- | --- |
| = | 대입 연산자 |

지난 회차에서 여러차례 다루었듯, 변수 선언 시 값을 하거나, 객체를 생성할 때  대입 연산자를 사용합니다.

```csharp
int a = 1; // a = 1
int b = 2; // b = 2
int c = 3; // c = 3

Person person = new Person(); // 객체 생성 후 `person` 변수(메모리 공간)에 대입
```

## 2. 산술 연산자(Arithmetic Operator)

산술 연산자는 사칙연산을 수행하는 연산자입니다.

| 연산자 | 설명 |
| --- | --- |
| + | 덧셈 연산자 |
| - | 뺄셈 연산자 |
| * | 곱셈 연산자 |
| / | 나눗셈 연산자 |
| % | 나머지 연산자 |

```csharp
int a = 1 + 2; // a = 3
int b = 1 - 2; // b = -1
int c = 1 * 2; // c = 2
int d = 1 / 2; // d = 0
int e = 1 % 2; // e = 1
```

초등학교 수학시간에 배우는 사칙연산과 동일하므로 이해하는데 어렵진 않을 것 입니다. 다만 자료형에 따라 정확한 연산결과가 아닌 값이 나올 수 있습니다. 위 예제에서 `d` 변수의 값은 `0`이 됩니다. 이는 정수끼리 나눗셈을 하면, 소수점 이하의 값은 버려지기 때문입니다. 만약 소수점 이하의 값을 계산하고 싶다면, 피연산자 중 하나를 실수로 형변환 해주어야 합니다.

```csharp
double d = 1 / 2.0; // d = 0.5
```

또한 0으로 나누는 연산은 불가능합니다. 0으로 나누는 연산을 수행하면, `DivideByZeroException`이라는 명칭의 오류(Exception)가 발생합니다.

```csharp
int divide = 0;
int a = 1 / divide; // DivideByZeroException 발생
```

대입연산자와 산술연산자를 함께 사용하면, 변수의 값을 증가시키거나 감소시킬 수 있습니다.

```csharp
int a = 1;
a += 2; // a = 3
a -= 2; // a = 1
a *= 10; // a = 10
a /= 2; // a = 5
```

## 3. 증감 연산자(Increment and Decrement Operator)

증감 연산자는 피연산자의 값을 1 증가시키거나 감소시킵니다.

| 연산자 | 설명 |
| --- | --- |
| ++ | 증가 연산자 |
| -- | 감소 연산자 |

```csharp
int a = 1;
a++;
Console.WriteLine(a); // 2
```

증감 연산자는 피연산자의 앞 또는 뒤에 위치할 수 있습니다. 앞에 오는 것을 전위(++n) 증감 연산자, 뒤에 오는 것을 후위(n++) 증감 연산자라고 합니다.

```csharp
int a = 1;
++a;
Console.WriteLine(a); // 2
```

언뜻 보면 전위 증감 연산자의 차이가 없어 보이지만, 전위 증감 연산자는 증감 연산을 수행한 후, 피연산자의 값을 반환하고, 후위 증감 연산자는 피연산자의 값을 반환한 후, 증감 연산을 수행합니다. 따라서 아래와 같은 소스코드는 서로 다른 결과를 출력합니다.

```csharp
int a = 1;
int b = ++a; // b = 2, a = 2
Console.WriteLine(b); // 2
Console.WriteLine(a); // 2
```

```csharp
int a = 1;
int b = a++; // b = 1, a = 2
Console.WriteLine(b); // 1
Console.WriteLine(a); // 2
```

## 4. 관계 연산자(Relational Operator)

관계 연산자는 피연산자의 크기를 비교하는 연산자입니다. 관계 연산자는 두 피연산자의 크기를 비교한 후, `true` 또는 `false`를 반환합니다.

| 연산자 | 설명 |
| --- | --- |
| == | 같음(Equals) |
| != | 같지 않음(Not Equals) |
| &amp;gt | 큼(Greater Than) |
| &amp;lt | 작음(Less Than) |
| &amp;gt= | 크거나 같음(Greater Than or Equals) |
| &amp;lt= | 작거나 같음(Less Than or Equals) |

```csharp
int a = 1;
int b = 2;

Console.WriteLine(a == b); // false
Console.WriteLine(a != b); // true

Console.WriteLine(a > b); // false
Console.WriteLine(a < b); // true

int c = 1;
int d = 1;

Console.WriteLine(c >= d); // true
Console.WriteLine(c <= d); // true
```

## 5. 논리 연산자(Logical Operator)

논리 연산자는 논리값을 연산하는 연산자입니다. 논리 연산자는 두 피연산자의 논리값을 연산한 후, `true` 또는 `false`를 반환합니다.

| 연산자 | 설명 |
| --- | --- |
| && | 논리곱(AND) |
| \|\| | 논리합(OR) |
| ! | 논리부정(NOT) |

```csharp
bool a = true;
bool b = false;

Console.WriteLine(a && b); // false
Console.WriteLine(a \|\| b); // true
Console.WriteLine(!a); // false

```

## 6. 조건 연산자(Conditional Operator)

조건 연산자는 조건식의 결과에 따라 반환할 값을 결정하는 연산자입니다. 조건 연산자는 `?`와 `:`로 구성되어 있습니다. 2개의 계산식과 1개의 조건식으로 구성되어 삼항연산자라고도 불립니다.

(조건) ? (참일 경우) : (거짓일 경우)

주어진 조건이 참이면, 참일 경우의 값이 반환되고, 거짓이면 거짓일 경우의 값이 반환됩니다. 아럐 예제는 a, b 변수 중 큰 값을 반환하는 조건 연산자입니다.

```csharp
int a = 1;
int b = 2;

int max = a > b ? a : b; // a가 b보다 크면 a를 반환하고, 아니면 b를 반환합니다. a 는 1, b는 2이므로 조건이 거짓이 되어 : 뒤의 b가 반환되어 max에 대입됩니다.
Console.WriteLine(max);

```

## 7. 비트 연산자(Bitwise Operator)

비트 연산자는 비트(bit)를 연산하는 연산자입니다. 예를 들어, 숫자 3의 2진수인 `0011`에서, 왼쪽으로 1비트 시프트하면 `0110` 이 되고, 2비트 시프트하면 `1100`이 됩니다.

| 연산자 | 설명 |
| --- | --- |
| & | 비트곱(AND) |
| \| | 비트합(OR) |
| ^ | 비트배타적합(XOR) |
| ~ | 비트부정(NOT) |
| &amp;lt&amp;lt | 왼쪽 시프트(Left Shift) |
| &amp;gt&amp;gt | 오른쪽 시프트(Right Shift) |

아래 예제는 비트 연산 예제입니다. 연산 이해를 돕기 위해, `int` 형식의 변수를 2진수로 표현했습니다.

```csharp
int a = 0b0001; // 1의 2진수 표현
int b = 0b0011; // 3의 2진수 표현

Console.WriteLine(a & b); // 0
Console.WriteLine(a \| b); // 3
Console.WriteLine(a ^ b); // 3
Console.WriteLine(~a); // -2
Console.WriteLine(a << 1); // 2
Console.WriteLine(a >> 1); // 0

```

> C#에선 10진수 외 여러 진법을 사용할 수 있습니다. 2진수는 `0b`를, 8진수는 `0`을, 16진수는 `0x`를 접두사로 사용합니다.

## 8. 연산자 우선순위

일반적으로 연산은 왼쪽에서부터 오른쪽으로 진행됩니다. 하지만 식 내부에 여러개의 연산자 조합 중 우선순위가 높은 항목이 존재한다면 해당 연산자를 먼저 수행됩니다.
예를 들어, 사칙연산에서 `1 + 10 * 2` 계산 결과는 얼마일까요? 왼쪽부터 처리하니 1 + 10 = 11 을 계산한 후, 11 * 2 = 22를 수행하게 될까요? 순간 착각할 순 있어도 곱셈부터 먼저 해야한다는건 기억하실 것 입니다.

```csharp
int result = 1 + 10 * 2; // 21
Console.WriteLine(result);

```

만약 + 연산을 우선처리하고 싶다면 어떻게 해야할까요? 실생활에서 다음과 같은 식으로 표현할 수 있을 것 입니다.

(1 + 10) * 2

프로그래밍 언어에서도 마찬가지입니다. 괄호를 사용하여 연산자의 우선순위를 조절할 수 있습니다.

```csharp
int result = (1 + 10) * 2; // 22
Console.WriteLine(result);

```

지금까지 소개한 연산자들도 사칙연산처럼 각 연산자마다 우선순위가 존재합니다. 아래 표는 C#에서 사용되는 연산자의 우선순위를 나타낸 표입니다.

| 우선순위 | 연산자 | 설명 |
| --- | --- | --- |
| 1 | () | 괄호 |
| 2 | ! | 논리부정 |
| 3 | \*, /, % | 곱셈, 나눗셈, 나머지 |
| 4 | +, - | 덧셈, 뺄셈 |
| 5 | &amp;lt&amp;lt, &amp;gt&amp;gt | 시프트 |
| 6 | &amp | 비트곱 |
| 7 | ^ | 비트배타적합 |
| 8 | \| | 비트합 |
| 9 | ==, != | 같음, 같지 않음 |
| 10 | &amp&amp | 논리곱 |
| 11 | \|\| | 논리합 |
| 12 | ?: | 조건 |
| 13 | =, +=, -=, \*=, /=, %=, &amp=, ^=, \|=, &amp;lt&amp;lt=, &amp;gt&amp;gt= | 대입 |

## 참조

- [C# 연산자 - Microsoft Docs](https://docs.microsoft.com/ko-kr/dotnet/csharp/language-reference/operators/)