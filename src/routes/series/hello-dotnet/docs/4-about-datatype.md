---
title: '4. C# 기본 자료형(Data Type)'
description: 'C# 에는 숫자, 문자열, 논리값 등의 기본적인 데이터 타입이 있습니다. 이번 단계에서는 C#의 기본 데이터 타입에 대해 알아봅니다.'
date: '2023-12-25 03:45:00'
tags: ['dotnet', 'csharp', 'hello-dotnet']
prev: {
    title: '3. Hello World 프로그램 만들기',
    link: './3-create-helloworld'
}
next: {
    title: '5. 배열(Array)',
    link: './5-about-array'
}
---

C# 에는 숫자, 문자열, 논리값 등의 기본적인 데이터 타입이 있습니다. 이번 단계에서는 C#의 기본 데이터 타입에 대해 알아봅니다.

## 1. 숫자형 데이터 타입

C# 에는 정수형과 실수형 데이터 타입이 있습니다.

### 1.1. 정수형 데이터 타입

정수형 데이터 타입은 `sbyte`, `byte`, `short`, `ushort`, `int`, `uint`, `long`, `ulong` 8가지가 있습니다. 각각의 데이터 타입은 다음과 같은 범위의 값을 저장할 수 있습니다.

| 데이터 타입 | 범위 | 크기(bit) |
|-------------|------|
| `sbyte`     | -128 ~ 127 | 8 |
| `byte`      | 0 ~ 255 | 8 |
| `short`     | -32,768 ~ 32,767 | 16 |
| `ushort`    | 0 ~ 65,535 | 16 |
| `int`       | -2,147,483,648 ~ 2,147,483,647 | 32 |
| `uint`      | 0 ~ 4,294,967,295 | 32 |
| `long`      | -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807 | 64 |
| `ulong`     | 0 ~ 18,446,744,073,709,551,615 | 64 |

크기라고 적힌 bit가 생소하실 것 입니다. bit는 0 또는 1의 값을 저장할 수 있는 메모리 공간의 최소 단위입니다. 8bit는 1byte를 의미합니다.

사람이 사는 세상에서는 일반적으로 0 ~ 10 까지 숫자 범위를 사용하는 10진수를 사용하지만, 컴퓨터의 세계에선 0과 1만을 사용하는 2진수를 사용합니다. 컴퓨터의 CPU는 클럭이라는 소자를 통해 1초에 몇 번의 연산을 수행할 수 있는지를 측정합니다. 1 Hz는 초당 1번 디지털 신호 생성을 의미합니다. 컴퓨터의 성능을 측정 지표 중 GHz 라는 단위를 보셨을 것입니다. 이것이 디지털 생성 신호를 표기하는 단위이며, 3.3GHz는 초당 33억번의 신호를 생성한다는 뜻을 의미합니다.

신호가 2개면, 00, 01, 10, 11 총 4가지로 표현할 수 있습니다.

| 2진수 | 10진수 |
| --- | --- |
| 00 | 0 |
| 01 | 1 |
| 10 | 2 |
| 11 | 3 |

신호가 3개라면 000, 001, 010, 011, 100, 101, 110, 111 총 8가지로 표현할 수 있습니다.

| 2진수 | 10진수 |
| --- | --- |
| 000 | 0 |
| 001 | 1 |
| 010 | 2 |
| 011 | 3 |
| 100 | 4 |
| 101 | 5 |
| 110 | 6 |
| 111 | 7 |

이처럼 신호의 조합을 통해 우리 세상에서 흔히 사용하는 숫자를 표현하게 됩니다. 여기서 1개의 신호를 bit 라고 하고, 8개를 묶어 1 byte 라고 부르게 됩니다. 예를 들어, `byte` 자료형은 8bit 이므로, 2<sup>8</sup> = 256개의 조합으로 표현할 수 있습니다. 0 ~ 255 까지의 숫자를 표현할 수 있습니다. `uint` 자료형은 32bit 이므로, 2<sup>32</sup> = 4,294,967,296개의 조합으로 표현할 수 있습니다. 0 ~ 4,294,967,295 까지의 숫자를 표현할 수 있습니다.

> bit의 예시를 컴퓨터 신호를 든 것은 아주 단적인 부분이며 실제로는 연산처리, 제어등 다양한 작업이 변환되어 처리됩니다.

범위 값을 넘어서서 저장하려고 하면 오버플로우(Overflow)가 발생합니다. 오버플로우가 발생하면, 최소값부터 다시 시작하여 예상치 못한 결과값으로 출력됩니다.

예시를 위해 새로운 프로젝트를 생성하거나, 지난 시간에 사용했던 `HelloWorld` 프로젝트를 열어서 다음 코드를 입력합니다.

