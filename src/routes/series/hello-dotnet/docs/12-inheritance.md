---
title: '12. 클래스 - 상속'
description: '클래스는 상속을 통해 다른 클래스의 멤버를 물려받을 수 있습니다.'
date: '2023-12-30 09:54:33'
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
    title: '11. 클래스 - 생성자와 소멸자',
    link: './11-constructor-and-destructor'
}
next: {
    title: '13. 정적(static)요소 정리',
    link: './13-static'
}
---

클래스는 상속을 통해 다른 클래스의 멤버를 물려받을 수 있습니다. 상속을 통해 물려받은 멤버는 자신의 것처럼 사용할 수 있습니다. 이를 통해 코드의 재사용성을 높일 수 있습니다.

이미 지난 시간에 다뤘던 [10. 클래스 - 접근제한자](./10-class)에서 상속에 대해 다룬 바 있습니다.

```csharp
class Student
{
    public int StudentNumber;
    public int Grade;
    public int Class;
    public string Name;
    public bool IsGraduated;
}

// 문과 학생 클래스
class LiberalStudent : Student
{
    public int KorScore; // 국어 점수
    public int EngScore; // 영어 점수
    public int JepanScore; // 일본어 점수

    public int GetTotalScore()
    {
        return KorScore + EngScore + JepanScore;
    }

    public void SetIsGraduated()
    {
        if (Grade == 3 && GetTotalScore() >= 150)
        {
            IsGraduated = true;
        }
        else
        {
            IsGraduated = false;
        }
    }
}

// 이과 학생 클래스
class ScienceStudent : Student
{
    public int MethScore; // 수학 점수
    public int ChemScore; // 화학 점수
    public int PhysScore; // 물리 점수

    public int GetTotalScore()
    {
        return MethScore + ChemScore + PhysScore;
    }

    public void SetIsGraduated()
    {
        if (Grade == 3 && GetTotalScore() >= 150)
        {
            IsGraduated = true;
        }
        else
        {
            IsGraduated = false;
        }
    }
}
```

이번 회차에선 상속을 통한 추가 개념과 키워드를 다루도록 하겠습니다.

### 함수 오버라이딩

함수 오버라이딩은 부모 클래스의 함수를 자식 클래스에서 재정의하는 것을 의미합니다. 부모 클래스의 함수를 자식 클래스에서 재정의하면, 자식 클래스의 인스턴스에서 해당 함수를 호출하면 자식 클래스에서 재정의한 함수가 호출됩니다.

아래 클래스는 동물을 나타내는 클래스입니다. `Animal` 클래스는 `Move()` 라는 함수가 있고, 해당 클래스를 부모 클래스로 하는 `Dog` 클래스와 `Bird` 클래스가 있습니다. 

```csharp
class Animal
{
    public void Move()
    {
        Console.WriteLine("동물이 움직입니다.");
    }
}

class Dog : Animal
{
    public void Move()
    {
        Console.WriteLine("개가 네 발로 움직입니다.");
    }
}

class Bird : Animal
{
    public void Move()
    {
        Console.WriteLine("새가 날아갑니다.");
    }
}
```

각 클래스에는 공통적으로 Move() 함수가 있습니다. 이를 통해 각 클래스의 인스턴스에서 Move() 함수를 호출하면, 각 클래스에서 재정의한 함수가 호출됩니다.

```csharp
Dog dog = new Dog();
dog.Move(); // 개가 네 발로 움직입니다.

Bird bird = new Bird();
bird.Move(); // 새가 날아갑니다.
```

직접적인 호출에선 각각의 클래스에 정의된 메시지가 호출됩니다. 그런데 아래와 같이 특정 메소드의 파라메터로 부모 클래스의 인스턴스를 받는다면 어떻게 될까요?

```csharp
using IntroClass;

void CallAnimalMove(Animal animal) 
{
    animal.Move();
}

CallAnimalMove(new Dog());
CallAnimalMove(new Bird());
```

상속받은 부모 클래스가 파라메터이기 때문에 위 코드는 오류가 발생하지 않습니다. 하지만 실행시 `동물이 움직입니다.` 라는 메시지가 출력될 뿐, 전달된 객체에 별도 선언한 메소드의 내용이 출력되지 않습니다.

![단순 메소드 실행](/series/hello-dotnet/12/1-not-override-result.png)

이를 해결하기 위해선 부모 클래스와 자식 클래스에 각각 `virtual` 키워드와 `override` 키워드를 사용해야 합니다.

```csharp
class Animal
{
    public virtual void Move()
    {
        Console.WriteLine("동물이 움직입니다.");
    }
}

class Dog : Animal
{
    public override void Move()
    {
        Console.WriteLine("개가 네 발로 움직입니다.");
    }
}

class Bird : Animal
{
    public override void Move()
    {
        Console.WriteLine("새가 날아갑니다.");
    }
}
```

클래스 수정 후 프로그램을 재실행하면 의도한 메시지가 출력되는 것을 확인할 수 있습니다. 이것을 함수 오버라이딩이라고 하며, 다형성(Polymorphism)의 한 예시입니다.

![오버라이딩 메소드 실행](/series/hello-dotnet/12/2-override-result.png)

### base 키워드

만약 자식 클래스에서 부모 클래스의 함수도 함께 호출하고 싶다면 어떻게 해야 할까요? 가령 아래와 같이 표현하고 싶다고 가정해보겠습니다.

```base
> 개가 네 발로 움직입니다. 
> 동물이 움직입니다.
```

이를 위해선 자식 클래스에서 부모 클래스의 함수를 호출할 수 있어야 합니다. 이때 `base` 키워드를 사용합니다.

