---
title : 'Git 실수 시 대응방법 - 1. 실수로 commit 까지만 한 상태일 때'
date : '2023-04-01 12:47:00'
description : 'Git 을 사용하다보면 실수로 commit을 잘못한 경우가 있습니다. 이번 포스팅에서는 Git 을 사용하다가 실수를 했을 때 대응방법에 대해 알아보겠습니다.'
tags :
  - 'git'
  - 'git 명령어'
  - 'git commit'
  - 'git reset'
  - 'git branch'
  - 'git 실수 대응'
---

## 사람은 누구나 실수를 한다.

Git 을 사용하다보면 실수를 하게 됩니다. 그럴 때는 어떻게 해야할까요? 이번 포스팅에서는 Git 을 사용하다가 실수를 했을 때 대응방법에 대해 알아보겠습니다.

## 사전 설정

시작하기 앞서, github에 별도 저장소를 만들어서 실습을 진행하겠습니다. 이름은 `test-git` 로 하고 다음과 같은 작업을 진행합니다.

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

그럼 이제부터 각 유형별 실수와 대응방법을 알아보겠습니다.

## 파일 수정 후 commit 까지 수행

실수로 `hello.txt` 파일을 잘못 수정한 채, 깃 푸시를 하게 되었다고 가정하겠습니다.
`hello.txt` 파일을 아무렇게나 수정하고 아래 명령어와 같이 커밋을 진행합니다.
  
```bash
git add .
git commit -m "실수로 수정한 hello.txt"
```

git log 명령어를 보면 아래와 비슷한 결과가 나올 것 입니다.

```bash
commit 4390672d0998c87dde3507a149d9bbad7867e1c4 (HEAD -> main)
Author: ddochea0314
Date:   Sat Apr 1 12:05:37 2023 +0900

    실수로 수정한 hello.txt

commit 234874713a5798c4e42c63996f9db099efa8379c (origin/main)
Author: ddochea0314
Date:   Sat Apr 1 11:53:30 2023 +0900

    add hello.txt
```

vscode 에서 GitLens 라는 플러그인을 사용하고 있다면, 아래와 같이 커밋 그래프를 볼 수 있습니다.

![commit graph (with vscode GitLens)](/images/git-%EC%8B%A4%EC%88%98%EC%8B%9C-%EB%8C%80%EC%9D%91%EB%B0%A9%EB%B2%95-1_1.png)

commit 까지만 한 경우라면 `git reset` 명령어를 통해 되돌릴 수 있습니다. 현재 돌아가고 싶은 커밋의 ID가 `234874713a5798c4e42c63996f9db099efa8379c` 커밋이므로 아래와 같은 명령어를 입력합니다.

```bash
git reset --soft 234874713a5798c4e42c63996f9db099efa8379c
```

git reset 명령어에서 --soft 옵션은 커밋을 되돌리지만, 파일의 수정 내용은 그대로 유지합니다. 따라서 파일 내용은 그대로인 채, 커밋이 되돌아간 것을 확인할 수 있습니다. `git status` 명령어를 통해 확인해보면 아래와 같은 결과가 나올 것 입니다.

![git reset --soft](/images/git-%EC%8B%A4%EC%88%98%EC%8B%9C-%EB%8C%80%EC%9D%91%EB%B0%A9%EB%B2%95-1_2.png)

```bash
git status

On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   hello.txt
```

만약 파일의 수정 내용까지 제거하고 싶다면, `--hard` 옵션을 사용하면 됩니다.

> 주의 : `--hard` 옵션을 사용하면, 커밋 이후의 모든 작업 내용이 사라집니다. 따라서, 커밋 이후의 작업 내용을 백업해 두었거나, 커밋 이후의 작업 내용이 중요하지 않은 경우에만 사용해야 합니다. 현 사례는 단순 파일 1개의 수정이지만 실제로는 여러 파일의 수정이 있을 수 있습니다. 이런 경우에는 `--hard` 옵션을 사용하면, 모든 파일의 수정 내용이 사라지므로 주의해야 합니다.

```bash
git reset --hard 234874713a5798c4e42c63996f9db099efa8379c
```

![git reset --hard](/images/git-%EC%8B%A4%EC%88%98%EC%8B%9C-%EB%8C%80%EC%9D%91%EB%B0%A9%EB%B2%95-1_3.png)


```bash
git add .
git commit -m "올바른 수정 hello.txt"
git push origin main
```

## 마치며

git push 작업 이전에 실수를 했을 때는 `git reset` 명령어를 통해 쉽게 되돌릴 수 있습니다.
--soft 옵션을 통해 자신의 작업사항을 희생(?)하지 않고 되돌릴 수 있으며, push 이전이기 때문에 협업자에게 영향을 주지 않았기 때문에 비교적 손쉽게 되돌릴 수 있습니다.

그러나 push 이후에 실수를 했을 때는 어떨까요? 다음 포스팅에서 알아보겠습니다.

## 참고

- [git reset](https://git-scm.com/docs/git-reset)