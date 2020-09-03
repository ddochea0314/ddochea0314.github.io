---
title: Vuetify Treeview를 대시보드 형식의 Layout에 사용하려 할때 겪었던 문제 🖖
category: Vuejs
id: 3
date: 2020-09-02
published: false
tags: ['Vuejs', 'Vuetify', 'Treeview', 'css', 'scss' ]
series: false
canonical_url: true
description: "css의 flex, grid로 만든 Layout에 적용할때 안되던 삽질을 까먹지 않고자 작성한 글입니다."
---

> 내용 요약 : Treeview를 가변적인 크기의 특정 영역안에서 사용하고싶다면, 부모영역의 높이, 너비가 %만 존재하면 안된다. 부모노드 중 최소 한곳에서 vw, vh 사용할 것.

현재 사내에서 사용할 웹 기반 솔루션을 개발하고 있습니다. 개발초기라 본격적인 구현에 앞서 UI 레이아웃을 잡고 그 위에 Vuetify 기반의 컨트롤을 배치