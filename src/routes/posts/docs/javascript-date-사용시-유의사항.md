---
title: 'JavaScript 에서 Date 객체 사용시 유의사항'
date: '2023-04-27 21:20:00'
description: 'JavaScript Date 객체 사용시 유의해야할 사항을 정리한 글입니다.'
tags:
  - 'JavaScript'
  - 'Node.js'
  - 'Date'
  - 'Date 객체'
  - 'UTC'
  - 'GMT'
  - 'Unix Timestamp'
---

## javascript에서 Date 객체 사용시 유의사항

JavaScript에서 Date 객체는 날짜와 시간을 다루는 데 사용되는 객체입니다. 그러나 Date 객체를 사용할 때 몇 가지 유의사항이 있습니다. 이 포스트에서는 JavaScript의 Date 객체를 다룰 때 주의해야 할 사항에 대해 알아보겠습니다.

## 1. 월 (Month)은 0부터 시작한다
JavaScript의 Date 객체에서 월은 0부터 시작합니다. 즉, 1월은 0, 2월은 1로 표현됩니다. 이는 다른 언어에서 사용하는 방식과 다르기 때문에 주의해야 합니다.
> 날짜는 1부터 시작합니다.

```javascript
const date = new Date(2023, 0, 1); // 2023년 1월 1일
console.log(date); // Fri Jan 01 2023 00:00:00 GMT+0900 (한국 표준시)
```

## 2. 시간존(Timezone)을 유의해야 한다.

종종 `new Date('2023-01-01');` 로 문자열을 날짜로 변환하는 경우가 있습니다. 이 경우 시간은 어떻게 될까요? 자정인 00:00일까요?
node 콘솔에서 실행해보면 다음과 같이 나옵니다.

```javascript
const date = new Date("2023-01-01");
console.log(date); // 2023-01-01T00:00:00.000Z 
```

이 경우 node 콘솔 기준 00:00:00.000Z 로 표기됩니다. 그런데 GMT+0900 이 아닌, GMT+0000 (UTC) 입니다. 
따라서 날짜 객체의 `date`는 실제 한국 시간으론 오전 09:00 입니다.

`getHours()` 함수를 호출하면 9가 나옵니다.

```javascript
const date = new Date("2023-01-01");
console.log(date.getHours()); // 9
```

## 3. new Date()의 Month, Day, Hour, Minute, Second, Millisecond는 각 개별 범위를 넘어가도 객체 생성이 된다.

소제목만 봤을 땐 이게 무슨소린가 싶은데 쉽게 말하면 다음과 같습니다.

```javascript
const date = new Date(2023, 0, 1, 25, 61, 61, 1000);
console.log(date); // 2023-01-01T17:02:02.000Z (GMT+0 기준)
```

반대로 음수를 넣어도 오류 없이 객체가 생성됩니다. 다만, 음수를 넣으면 이전 범위로 넘어가게 됩니다.

```javascript
const date = new Date(2023, 0, 1, -1, -1, -1, -1);
console.log(date); // 2022-12-31T13:58:58.999Z (GMT+0 기준)
```

Date 생성에 사용한 숫자값들이 오류에 의해 0이나 -1과 같이 잘못된 값이 들어가도 오류 발생 없이 예상치 못한 날짜값을 반환하는 문제가 생길 수 있으므로 주의해야 합니다.

## 마치며

JavaScript의 Date 객체는 다른 언어에서 사용하는 방식과 다르기 때문에 주의해야 할 사항이 있습니다. 웹에서 서버와 통신을 프론트엔드 영역의 경우 서버가 내려주는 날짜가 일반적인 한국날짜 표기("2023-01-01 00:00:00") 처럼 내려주고,
그 값을 그대로 치환해서 사용하는 방식을 취한다면, 서버보다 클라이언트 부분의 시간이 미래의 날짜로 보이게 될 수도 있습니다. 이런 경우가 발생하지 않도록 서버와 통신할 때 표준화된 날짜 표기 방식("2023-01-01T00:00:00.000+09:00")을 사용하거나,
`UnixTimestamp`값으로 통신하는 것을 권장합니다.

## 참고자료

- [MDN - Date](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [ISO 8601](https://ko.wikipedia.org/wiki/ISO_8601)
- [Unix Timestamp](https://ko.wikipedia.org/wiki/UNIX_시간)
