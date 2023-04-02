---
title: 'Git 실수 시 대응방법 - 2. 실수로 push 까지 한 상태일 때'
date: '2023-04-01 17:18:00'
description: 'Git 을 사용하다보면 실수로 push를 잘못한 경우가 있습니다. 이번 포스팅에서는 Git 을 사용하다가 실수를 했을 때 대응방법에 대해 알아보겠습니다.'
tags:
  - 'git'
  - 'git 명령어'
  - 'git commit'
  - 'git reset'
  - 'git branch'
  - 'git push'
  - 'git revert'
  - 'git 실수 대응'
---

## push. 좀 더 큰 실수

지난 포스팅에서는 실수로 commit을 잘못한 경우에 대해 알아보았습니다. commit 까지만 수행하고 push하기 전에 자신의 작업사항이 잘못 되었음을 알게 되었다면, 바로잡는데 큰 어려움이 없습니다. 하지만, push까지 수행한 경우에는 어떨까요? 잘못된 push 항목이 존재할 경우, 협업과정에서 다른사람이 해당 수정사항을 받을 수 있어 commit 실수 때보다 문제가 커질 수 있습니다. 이번 포스팅에서는 Git 을 사용하다가 실수를 했을 때 대응방법에 대해 알아보겠습니다.

## 사전 설정

시작하기 앞서, github에 별도 저장소를 만들어서 실습을 진행하겠습니다. 이름은 `test-git` 로 하고 다음과 같은 작업을 진행합니다.

> 지난 포스트를 통해 만들었다면 생략해도 됩니다.

```bash
echo "hello world" > hello.txt
git add .
git commit -m "add hello.txt"
git push origin main
```

`git log` 명령어로 살펴보면 아래와 비슷한 결과가 나올 것 입니다.

> 해당 로그는 어디까지나 필자의 PC 기준이므로 실제 로그와는 다를 수 있습니다.

```bash
 git log
commit 234874713a5798c4e42c63996f9db099efa8379c (HEAD -> main, origin/main)
Author: ddochea0314
Date:   Sat Apr 1 11:53:30 2023 +0900

    add hello.txt
```

## 실수로 push까지 한 경우

실수로 `hello.txt` 파일을 잘못 수정한 채, 깃 푸시를 하게 되었다고 가정하겠습니다.
`hello.txt` 파일을 아무렇게나 수정하고 아래 명령어와 같이 push를 진행합니다.

```bash
git add .
git commit -m "add hello.txt"
git push origin main
```

`git log` 명령어로 살펴보면 아래와 비슷한 결과가 나올 것 입니다.

> 해당 로그는 어디까지나 필자의 PC 기준이므로 실제 로그와는 다를 수 있습니다.

```bash
git log
commit 1345e1c262d5cd5be307332eddeb26e93ef18ae4 (HEAD -> main, origin/main)
Author: ddochea0314
Date:   Sat Apr 1 15:40:17 2023 +0900

    실수로 수정한 hello.txt

commit 234874713a5798c4e42c63996f9db099efa8379c
Author: ddochea0314
Date:   Sat Apr 1 11:53:30 2023 +0900

    add hello.txt
```

잘못된 푸시를 했기 때문에, github에도 `hello.txt` 파일이 잘못 수정된 상태로 올라가 있습니다.

![잘못 올라간 push](/images/git-%EC%8B%A4%EC%88%98%EC%8B%9C-%EB%8C%80%EC%9D%91%EB%B0%A9%EB%B2%95-2_1.png)

## 해결방법

해결방법은 크게 2가지가 있습니다.

### 1. reset 과 push -f 를 이용한 방법

commit 실수 때와 마찬가지로, `git reset` 명령어를 이용하여 이전 커밋으로 되돌린 후, `git push -f` 명령어를 이용하여 강제로 push를 진행합니다.

```bash
git reset --hard 234874713a5798c4e42c63996f9db099efa8379c
git push -f origin main
```

해당 명령어를 수행하면 github에도 `hello.txt` 파일이 수정되기 이전의 상태로 롤백된 것을 확인할 수 있습니다.

![잘못 올라간 push를 제거한 직후](/images/git-%EC%8B%A4%EC%88%98%EC%8B%9C-%EB%8C%80%EC%9D%91%EB%B0%A9%EB%B2%95-2_2.png)

이 경우 실수한 커밋 이력이 사라지게 되어 깔끔한 히스토리를 남길 수 있습니다. 그러나 협업 과정 중 다른 사람이 해당 커밋을 받아서 작업을 진행했다면, 해당 커밋을 받은 사람의 로컬 저장소에는 해당 커밋이 남아있기 때문에, 해당 커밋을 받은 사람의 로컬 저장소에서는 해당 커밋 이력이 남아있게 됩니다. 이 경우에는 해당 커밋을 받은 사람의 로컬 저장소에서도 `git reset` 명령어를 이용하여 해당 커밋을 되돌려야 합니다.

### 2. revert 를 이용한 방법

`git revert` 명령어를 이용하여 잘못 올린 커밋에 대한 작업사항을 되돌리는 방법입니다.

```bash
git revert 1345e1c262d5cd5be307332eddeb26e93ef18ae4
git push origin main
```

![잘못 올라간 push를 revert](/images/git-%EC%8B%A4%EC%88%98%EC%8B%9C-%EB%8C%80%EC%9D%91%EB%B0%A9%EB%B2%95-2_3.png)

`git revert` 명령어는 해당 커밋을 되돌리는 것이 아니라, 해당 커밋에 대한 작업사항을 취소하는 새로운 커밋을 만들어서 push를 진행합니다. 이 경우에는 해당 커밋 이력이 남아있기 때문에, 협업 과정 중 다른 사람이 해당 커밋을 받아서 작업을 진행했다해도 merge 시 실수를 수정하기위한 revert 커밋이 존재하기 때문에, 충돌에 의한 merge가 가능합니다.

## 마치며

실수로 push를 한 경우, `git reset` 명령어를 이용하여 이전 커밋으로 되돌린 후, `git push -f` 명령어를 이용하여 강제로 push를 진행하는 방법과, `git revert` 명령어를 이용하여 잘못 올린 커밋에 대한 작업사항을 되돌리는 방법이 있습니다. 잘못 push 된 항목을 바로 확인하고 수정할 수 있는 경우에는 `git reset` 명령어를 이용하여 이전 커밋으로 되돌린 후, `git push -f` 명령어를 이용하여 강제로 push를 진행하는 방법이 깔끔한 히스토리를 남길 수 있습니다. 그러나 잘못 push 된 항목을 바로 확인하지 못하고, 다른 사람이 해당 커밋을 받아서 작업을 진행했다면, 해당 커밋을 받은 사람의 로컬 저장소에는 해당 커밋이 남아있기 때문에, 해당 커밋을 받은 사람의 로컬 저장소에서도 `git reset` 명령어를 이용하여 해당 커밋을 되돌려야 합니다. 소규모 팀 단위 작업이라면 팀원들에게 양해를 구하여 바꿀 수 있으나 어려울 경우 revert를 통해 실수한 사항들을 취소하는게 바람직합니다.
