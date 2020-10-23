# :running_man: Run With Me ? :running_woman:

![Github](https://img.shields.io/badge/vue-2.6.11-%234FC08D?style=plastic&logo=Vue.js)![Github](https://img.shields.io/badge/spring_boot-2.3.1-%236DB33F?style=plastic&logo=Spring)![Github](https://img.shields.io/badge/MySQL-8.0-%234479A1?style=plastic&logo=mysql)



`Run With Me`는 런닝 시 GPS 추적을 통해 사용자의 런닝 기록 저장 및 사용자의 지역, 성향에 맞춰 코스를 추천 런닝 메이트들과 함께 기부하는 시스템, 친목 도모를 위한 채팅 및 커뮤니티를 활성화하여 게임같이 런닝을 즐길 수 있는 웹 / 앱 서비스입니다.

1. Common Service
   - 기록 측정
2. Matching Service
   - 1:1 및 그룹 채팅
   - 커뮤니티
3. Running Service
   - 기부레이스
   - 뱃지나 타이틀 수여

~~[여기]()를 클릭해 사이트를 확인하세요 :slightly_smiling_face:~~ **: TBU**



## 📌 목차

[:running_man: Run With Me ? :running_woman:](#-Run-With-Me-?-) **: TBU**

* [시작하기](#시작하기) **: TBU**
     * [시작하기에 앞서](#시작하기에-앞서)
  * [설치하기](#설치하기)
  * [실행하기](#실행하기)
  * [배포하기](#배포하기)
  * [데모](#데모)
* [지원하는 브라우저](#지원하는-브라우저)
* [사용된 도구](#사용된-도구)
* [사용된 기술](#사용된-기술) **: TBU**
* [저자](#저자)
* [라이센스](#라이센스)



## :triangular_flag_on_post: 시작하기

아래 방법을 따르시면 프로젝트를 실행시킬 수 있습니다.

### 시작하기에 앞서

* [Windows 10](https://www.microsoft.com/en-us/software-download/windows10)
* [JDK 1.8](https://www.oracle.com/kr/java/technologies/javase/javase-jdk8-downloads.html)
* [Node.js 12.8.1](https://nodejs.org/ko/download/)
* [MySQL 8.0](https://www.mysql.com/downloads/)

### 설치하기

1. 깃헙의 레포지토리를 클론합니다.

   ```
   $ git clone https://lab.ssafy.com/s03-final/s03p31a303.git
   ```

2. npm을 설치합니다.

   ```
   $ npm install
   ```

### 실행하기

`Run With Me` 서비스를 사용하기 위해서는 다음과 같은 방법으로 실행합니다:

1. 데이터베이스를 설정합니다.

   - [erd.sql](https://lab.ssafy.com/s03-final/s03p31a303/blob/develop/doc/ERD/erd.sql)을 참고해서 데이터베이스를 생성합니다. ([여기](https://lab.ssafy.com/s03-final/s03p31a303/blob/develop/doc/ERD/erd.png)를 눌러 erd를 확인하세요.

   - `application.yml`에 데이터베이스 설정을 추가합니다.

     ```
     spring:
       datasource:
         driver-class-name: com.mysql.cj.jdbc.Driver
         url : jdbc:mysql://localhost:3306/rwm?characterEncoding=UTF-8&serverTimezone=Asia/Seoul
         username : {데이터베이스 계정 아이디}
         password : {데이터베이스 계정 비밀번호}
     ```

2. 백엔드 서버를 실행합니다.

   - IDE에 import 후 실행합니다.

     : IntelliJ, STS와 같은 IDE를 사용하는 경우, `backend - RunWithMe`를 import하여 실행합니다.

   - war파일을 생성 후 실행합니다.

     ```
     $ gradlew -DskipTests=true build
     ```

     ```
     $ java -jar [filename].war
     ```

   - 프론트엔드를 실행합니다.

     ```
     $ npm run serve
     ```

### 배포하기

해당 서비스는 `AWS EC2`를 이용하여 배포하였습니다. 사전에 [여기]()를 참고해서 `AWS EC2`계정을 생성하세요.

배포를 하기위해서는 다음과 같은 방법으로 실행합니다: **TBU**

### 데모

[여기](http://honeycombo.onle)를 클릭하세요. : **TBU**



## :globe_with_meridians: 지원하는 브라우저

| 크롬   | 사파리 | edge   | firefox |
| ------ | ------ | ------ | ------- |
| latest | latest | latest | latest  |



## :hammer_and_wrench: ​사용된 도구

* Vue.js 2.6.11
* vue/cli 4.4.6
* yarn 1.22.4
* Spring boot 2.3.1
* Gradle 6.4.1
* IDE: Visual Studio Code 1.48, Spring Tool Suite 3



## :desktop_computer: 사용된 기술

**: TBU**



## 👤 저자

* 김대용 - Daeyong Kim - kim940813@naver.com - @[imdaeyong](https://github.com/imdaeyong)
* 김순빈 - Soonbeen Kim - ksb940925@gmail.com - @[soo-ni](https://github.com/soo-ni)
* 김형택 - Hyungtaik Kim - kimhyungtaik@gmail.com - @[hyungtaik](https://github.com/hyungtaik)
* 이선수 - Sunsoo Lee - tjstn921030@gmail.com - @[LEESUNSOO](https://github.com/LEESUNSOO)
* 전수현 - Soohyun Jeon - soohyun0907@naver.com - @[soohyun0907](https://github.com/soohyun0907)



## :page_with_curl: 라이센스

```
Copyright (c) 2015 Juns Alen

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