```csharp
class Dog : Animal
{
    public override void Move()
    {
        Console.WriteLine("개가 네 발로 움직입니다.");
        base.Move();
    }
}
```

`base` 키워드는 부모 클래스를 가리키는 키워드입니다. `base.Move()` 는 부모 클래스의 `Move()` 함수를 호출하게 됩니다.

### sealed 키워드

`sealed` 키워드는 클래스나 메소드를 상속할 수 없도록 막습니다. `sealed` 키워드를 사용하면 해당 클래스나 메소드는 더 이상 상속할 수 없습니다.

```csharp
sealed class Animal
{
    public virtual void Move()
    {
        Console.WriteLine("동물이 움직입니다.");
    }
}

class Dog : Animal // 오류 발생
{
    public override void Move()
    {
        Console.WriteLine("개가 네 발로 움직입니다.");
    }
}
```

### abstract 키워드

`abstract` 키워드는 클래스나 메소드를 추상화합니다. 추상화된 클래스는 인스턴스를 생성할 수 없습니다. 추상화된 메소드는 자식 클래스에서 반드시 재정의하도록 강제합니다.

```csharp
abstract class Animal
{
    public abstract void Move();
}

class Dog : Animal
{
    public override void Move()
    {
        Console.WriteLine("개가 네 발로 움직입니다.");
    }
}
```

### 다중 상속 제한과 인터페이스(Interface)

C#은 다중 상속을 지원하지 않습니다. 다중 상속이란 하나의 클래스가 여러 클래스를 상속받는 것을 의미합니다.

```csharp

class Animal
{
    void Move();
}

class Human
{
    void Move();
}

class Dog : Animal, Human // 불가. 오류 발생
{
    public void Move()
    {
        Console.WriteLine("술취 한 개가 네 발로 움직입니다.");
    }
}
```

대신 인터페이스(Interface)라는 개념을 통해 다중 상속과 유사한 기능을 구현할 수 있습니다. 인터페이스는 추상화된 클래스와 유사한 개념입니다. 
인터페이스는 추상화된 클래스와 달리 멤버 변수를 가질 수 없으며 인터페이스로 정의된 메소드는 자식 클래스에서 반드시 재정의해야 합니다.

```csharp
interface IAnimal
{
    void Move();
}

interface ISwim
{
    void Swim();
}

class Dog : IAnimal, ISwim
{
    public void Move()
    {
        Console.WriteLine("개가 네 발로 움직입니다.");
    }

    public void Swim()
    {
        Console.WriteLine("개가 수영합니다.");
    }
}
```

> 이름앞에 `I`를 붙이는 것은 Interface의 약자입니다. 없어도 오류가 발생하지 않지만, 일종의 관례적 표현이므로 다른 개발자들이 이름만 보고도 바로 인터페이스라는 것을 알 수 있도록 붙여 주는 것이 좋습니다.

앞서 실행했던 예제 또한 인터페이스로 변경해보겠습니다. Animal 클래스를 인터페이스로 변경하고, Dog와 Bird 클래스에서 인터페이스를 상속받도록 하겠습니다.

```csharp
interface IAnimal
{
    public void Move();
}

class Dog : IAnimal
{
    public void Move()
    {
        Console.WriteLine("개가 네 발로 움직입니다.");
    }
}

class Bird : IAnimal
{
    public void Move()
    {
        Console.WriteLine("새가 날아갑니다.");
    }
}
```

```csharp
using IntroClass;

void CallAnimalMove(IAnimal animal) 
{
    animal.Move();
}

CallAnimalMove(new Dog());
CallAnimalMove(new Bird());
```

인터페이스는 소스코드의 구현을 강제하기 때문에, 개발자간 협업에서 공통화된 규약을 정의할 때 유용합니다. 언젠가 여러분들이 ASP.NET Core를 통한 웹 개발이나, Maui등 크로스플랫폼 개발 단계까지 오게된다면, MS에서 사전에 정의한 Interface를 통해 필요한 기능을 구현하여 의존성을 주입시키면, 서비스가 여러분들의 코드를 동작시켜 필요한 기능에 맞는 동작을 수행하게 될 것 입니다.

아직 이 개념까지 도달하기엔 어려움이 있을 수 있습니다. 그러니 일단은 다른 개발자 또는 미래의 자기자신이 여러분들께 Interface로 개발 방향을 "안내"했다 정도로만 이해하시면 될 듯 합니다.

### 상속과 생성자

클래스를 상속받을 때 생성자는 어떻게 동작할까요? 아래 코드를 보면서 확인해보겠습니다.

```csharp

class Animal
{
    public Animal()
    {
        Console.WriteLine("Animal 생성자 호출");
    }
}

class Dog : Animal
{
    public Dog()
    {
        Console.WriteLine("Dog 생성자 호출");
    }
}

Dog dog = new Dog();
```

위 코드를 실행하면 아래와 같은 결과가 출력됩니다.

```base
Animal 생성자 호출
Dog 생성자 호출
```

## 정리하기

- 클래스는 상속을 통해 다른 클래스의 멤버를 물려받을 수 있습니다.
- 함수 오버라이딩은 부모 클래스의 함수를 자식 클래스에서 재정의하는 것을 의미합니다.
- `base` 키워드는 부모 클래스를 가리키는 키워드입니다.
- `sealed` 키워드는 클래스나 메소드를 상속할 수 없도록 막습니다.
- `abstract` 키워드는 클래스나 메소드를 추상화합니다.
- C#은 다중 상속을 지원하지 않습니다. 대신 인터페이스(Interface)라는 개념을 통해 다중 상속과 유사한 기능을 구현할 수 있습니다.

## 참고

[상속](https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/classes-and-structs/inheritance)