```csharp
int i = 2147483647; // int의 최대값
i = i + 1; // 오버플로우 발생
Console.WriteLine(i);
```

해당 코드로 변경 후 `F5` 키를 누르거나, 상단의 디버그 시작 메뉴를 선택하여 프로그램을 실행하면, 아래와 같은 결과가 출력됩니다.

![오버플로우 발생](/series/hello-dotnet/4/1-example-overflow.png)

2147483647은 `int`의 최대값입니다. 이 값에서 +1 을 하면 2147483648을 예상할 수 있지만 실제 출력되는 값은 -2147483648 입니다. 이것을 `오버플로우(Overflow)`라고 합니다.


### 1.2. 실수형 데이터 타입

실수형 데이터 타입은 `float`, `double`, `decimal` 3가지가 있습니다. 각각의 데이터 타입은 다음과 같은 범위의 값을 저장할 수 있습니다.

| 데이터 타입 | 범위 | 크기(bit) |
|-------------|------|
| `float`     | ±1.5 x 10<sup>-45</sup> ~ ±3.4 x 10<sup>38</sup> | 32 |
| `double`    | ±5.0 x 10<sup>-324</sup> ~ ±1.7 x 10<sup>308</sup> | 64 |
| `decimal`   | ±1.0 x 10<sup>-28</sup> ~ ±7.9 x 10<sup>28</sup> | 128 |

부동소수점 방식으로 실수를 저장하기 때문에, 정수형 데이터 타입과는 다르게 정확한 값을 저장할 수 없습니다.
일반적으로 통화(money)와 같은 정확한 값을 저장해야 하는 경우에는 `decimal` 데이터 타입을 사용해야 합니다.

실수형 데이터 타입에 대한 값의 대입은 정수형과 달리 특별한 접미사가 붙습니다.

```csharp
float f = 1.0f;
double d = 1.0d;
decimal m = 1.0m;

float f = 1.0F;
double d = 1.0D;
decimal m = 1.0M;
```

대소문자를 구분하지 않지만, 접미사를 붙이지 않으면 기본적으로 `double`로 인식하기 때문에, `float` 또는 `decimal`를 명시하기 위해선 접미사를 붙이는 것을 권장합니다.

## 2. 문자열 데이터 타입

문자열 데이터 타입은 `string`이 있습니다. `string`은 문자열을 저장할 수 있는 데이터 타입입니다. 문자열은 큰따옴표(`"`)로 묶어서 표현합니다.

```csharp
string name = "홍길동";
```

문자열은 다음과 같은 특수문자를 사용할 수 있습니다.

- \+ : 문자열을 연결합니다.

```csharp
string firstName = "홍";
string lastName = "길동";
string name = firstName + lastName; // "홍길동"
Console.WriteLine(name);
```

문자열 뿐만이 아니라 숫자형 데이터 타입도 `+` 연산자를 사용하여 연결할 수 있습니다.

```csharp
int age = 20;
string message = "홍길동의 나이는 " + age + "살 입니다."; // "홍길동의 나이는 20살 입니다."
Console.WriteLine(message);
```

- $ : 문자열 보간이라 부릅니다. 문자열 내 변수의 값을 출력시킬 수 있습니다. 문자열 보간은 문자열 앞에 `$` 기호를 붙여서 사용합니다. 문자열 내 변수의 값을 출력시키려면 변수 앞에 `{}`를 붙여서 사용합니다.

```csharp
string name = "홍길동";
string message = $"안녕하세요. {name}입니다."; // "안녕하세요. 홍길동입니다."
```

문자열 보간은 C# 6.0 이상부터 사용할 수 있습니다. 이전 버전에서는 문자열 보간 대신 `string.Format()` 메서드를 사용하거나, 앞서 예제와 같이 `+` 연산자를 사용하여 문자열을 연결했었습니다.

```csharp
string name = "홍길동";
string message = string.Format("안녕하세요. {0}입니다.", name); // "안녕하세요. 홍길동입니다."
```

- @ : 문자열 내에 이스케이프 문자를 사용하지 않습니다. 이스케이프 문자란 `개행(\n)`, `탭(\t)` 등의 특수문자를 의미합니다.

아래 예제 두 예제는 모두 동일한 결과를 출력합니다.

```csharp
string message = "안녕하세요.\n홍길동입니다."; // "안녕하세요. "홍길동"입니다."
Console.WriteLine(message);
```

```csharp
string message = @"안녕하세요.
홍길동입니다."; // "안녕하세요.
                // 홍길동입니다."
Console.WriteLine(message);
```

