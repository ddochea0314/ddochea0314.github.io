---
title: '5. 배열'
description: '배열(Array)이란 동일한 데이터 타입의 데이터를 연속된 메모리 공간에 저장하는 자료구조입니다.'
date: '2023-12-26 05:54:00'
tags: ['dotnet', 'csharp', 'hello-dotnet']
prev: {
    title: '4. C# 기본 자료형(Data Type)',
    link: './4-about-datatype'
}
next: {
    title: '6. 값 형식과 참조 형식의 차이점',
    link: './6-value-type-and-reference-type'
}
---

배열(Array)이란 동일한 데이터 타입의 데이터를 연속된 메모리 공간에 저장하는 자료구조입니다.

## 1. 배열의 선언

배열을 선언하는 방법은 다음과 같습니다.

```csharp
// 배열의 선언

// 1. 배열의 타입 뒤에 []를 붙입니다.

int[] array1;

// 2. 배열의 타입 뒤에 []를 붙이고, 변수명 뒤에 []를 붙입니다.

int[] array2[];

// 3. 배열의 타입 뒤에 []를 붙이고, 변수명 뒤에 []를 붙이고, 변수명 뒤에 배열의 길이를 지정합니다.

int[] array3[10];

```

## 2. 배열의 초기화

배열을 선언하면, 배열의 각 요소는 해당 데이터 타입의 기본값으로 초기화됩니다.

```csharp
int[] array = new int[10];

Console.WriteLine(array[0]); // 0

```

값을 지정하여 배열을 초기화할 수 있습니다. 아래 예제는 1부터 10까지의 값을 지정하여 배열을 초기화합니다.

```csharp
int[] array = new int[10] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

Console.WriteLine(array[0]); // 1

```

초기값이 정의되어 있다면 배열크기 지정은 생략할 수 있습니다.

```csharp
int[] array = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

Console.WriteLine(array[0]); // 1

```

.NET 8(C# 12) 부터는 대괄호 사이에 값을 지정하여 배열을 초기화 할 수 있습니다.

```csharp
int[] array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

Console.WriteLine(array[0]); // 1

```



현재는 int 형식만 다루고 있지만, 다른 데이터 타입도 동일한 방법으로 초기화할 수 있습니다.

```csharp
string[] array = new string[3] { "Hello", "World", "!" };

Console.WriteLine(array[0]); // "Hello"

```

아직 배우지 않았지만, 클래스(class) 기반의 객체(object) 타입도 동일한 방법으로 초기화할 수 있습니다. 

아래 예제는 이름과 나이로 구성된 사람 정보를 담기위한 Person 클래스를 선언하고, Person 클래스의 객체를 배열로 초기화합니다.

```csharp
namespace HelloDotnet
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Person[] array = new Person[3] {
                new Person { name = "홍길동", age = 20 },
                new Person { name = "홍길순", age = 30 },
                new Person { name = "홍길만", age = 40 }
            };

            Console.WriteLine(array[0].Name); // "홍길동"
        }
    }
    class Person
    {
        public string name;
        public int age;
    }
}
```

> 위 예제는 신규 프로젝트 생성시 `Do not use top-level statements`를 선택했을 떄 자동 생성되는 `Program.cs` 파일을 토대로 작성하였습니다. 자세한 내용은 [프로젝트 생성](./3-create-project)을 참고하시기 바랍니다.

## 3. 배열의 길이

배열의 길이는 `Length` 또는 `Count()` 함수를 통해 알 수 있습니다.

```csharp
int[] array = new int[10];

Console.WriteLine(array.Length); // 10
```

## 4. 배열의 요소

배열의 요소는 배열의 인덱스를 통해 접근할 수 있습니다. 배열의 인덱스는 0부터 시작합니다.

```csharp
int[] array = new int[10];

array[0] = 1;

Console.WriteLine(array[0]); // 1

```

## 5. 배열의 반복문

배열의 요소를 반복문을 통해 순회할 수 있습니다. 아래 예제는 배열의 요소를 반복문을 통해 순회하며, 각 요소의 값을 출력합니다. 반복문에 대한 자세한 내용은 [8. 제어문](./8-control-statement)을 참고하시기 바랍니다.

```csharp
int[] array = new int[10] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

for (int i = 0; i < array.Length; i++)
{
    Console.WriteLine(array[i]);
}

```

## 6. 다차원 배열

배열은 다차원으로 선언할 수 있습니다. 아래 예제는 2차원 배열을 선언하고, 초기화하는 예제입니다.

```csharp
int[,] array = new int[2, 3] {
    { 1, 2, 3 },
    { 4, 5, 6 }
};

Console.WriteLine(array[0, 0]); // 1
Console.WriteLine(array[0, 1]); // 2
Console.WriteLine(array[0, 2]); // 3
Console.WriteLine(array[1, 0]); // 4

```

## 7. 동적 배열

배열은 동적으로 생성할 수 있습니다. 아래 예제는 `List<T>` 클래스를 사용하여 동적 배열을 생성하는 예제입니다. .NET에서 기본 제공되는 BCL(Base Class Library) 중 하나로, `T` 영역에 데이터 타입을 지정하면, 
해당 타입의 요소를 추가하거나 제거할 수 있는 동적 배열 형식의 변수를 생성할 수 있습니다. 사용법이 익숙치 않으실 수 있으므로 아래 예제의 주석과 함께 참고하여 실행해보시기 바랍니다.

```csharp
// 1. List<T> 클래스를 사용하기 위해 System.Collections.Generic 네임스페이스를 using 합니다.

using System.Collections.Generic;

// 2. List<T> 클래스의 인스턴스를 생성합니다. T 영역에는 int를 지정하여 int 형식의 요소를 추가하거나 제거할 수 있는 동적 배열 형식의 변수를 생성합니다.

List<int> array = new List<int>();

// 3. List<T> 클래스의 Add() 메서드를 사용하여 요소를 추가합니다.

array.Add(1);

// 4. List<T> 클래스의 인덱서를 사용하여 요소에 접근합니다.

Console.WriteLine(array[0]); // 1

// 5. List<T> 클래스의 Count 속성을 사용하여 요소의 개수를 확인합니다.

Console.WriteLine(array.Count); // 1

```

> 잠깐 소개한 `List<T>` 를 포함하여, 배열(Array), 리스트(List), 딕셔너리(Dictionary)등을 통틀어 컬렉션(Collection)이라고 부릅니다. 컬렉션은 여러 개의 데이터를 담을 수 있는 자료구조를 의미합니다. 
컬렉션에 대한 자세한 내용은 [C# 컬렉션](https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/concepts/collections)을 참고하시기 바랍니다.