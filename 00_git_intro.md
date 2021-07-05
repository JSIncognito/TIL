# 1. Git 초기 설정

커밋 작성자(author) 설정 

* 최초 1회 설정

* 만약 설정을 하지 않고 진행하면 commit 메시지를 남기는 상황에서 아래와 같은 에러 발생

  ```bash
  $ git commit -m "Initial commit"
  author identity unknown # 이거 누가 쓴지 모르겠음 
  
  *** please tell me who you are. # 님이 누군지 쫌 알려줘... ! 
  
  Run # 아래 이거 그냥 따라하셈 
  
  git config --global user.email
  ```

  





status 

| 현재 git이 관리하는 폴더의 파일과 폴더 



```
기본 -> commit 을 위한 폴더 & 파일을 추가 
```



commit 

* commit 을 위한 폴더 

* ```bash
  $ git commit -m ""
  ```





```bash
$ git config --global core.editor "code --wait"
```





퀴즈! 만약 status를 여기에 찍으면 어떤 결과가 나올까?

* 현재 b.txt 가 WD 에 위치해있기 때문에 빨간색으로 표시된다.
* a.txt 는 commit 명령어를 통해 하나의 버전으로 기록됨 

```bash

```

