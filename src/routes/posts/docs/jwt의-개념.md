---
title: 'JWT(JSON Web Token)란 무엇인가?'
date: '2023-03-18 00:00'
description: 'JWT(JSON Web Token)는 웹 표준으로 지정된 JSON 기반의 데이터 포맷입니다. JWT는 보안적으로 안전한 방식으로 정보를 전달하기 위해 사용됩니다. JWT는 JSON 데이터를 기반으로 하며, 기본적으로 암호화되지 않은 상태로 HTTP 요청 헤더나 URL 매개변수를 통해 전송됩니다.'
tag:
  - 'JWT'
  - 'Authentication'
  - 'Authorization'
  - 'Security'
  - '웹표준'
  - 'Claim'
---

## JWT(JSON Web Token)란 무엇인가?

JWT(JSON Web Token)는 웹 표준으로 지정된 JSON 기반의 데이터 포맷입니다. JWT는 보안적으로 안전한 방식으로 정보를 전달하기 위해 사용됩니다. JWT는 JSON 데이터를 기반으로 하며, 기본적으로 암호화되지 않은 상태로 HTTP 요청 헤더나 URL 매개변수를 통해 전송됩니다.

JWT는 일반적으로 사용자 인증 및 인가에 사용됩니다. 클라이언트가 로그인한 후, 서버는 JWT를 발급하고 이를 클라이언트에게 전달합니다. 클라이언트는 JWT를 이용하여 서버의 보호된 자원에 접근할 수 있습니다.

## JWT의 구조

JWT는 다음과 같은 구조를 가집니다.
> 해당 토큰은 jwt.io에서 확인할 수 있습니다. [https://jwt.io/#debugger-io](https://jwt.io/#debugger-io)

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

JWT는 일반적으로 세 부분으로 구성됩니다. 첫 번째는 헤더(Header)입니다. 헤더는 토큰의 타입과 알고리즘 등을 지정합니다. 두 번째는 페이로드(Payload)입니다. 페이로드는 클라이언트 정보와 같은 사용자 지정 데이터가 포함됩니다. 마지막으로 서명(Signature)이 포함됩니다. 서명은 토큰의 유효성 검사를 위해 사용됩니다.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 -- 헤더
. -- 구분자
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ -- 페이로드
. -- 구분자
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c -- 서명
```

## JWT 사용시 얻을 수 있는 이점
1. 분산 시스템에서 사용 가능: JWT는 토큰 자체에 사용자 인증 정보를 포함하고 있기 때문에 인증 서버의 의존성을 줄일 수 있습니다. 따라서 JWT는 분산 시스템에서 사용하기에 적합합니다.

2. 손쉬운 구현: JWT는 [자가수용성(self-contained)](자가수용성의-개념)으로 토큰에 필요한 모든 정보를 포함하고 있기 때문에 서버에서 별도의 인증 상태 저장소를 유지할 필요가 없습니다.

3. 확장성: JWT를 사용하면 다른 인증 시스템과 통합하기가 쉬우며, OAuth와 같은 기존의 인증 시스템과 함께 사용할 수 있습니다.

4. 보안성: JWT는 기본적으로 서명되어 있기 때문에 변조를 방지할 수 있습니다. 또한 JWT는 인증과 관련된 중요한 정보만을 포함하므로 보안성이 높습니다.

## JWT 단점
1. 토큰 크기: JWT는 인증 정보를 포함하기 때문에 토큰 크기가 상대적으로 큽니다. 따라서 JWT를 자주 전송하는 경우 네트워크 대역폭 문제가 발생할 수 있습니다.

2. 토큰 만료 시간: JWT는 토큰 자체에 만료 시간을 설정하기 때문에 만료 시간이 지난 토큰은 더 이상 유효하지 않습니다. 이 경우 새로운 토큰을 발급해야 합니다. 만료 시간이 너무 짧게 설정되면 자주 새로운 토큰을 발급해야 하는 불편함이 있습니다. 반면 만료 시간이 너무 길게 설정되면 보안상의 위험이 있습니다.

3. 세션 관리: JWT는 토큰 자체에 인증 정보를 포함하기 때문에 세션 관리 기능이 필요 없습니다. 그러나 일부 웹 애플리케이션에서는 세션 관리 기능이 필요할 수 있습니다.

JWT는 클라이언트가 보유한 토큰을 기반으로 인증 및 인가를 수행합니다. 이는 단순한 방식의 인증 및 인가이기 때문에, 보안적 취약점이 발생할 수 있습니다. 따라서, 민감한 정보를 다루는 서비스에서는 JWT만으로 인증 및 인가를 수행하는 것보다 복잡한 인증 및 인가 방식을 사용하는 것이 좋습니다.
