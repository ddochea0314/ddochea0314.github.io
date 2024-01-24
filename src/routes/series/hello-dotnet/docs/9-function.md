---
title: '9. 함수(Function)'
description: '함수(Function)는 프로그램의 기능을 모듈화하는 문장입니다. 특정 기능을 수행하는 코드를 정해진 형식으로 묶어, 필요시 반복 호출을 통해 코드의 재사용성을 향상시킵니다.'
date: '2023-12-29 02:45:50'
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
    title: '8. 제어문',
    link: './8-control-statement'
}
next: {
    title: '10. 클래스',
    link: './10-class'
}
---


어떤 값을 입력받을 때 마다, 같은 코드를 반복해서 작성하는 것은 비효율적입니다. 이러한 경우, 입력받은 값을 출력하는 기능을 수행하는 함수를 만들어서 사용할 수 있습니다. 사실 지금까지 `함수`라는 명칭을 사용하지 않았을 뿐, 이미 함수를 사용해왔습니다. `WriteLine()` 또한 함수이며 입력받은 값을 콘솔 화면에 출력하기 위한 기능을 수행합니다.

## 함수의 구성요소

> 함수(Function)는 `메소드(Method)`라는 명칭으로도 자주 언급됩니다. 둘 다 동일한 의미로 사용되므로 문서에서 혼용되어 사용해도 헷갈리지 않게 유의하시기 바랍니다.

함수는 프로그램의 기능을 모듈화하는 문장입니다. 함수는 특정 기능을 수행하는 코드의 반복작성을 줄여, 코드의 재사용성을 향상시킵니다. 함수는 다음과 같은 형식으로 사용됩니다.

```csharp
[접근제한자] [반환형식] [함수명]([매개변수])
{
    // 함수의 기능을 수행하는 코드
}
```

- 접근제한자 : 함수에 접근할 수 있는 범위를 지정합니다. 접근제한자는 `public`, `private`, `protected` 등이 있습니다. 접근 제한자에 대한 설명은 [클래스](./10-class)에서 다루도록 하겠습니다.

- 반환형식 : 함수의 실행 결과를 반환하는 데이터의 형식을 지정합니다. 반환형식은 `void`, `int`, `string` 등이 있습니다. 반환형식이 `void`인 경우, 함수는 실행 결과를 반환하지 않습니다.

- 함수명 : 함수의 이름을 지정합니다. 함수명은 `Main`, `Print`, `Sum` 등의 형식으로 지정합니다.

- 매개변수 : 함수의 실행에 필요한 데이터를 전달하는 변수입니다. 매개변수는 `int a`, `string b` 등의 형식으로 지정합니다. 매개변수가 필요하지 않은 경우, 매개변수를 생략할 수 있습니다.

## 재사용성의 필요성

함수의 재사용성을 이해하기 위해, 한 가지 예제를 작성해봅시다. 아래 내용은 피보나치 수열을 출력하는 함수 `Fibonacci()`를 작성하는 예제입니다. 

```csharp
int Fibonacci(int n)
{
    if (n == 1)
    {
        return 0;
    }
    else if (n == 2)
    {
        return 1;
    }
    else
    {
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}
Console.WriteLine(Fibonacci(10));
```

피보나치 수열은 다음과 같은 규칙으로 이루어진 수열입니다.

- 첫 번째 항의 값은 0입니다.
- 두 번째 항의 값은 1입니다.
- 세 번째 항부터는 바로 앞 두 항의 합으로 계산됩니다.

피보나치 수열의 처음 10개 항은 다음과 같습니다.

```
0, 1, 1, 2, 3, 5, 8, 13, 21, 34
```

![10개 항까지 수행시 최종 합산 결과](/series/hello-dotnet/9/1-fibonacci.png)

함수 없이 작성하면 아래와 같습니다.

```csharp
int n = 10;
int[] array = new int[n];
array[0] = 0;
array[1] = 1;
for (int i = 2; i < n; i++)
{
    array[i] = array[i - 1] + array[i - 2];
}
Console.WriteLine(array[n - 1]);
```