- """ : 원시문자열 리터럴이라고 부릅니다. C#11에서 도입되었습니다. 문자열 내에 큰따옴표를 사용할 수 있으며, xml, json 등의 문자열 표현에 최적화되어있습니다.

```csharp
string xml = """
        <element attr="content">
            <body>
            홍길동
            </body>
        </element>
        """;
string json = """
    {
        "name":"홍길동",
        "age":20,
    }
    """;
```

특수문자는 조합하여 사용 가능합니다. 아래 예제는 문자열보간(`$`)과 원시문자열 리터럴(`"""`)을 조합하여 사용한 예제입니다.
    
```csharp
string name = "홍길동";
string json = $"""
    {
        "name":"{name}",
        "age":20,
    }
    """;
```

## 3. 논리값 데이터 타입

논리값 데이터 타입은 `bool`이 있습니다. `bool`은 `true` 또는 `false` 값을 저장할 수 있는 데이터 타입입니다.

```csharp
bool isTrue = true;
bool isFalse = false;
```

## 4. 문자 데이터 타입

문자 데이터 타입은 `char`이 있습니다. `char`은 문자 하나를 저장할 수 있는 데이터 타입입니다. 문자는 작은따옴표(`'`)로 묶어서 표현합니다.

```csharp
char c = 'A';
```

## 5. 데이터 타입의 크기

C#의 데이터 타입은 크기가 다릅니다. 크기가 큰 데이터 타입은 작은 데이터 타입보다 더 큰 값을 저장할 수 있습니다. 크기가 큰 데이터 타입은 작은 데이터 타입으로 변환할 수 있습니다. 크기가 작은 데이터 타입은 크기가 큰 데이터 타입으로 변환할 수 없습니다.

```csharp
int i = 10;
long l = i; // int를 long으로 변환할 수 있습니다.

long l = 10;
int i = l; // long을 int로 변환할 수 없습니다.
```

## 6. 데이터 타입의 변환

데이터 타입은 서로 변환할 수 있습니다. 데이터 타입을 변환할 때는 `(변환할 데이터 타입)`을 사용합니다. 데이터 타입을 변환할 때는 데이터의 손실이 발생할 수 있습니다.

```csharp
int i = 10;
long l = (long)i; // int를 long으로 변환합니다.

long l = 10;
int i = (int)l; // long을 int로 변환합니다.
```

문자열과 같이 숫자가 아닌 데이터 타입은 각 숫자타입별 `Parse` 메서드를 사용하여 숫자로 변환할 수 있습니다.

```csharp
string s = "10";
int i = int.Parse(s); // string을 int로 변환합니다.

```

변환할 문자열이 "abc"와 같은 숫자가 아닌 문자열일 경우, 오류가 발생할 수 있습니다. 이런 경우 `TryParse` 메서드를 사용하여 변환할 수 있는지 확인할 수 있습니다.
아래 예제는 `TryParse` 메서드를 사용하여 변환가능여부를 result 변수에 대입합니다. 변환 가능하다면 int i 변수에 변환된 값을 저장하고, 변환이 불가능하다면 int i 변수에 0을 저장합니다.

`out` 키워드가 생소할 수 있는데 별도의 설명이 필요하므로 지금은 TryParse 함수 내부에서 변환 가능한 변수를 반환하는 또 다른 방법 정도로만 이해하시면 됩니다.

```csharp
string s = "abc";
int i;
bool result = int.TryParse(s, out i); // string을 int로 변환합니다.

```

## 7. 데이터 타입의 기본값

C#의 데이터 타입은 기본값을 가지고 있습니다. 기본값은 데이터 타입을 선언하고 값을 저장하지 않았을 때, 데이터 타입이 가지고 있는 값입니다.

```csharp
int i; // int의 기본값은 0입니다.
long l; // long의 기본값은 0입니다.
float f; // float의 기본값은 0입니다.
double d; // double의 기본값은 0입니다.
decimal m; // decimal의 기본값은 0입니다.
string s; // string의 기본값은 null입니다.
bool b; // bool의 기본값은 false입니다.
char c; // char의 기본값은 \0입니다.

```

일반적으로 값이 선언되지 않은 상태에서 사용시 `Use of unassigned local variable 'i'` 메시지와 함께 Error로 경고하게 되므로 기본값에 중요한 의미가 없다 생각할 수도 있습니다.
그러나 Database 또는 WebApi와 같이, 외부 시스템과의 연동시 데이터 구조에 따라 선언된 값이 들어오지 않은 채 값을 받을 수도 있습니다. 이런 경우 상단에 정의된 기본값에 따라 값이 매핑(Mapping)되어 처리될 수 있습니다.

관련 내용은 좀 더 심화된 내용이므로, 이번 시리즈에서는 다루지 않습니다.

## 참조

- [C# 데이터 형식](https://docs.microsoft.com/ko-kr/dotnet/csharp/language-reference/builtin-types/built-in-types)
- [문자열 보간](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated)