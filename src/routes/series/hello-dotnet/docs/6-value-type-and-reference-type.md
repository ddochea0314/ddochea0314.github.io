---
title: '6. 값 형식(Value Type)과 참조 형식(Reference Type)의 차이점'
description: '값 형식(Value Type)과 참조 형식(Reference Type)의 차이점을 알아봅시다.'
date: '2023-12-27 02:43:00'
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
    title: '5. 배열',
    link: './5-about-array'
}
next: {
    title: '7. 연산자',
    link: './7-operator'
}
---

지난 회차에서 다뤘던 [3. C# 기본 자료형(Data Type)](./4-about-datatype) 과 [5. 배열](./5-about-array) 에서 따로 언급되진 않았지만 선언하는 변수에는 크게 값 형식(Value Type)과 참조 형식(Reference Type)이라는 개념이 존재합니다.
이 개념은 C# 뿐만이 아닌, Java, javascript 등 메모리를 관리해주는 형식의 개발 프레임워크에서 쓰이는 언어는 거의 공통적으로 존재하는 개념이므로 반드시 이해해야할 개념입니다.

## 1. 값 형식(Value Type)

값 형식(Value Type)은 변수에 값을 할당할 때, 해당 값이 저장되는 메모리 공간을 의미합니다. 값 형식의 변수를 다른 변수에 대입하면, 값이 복사됩니다. 

'서울특별시 강남구 역삼동 123-456'이라는 지번 주소를 가진 10제곱미터 크기의 집이 있다고 가정해보겠습니다. 어느날 도로명주소가 도입되면서 '서울특별시 강남구 역삼동 123-456'이라는 지번 주소를 가진 집의 도로명 주소는 '서울특별시 강남구 테헤란로 123'이 되었습니다. 이때, 지번 주소와 도로명 주소는 서로 다른 주소이지만, 1개의 집을 가리키고 있다고 생각될 것 입니다. 

지번주소가 가리키는 집의 크기를 `jibunHouse`, 도로명주소가 가리키는 집의 크기를 `doroHouse` 라고 정의하고 이를 코드로 표현하면 아래와 같을 것 입니다.

```csharp
int jibunHouse = 10; // 10은 10제곱미터 의미
int doroHouse = jibunHouse; // 도로명주소가 도입되면서 도로명주소가 가리키는 집의 크기를 저장할 변수 doroHouse가 생겨남.
```

만약 지번이 가리키는 집이 확장공사해서 크기를 20제곱미터로 키웠다고 해보겠습니다. 그렇다면 `jibunHouse` 변수에 20을 할당하면 될 것 입니다.

```csharp
int jibunHouse = 10; // 10은 10제곱미터 의미
int doroHouse = jibunHouse; // 도로명주소가 도입되면서 도로명주소가 가리키는 집의 크기를 저장할 변수 doroHouse가 생겨남.

jibunHouse = 20; // 코드 추가
```

이때, `doroHouse` 변수 값은 몇일까요?

```csharp
int jibunHouse = 10; // 10은 10제곱미터 의미
int doroHouse = jibunHouse; // 도로명주소가 도입되면서 도로명주소가 가리키는 집의 크기를 저장할 변수 doroHouse가 생겨남.

jibunHouse = 20; // 코드 추가

Console.WriteLine(jibunHouse);
Console.WriteLine(doroHouse);
```

당연할 수도 있겠지만, `doroHouse` 변수 값은 10입니다. 이는 `jibunHouse` 변수에 20을 할당했을 때, `doroHouse` 변수에는 아무런 영향을 주지 않았기 때문입니다. 이처럼 값 형식의 변수를 다른 변수에 대입하면, 값이 복사되기 때문에, 값 형식의 변수를 다른 변수에 대입하면, 두 변수는 서로 독립적으로 동작하게 되며, 오류를 방지하기위해선 `doroHouse` 변수에도 20을 할당하도록 프로그램을 수정해야 한다는 얘기가 됩니다.

## 2. 참조 형식(Reference Type)

참조 형식(Reference Type)은 변수에 값이 저장되어 있는 메모리 공간의 주소를 의미합니다. 참조 형식의 변수를 다른 변수에 대입하면, 값이 복사되지 않고, 메모리 공간의 주소가 복사됩니다.

값 형식예시에서 우리는 지번 주소와 도로명 주소가 서로 다른 주소이지만, 1개의 집을 가리키고 있다고 생각했고, 프로그램도 당연히 그렇게 동작이 되어야 할 것 입니다. 값 복사 예제에서 작성했던 코드를 조금 수정해보겠습니다.

```csharp
class House
{
    public int size;
}

House jibunHouse = new House();
jibunHouse.size = 10;

House doroHouse = jibunHouse;

jibunHouse.size = 20;

Console.WriteLine(jibunHouse.size); 
Console.WriteLine(doroHouse.size);

```

이번엔 지번주소에 대한 값만 변경했는데도, 도로명주소에 대한 변수값이 함께 변경된 것을 확인할 수 있습니다. 이는 `jibunHouse` 변수에 20을 할당했을 때, `doroHouse` 변수에도 영향을 주었기 때문입니다. 이처럼 참조 형식의 변수를 다른 변수에 대입하면, 값이 복사되지 않고, 메모리 공간의 "주소"가 복사되기 때문에, 참조 형식의 변수를 다른 변수에 대입하면, 두 변수는 서로 동일한 값을 참조하게 됩니다.

## 3. 값 형식과 참조 형식의 비교

값 형식과 참조 형식의 차이점을 정리하면 다음과 같습니다.

- 값 형식 : 대입 시 값이 복사되는 형식을 의미합니다. 대표적으로 `int`, `double`, `bool` 등이 있습니다. 값 형식은 대입 연산자를 사용할 때 값이 복사되기 때문에, 값 형식의 변수를 다른 변수에 대입하면 값이 복사됩니다. 그래서 값 형식의 변수를 다른 변수에 대입하면, 두 변수는 서로 독립적으로 동작합니다.

- 참조 형식 : 대입 시 값이 복사되지 않는 형식을 의미합니다. 대표적으로 `class`를 통해 생성한 객체변수가 있습니다. 참조 형식은 대입 연산자를 사용할 때, 메모리 상에 존재하는 값의 메모리 주소를 복사하기 때문에, 참조 형식의 변수를 다른 변수에 대입하면 값이 복사되지 않습니다. 그래서 참조 형식의 변수를 다른 변수에 대입하면, 두 변수는 서로 동일한 값을 참조하게 됩니다.

지난시간에 배운 배열 또한 참조형식에 속합니다. 배열의 요소를 다른 변수에 대입하면, 값이 복사되지 않고, 메모리 공간의 주소가 복사됩니다.

```csharp
int[] array = new int[10] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
int[] array2 = array;

array[0] = 100;

Console.WriteLine(array[0]);
Console.WriteLine(array2[0]); // array[0] 만 변경했지만, 참조형식이므로 array2[0] 도 변경됨.

```

> C#의 `string` 타입은 값 형식처럼 동작하지만, 참조형식입니다. C#의 `string` 타입은 CTS의 `System.String` 타입과 매핑됩니다. C#의 `string` 타입은 값 형식처럼 동작하는 이유는, C# 컴파일러가 `string` 타입을 사용할 때마다 `System.String` 타입의 인스턴스를 생성하고, `System.String` 타입의 인스턴스를 대입 연산자를 통해 복사하기 때문입니다.