얼핏 보면 함수 없이 작성한 예시가 더 짧고 간결해 보입니다. 그러나 수열 10, 20, 30을 각각 출력해야하는 코드로 작성한다면 어떨까요? 함수를 사용한 예시는 아래와 같이 작성할 수 있습니다.

```csharp
int Fibonacci(int n)
{
    if (n == 1)
    {
        return 0;
    }
    else if (n == 2)
    {
        return 1;
    }
    else
    {
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}
Console.WriteLine(Fibonacci(10));
Console.WriteLine(Fibonacci(20));
Console.WriteLine(Fibonacci(30));
```

반면 함수를 사용하지 않은 예시는 아래와 같이 작성해야 합니다.

```csharp
int n = 10;
int[] array = new int[n];
array[0] = 0;
array[1] = 1;
for (int i = 2; i < n; i++)
{
    array[i] = array[i - 1] + array[i - 2];
}
Console.WriteLine(array[n - 1]);

n = 20;
array = new int[n];
array[0] = 0;
array[1] = 1;
for (int i = 2; i < n; i++)
{
    array[i] = array[i - 1] + array[i - 2];
}
Console.WriteLine(array[n - 1]);

n = 30;
array = new int[n];
array[0] = 0;
array[1] = 1;
for (int i = 2; i < n; i++)
{
    array[i] = array[i - 1] + array[i - 2];
}
Console.WriteLine(array[n - 1]);
```

함수를 사용하지 않은 예시는 코드의 중복이 발생합니다. 만약 실수로 n = 30 이후 부분에서 array를 다시 초기화해야 하는 코드를 누락한다면 프로그램은 오류를 유발하게 될 것 입니다.

함수는 숫자형, 문자형과 같은 단순 타입만을 파라메터로 받거나, 반환하지 않습니다. 객체 또한 파라메터로 받을 수 있으며, 객체를 반환할 수도 있습니다. 아래 예시는 `Person`이라는 클래스를 정의하고, `Person` 객체를 파라메터로 받아 Age 값을 +1 증가시키는 함수 `IncreaseAge()`를 작성하는 예시입니다.

```csharp
namespace FunctionExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person();
            person.age = 10;
            Console.WriteLine(person.age); // 10
            IncreaseAge(person);
            Console.WriteLine(person.age); // 11
        }

        static void IncreaseAge(Person person)
        {
            person.age++;
        }
    }
    class Person
    {
        public string name;
        public int age;
    }
}
```

객체는 참조형 타입이므로, 함수의 파라메터로 전달할 때, 객체의 메모리 주소가 전달됩니다. 따라서 함수 내부에서 객체의 값을 변경하고 별도로 return 처리하지 않아도, 함수 외부에서 변경된 값이 확인됩니다. 보다 자세한 사항은 [6. 값 형식과 참조 형식](./6-value-type-and-reference-type)를 참고하시기 바랍니다.

## 함수 오버로딩

함수는 파라메터의 개수와 타입을 다르게 하여 동일한 이름으로 여러 개를 정의할 수 있습니다. 이를 `함수 오버로딩`이라고 합니다. 아래 함수는 `Sum()`이라는 이름으로 정의되었지만, 파라메터의 개수와 타입에 따라 다른 함수로 인식됩니다.

```csharp
namespace FunctionExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Sum(1, 2)); // 3
            Console.WriteLine(Sum(1, 2, 3)); // 6
            Console.WriteLine(Sum(1, 2, 3, 4)); // 10
        }

        static int Sum(int a, int b)
        {
            return a + b;
        }

        static int Sum(int a, int b, int c)
        {
            return a + b + c;
        }

        static int Sum(int a, int b, int c, int d)
        {
            return a + b + c + d;
        }
    }
}
```

# 참조

- [메소드 (C# 프로그래밍 가이드)](https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/classes-and-structs/methods)