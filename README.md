# Run With Me ? 🏃️

![Github](https://img.shields.io/badge/vue-2.6.11-%234FC08D?style=plastic&logo=Vue.js)![Github](https://img.shields.io/badge/spring_boot-2.3.1-%236DB33F?style=plastic&logo=Spring)![Github](https://img.shields.io/badge/MySQL-8.0-%234479A1?style=plastic&logo=mysql)



## :triangular_flag_on_post: Run With Me ? 🏃️


- ### 프로젝트 개요
  - 🏠 [Run With Me Homepage](https://k3a303.p.ssafy.io/)

  - `Run With Me`는 런닝 시 GPS 추적을 통해 사용자의 런닝 기록 저장 및 사용자의 지역, 성향에 맞춰 코스를 추천 런닝 메이트들과 함께 기부하는 시스템, 친목 도모를 위한 채팅 및 커뮤니티를 활성화하여 게임같이 런닝을 즐길 수 있는 웹 / 앱 서비스입니다.

- ### 주요 기능 

  - **러닝 기록 및 / 분석**

    > 1) 사용자의 **러닝을 실시간으로 추적**하고 속도, 거리와 같은 기록이 화면에 표시가 된다.
    >
    > 2)  러닝 종료 시 기록이 저장되고, **개인 러닝 기록을 실시간으로 분석**한다. 
    >
    > ​	- 이전 기록과 최근 기록,  평균 러너 기록을 분석하여 비교해 얼마나 성장했는지 알 수 있다. 

  - **챌린지 서비스** 

    > 1) 매일 똑같이 러닝만 하는 데 지루함을 느끼는 **사용자들에게 새로운 시도를 제공**한다. 
    >
    > 2) 사용자는 **카카오페이를 통해 마일리지를 충전**하고 기부할 금액을 정해 원하는 카테고리의 챌린지에 참여한다. 
    >
    > 3) **챌린지 각각의 목표와 기부 금액을 달성하면 기부가 되는 형식**으로, 기부를 하지 않아도 참여가 가능하다.
    >
    > 4) **비대면 레이스**의 형태로 여러 사용자들과 함께 각자의 장소에서 목표를 이루는 것을 통해 색다른 이벤트를 제공한다.

  - **커뮤니티 서비스**

    > 1) 혼자가 아닌 **러닝메이트**를 만들고 싶을 때, **사용자의 기록과 활동 지역 분석을 통해 다른 러너를 매칭**해준다.
    >
    > 2) **일대일 채팅**을 통해 팔로우한 친구와 대화를 하거나 다른 러너 매칭을 원활하게 돕기위해 활용한다.
    >
    > 3) **지역별 채팅**을 통해 사용자의 지역에 속한 지역의 그룹 채팅을 통해 다양한 러너들과 소통하는 서비스를 제공한다. 
    >
    > 4) **랭킹 시스템을 도입**하여 러닝에 대한 성취감을 높이고, 유저들의 러닝 동기부여를 한다.

- ### 향후 계획

  - **알림 기능** : 친구 추가 및 채팅 관련한 알림 기능을 통해 사용자들에게 편리성을 제공.
  - **코칭 서비스** : 러너들에게 효과적인 러닝을 할 수 있도록 코칭할 수 있는 유저를 매칭하는 서비스를 제공.
  - **다양한 챌린지 컨텐츠** : 기부 뿐만 아니라 다양한 카테고리의 챌린지를 만들어 다양하게 챌린지를 할 수 있도록 제공.
  - **기부 단체 협약** : 기부 챌린지를 통해 얻은 기부금 전달을 위해 기부 단체를 찾아 협약을 맺을 계획.



## 📌 목차

[Run With Me ? 🏃️](-Run-With-Me-?-) 

* [시작하기](#시작하기) 

  * [시작하기에 앞서](#시작하기에-앞서)
  * [설치하기](#설치하기)
  * [실행하기](#실행하기)
  * [배포하기](#배포하기)
  * [데모](#데모)

* [지원하는 브라우저](#지원하는-브라우저)

* [사용된 도구](#사용된-도구)

* [사용된 기술](#사용된-기술)

* [서비스 소개](#서비스-소개)

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



## :hammer_and_wrench: 사용된 도구

* Vue.js 2.6.11
* vue/cli 4.4.6
* yarn 1.22.4
* Spring boot 2.3.1
* Gradle 6.4.1
* IDE: Visual Studio Code 1.48, Spring Tool Suite 3
* GitLab
* Jira
* SonarQube



## :desktop_computer: 사용된 기술

**[ BACK END ]**

- **Spring Boot** : Run WIth Me Project의 전반적인 Rest Controller 구현.
- **Spring Security** : WebSecurityConfigurerAdapter를 상속받아 Filter를 적용, 사용자 권한에 맞는 기능을 수행하도록 구현. 
- **JWT** : JSON Web Token을 활용하여 회원 인증 및 안정성있는 정보 교환을 할 수 있도록 활용.
- **JPA (Hibernate)** : ORM인 Hibernate를 활용하여 객체 중심의 개발을 할 수 있도록 하였고, SQL을 직접 작성하지 않고 Entity 필드가 되는 객체를 통해 DB를 동작시켜 유지보수에 용이하게 활용. 
  - 동일한 쿼리에 대한 캐시 기능을 사용하기 때문에 높은 효율성 기대
- **SSL 프로토콜** : SSL을 적용하여 전송되는 패킷값을 암호화하여 외부의 공격자로부터 데이터를 보안하기 위해 사용.
  - **Let’s Encrypt** 무료 인증서를 발급받아 웹서버에 SSL 인증서를 적용.
  - Google Map API 활용 시, SSL 적용 필수.
- **MySql** : RDBMS로 Run With Me Project의 사용자, 러닝 기록, 챌린지, 게시판 등 필요한 데이터를 저장.
- **Redis** : 비관계형 데이터베이스로 'Key-Value' 구조 데이터 관리 시스템이며, 데이터를 메모리에 저장하여 빠른 처리속도가 필요한 기능에 적용.
  - 채팅 서버의 채팅방, 메세지 처리를 위해 사용. (Subscribe / Publish)
  - 만료일을 저장하면 만료 시 자동으로 데이터가 사라지는 특성을 활용하여 로그아웃된 토큰을 저장하여 블랙리스트로 활용.
- **AWS**
  - EC2 서비스를 이용하여 Ubuntu 서버를 구축 (호스팅).
  - S3 서비스를 이용하여 프로필 및 러닝 기록 (Polyline)을 저장하기 위해 사용.
- **Nginx** : 웹 서버를 구축
- **WebSocket** : 웹 상에서 쉽게 소켓 통신을 하게 해주는 라이브러리를 활용하여 러닝 메이트 매칭, 지역별 그룹 채팅 기능을 구현.
- **STOMP** : Http에 모델링된 frame 기반의 메세징 프로토콜을 통해 메세지 전송을 좀 더 효율적으로 하기 위해 활용.
  - `STOMP Handler`를 구현하여 Subscribe를 통해 통신하고자 하는 주체(Topic)를 판단하여 실시간, 지속적으로 감시하고 해당 요청이 들어오면 처리하도록 구현. **(Broker 역할 수행)**

**[ FRONT END ]**

- **Vue**
  * **Swal (Sweet Alert)** -  다양한 기능과 디자인을 가진 Alert창을 구현.
  * **SplideSlide** - Page를 Swap할때마다 변경되는 페이지.
  * **carousal** - Main Page에서 다양한 이벤트를 보기 편하게 하기 위해 3D Slide형식으로 넘어가는 컴포넌트 구현.
  * **apexChart** - 런닝 데이터 분석을 위해 사용하는 분석차트.
  * **decode-google-map-polyline** - String으로 인코딩했던 polyline을 맵에 다시 표시하기 위해 사용.
  * **vue-good-table** - 친구 목록이나 다양한 목록을 표현할때 사용되는 검색과 정렬기능, 페이지 기능을 사용.
  * **vue-moment** - 시간을 DB에 저장하기위해 포맷 형식을 변경 및 DB에서 가져올 때 출력 형식 변경.
  * **web-stomp** - 채팅기능을 위한 웹 소켓 프로그래밍, 실시간으로 채팅을 할때 사용.
- **Google Static Map** : 실시간 위치정보를 맵에 Polyline화해서 지도이미지를 DB에 저장.
- **Google Map** : 지도에 지속적으로 위치를 기록 및 추적하기 위해 사용.
- **Kakao Pay** : Kakao에서 제공하는 KakaoPay기능을 이용해 모바일로 결제가 가능. 기부 챌린지 참가를 위해 원하는 금액만큼 미리 충전하여 사용.
- **Vuex** : 여러 페이지에서 공용으로 사용하는 데이터와 함수들을 저장해서 한번에 관리, 추가적으로 JWT토큰을 스토어에 저장하여 Backend와 통신시마다 주고받으며, 2시간이 지나면 토큰이 만료되어 서비스 이용 불가. 
- **vue apaxcharts** : 러닝 데이터를 효과적으로 시각화할 수 있도록 활용.
  - axios 통신.
  - 시각화 자료 이미지 파일로 변환 및 저장.
  - 활용 사례
    - running plant
      - 월별 사용자 러닝 거리 기록.
      - 거리 기록에 따라 상대적인 색 표현.
      - 업데이트를 통한 실시간 기록 분석 가능.
     - running analysis
       - 지난 측정 기록 vuex 저장 및 시각화.
       - 업데이트 기록과 비교.
       - 사용자와 같은 티어의 사용자와 비교 분석.

**[ TEAM Cooperation ]**

- **GitLab** : GitLab을 활용하여 프로젝트를 관리.
  - Git Flow 에 따른 브랜치 전략 수립.
  - MR 시 코드 리뷰 진행.
- **Jira** : 이슈 관리 도구로 활용. 
  - 주요 기능들을 이슈로 등록하고 Story Point를 산정한 후, 담당자를 지정하여 프로젝트를 진행.
  - 1~2 주 정도 상황에 맞게 스프린트를 설정.
- **Google Drive** : 협업을 위한 공용 문서 및 산출물들을 공유할 수 있도록 활용.
  - 동시 문서 작성 (Google Docs).
  - 대용량 파일 첨부


## 🎞 서비스 소개

### 1. 로그인 화면

<img src="/uploads/740ce5f34a260a48d1d6cbe85ba092d1/1._로그인창.jpg" width="30%" >

---

### 2. 메인 화면
<img src="/uploads/52fef267461ea9fcc6e35ac17ddcbfab/2._메인화면.jpg" width="30%" >
<img src="/uploads/ea91fba11be4299e24b5eaa1e687e0cb/2._메인하면_하단.jpg" width="30%" >

- **[메인 화면]** : 상단에는 현재 진행중인 챌린지와 이벤트 , 중단에는 랭킹, 하단에는 친구의 최신 피드를 보여줍니다. 
---

#### 2-1. 메인 화면에서 랭커 클릭
<img src="/uploads/a715b0b91bb7ab59bafd43c1791eff58/3._메인에서_랭커_클릭.jpg" width="30%" >
<img src="/uploads/093b2a3ab0a6e40c9481a81aaabd84b0/3_.메인_랭커_기록_보기.jpg" width="30%" >

- **[메인화면에서 랭커 클릭시]** : 선택한 유저의 간단한 프로필과 최근 런닝 기록을 보여줍니다.
- **[랭커 프로필에서 런닝 피드 클릭시]** : 해당 유저의 해당 런닝기록을 보여줍니다. 
---

#### 2-2. 메인 화면에서 친구 피드 클릭
<img src="/uploads/75dc2ddc87b2a42cf2dd75b1698aa60a/3._메인에서_친구_피드클릭.jpg" width="30%" >

- **[메인 화면에서 친구 피드 클릭시]** : 친구의 런닝 기록을 보여줍니다. 
---

### 3. 런닝 페이지  
<img src="/uploads/32e36cf655e596a67303b90fd85d66a9/4._런닝_시작.jpg" width="30%" >
<img src="/uploads/ccf981869ee8b9a54820dce24ad4364d/0_런닝중.png" width="30%" >
<img src="/uploads/392c5ee51113a310255970c5b4a67dbc/0_런닝_스왑.png" width="30%" >


- **[런닝 페이지에서 시작 버튼 클릭시]** : 런닝 기록을 시작할 수 있습니다
- **[런닝 페이지에서 정지 버튼 클릭시]** : 런닝을 끝내고 기록을 저장할 수 있습니다.
- **[런닝 페이지에서 페이지 스왑시]** : 현재 런닝의 중간 기록을 확인할수 있습니다(1Km 단위)

--- 

#### 3-1. 런닝 결과 및 분석
<img src="/uploads/f70ecebf3661fddabcfd96c8739df150/0_런닝_종료.png" width="30%" >
<img src="/uploads/14e676d7ffa86ec44c10f768652115e1/5._런닝_분석1.jpg" width="30%" >
<img src="/uploads/6fa16ca2f5d972ed5f3e8399c8bd6100/5._런닝_분석2..jpg" width="30%" >

- **[런닝 결과]** : 현재 런닝의 부분 기록 및 전체 기록을 확인할 수 있습니다.
- **[런닝 분석]** : 개발자의 감성을 살려서 달마다 뛴 기록을 보여주며 순위화 해줍니다.
- **[런닝 분석]** : 이전 기록, 최근 기록과 유저들의 평균 기록들을 보여줍니다.


---


### 4. 주변 러너 추천
<img src="/uploads/e16a7769651b80c364fa82492b157702/6._주변러너추천.jpg" width="30%" >
<img src="/uploads/d557c69b3a4b54205b7578083cbc7705/6._주변러너추천__2_.jpg" width="30%" >

- **[주변 러너]** : 같은 동네의 주변 러너들을 추천해주고, 클릭하면 마찬가지로 유저의 프로필과 기록을 확인할 수 있습니다. 
---


### 5. 채팅 및 매칭
<img src="/uploads/525440ff61a1b1b3e16e0bf0cd60d7a4/7._채팅___매칭.jpg" width="30%" >
<img src="/uploads/ed7be05aea9cc3e3806f7971dfccc7c2/7.실제_채팅.jpg" width="30%" >
<img src="/uploads/f1fd199acbe8e15a78eb8cde4e743ed9/7._매칭.jpg" width="30%" >

- **[1:1 채팅]** : 실시간 채팅을 적용하여 현재 온라인 상태인 유저들과 채팅할 수 있습니다.
- **[실제 채팅 화면]** : 실시간으로 시간과 프로필, 메시지가 주고 받아집니다.
- **[매칭 시스템]** : 매칭에서 원하는 성별을 클릭시 선택한 성별과 매칭할수 있습니다(비슷한 레벨의 러너가 없다면 매칭되지 않습니다.)

---


### 6. 지역 채팅
<img src="/uploads/ba16b27eb2c96b9ecf84456cecd43046/8._지역채팅.jpg" width="30%" >
<img src="/uploads/7e5d509b2553e71bf69f51079808ac76/8.지역_실제채팅.jpg" width="30%" >

- **[지역 채팅방]** : 다양한 지역들의 채팅방에 참여하여 여러 유저들과 실시간 채팅을 즐길 수 있습니다.
- **[실제 채팅 화면]** : 
---


### 7. 챌린지 페이지
<img src="/uploads/d9602223f8c9e9c4be45263402609401/9._챌린지_페이지.jpg" width="30%" >
<img src="/uploads/c441a423aee5dcce59cd9f73810993a0/9._챌린지_클릭.jpg" width="30%" >

- **[챌린지 페이지]** : 현재 진행중, 진행 예정, 종료된 챌린지들을 확인할 수 있습니다.
- **[챌린지 클릭시]** : 챌린지 클릭시 해당 챌린지의 상세 정보를 확인할 수 있고, 신청버튼으로 챌린지에 참여할 수 있습니다.

---


#### 7-1. 챌린지 상세
<img src="/uploads/fd7c0f86c617a665d27a7d54feccbb5c/10._챌린지_디테일.jpg" width="30%" >
<img src="/uploads/7cfcd355efbaf5e99c12b541d37e1cbe/10._챌린지_신청.jpg" width="30%" >


- **[챌린지 상세페이지]** : 챌린지를 클릭시 상세 페이지로 넘어가게 됩니다.
- **[챌린지 신청]** : 챌린지 신청버튼 클릭! 
---


#### 7-2. 챌린지 결제
<img src="/uploads/d41c52eb88314d1a61920d27c222b8e1/11._챌린지_결제.jpg" width="30%" >
<img src="/uploads/cc08c2ee441170ac053f799d93741193/11._챌린지_결제_확인.jpg" width="30%" >

- **[챌린지 결제]** : 해당 챌린지에서 원하는 금액만큼만 기부금액을 기재하여 참가할 수 있습니다.

---


### 8. 챌린지 제안
<img src="/uploads/fcd2abaaed9f7ea5a1088f350b6a3f09/12._챌린지_제안.jpg" width="30%" >
<img src="/uploads/628de795bf0e7becdc3f6f810d04014c/12._챌린지_제안_상세.jpg" width="30%" >
<img src="/uploads/13b77b4438ad13b0f1dd2537a32fefb7/12._챌린지_상세_댓글.jpg" width="30%" >

- **[챌린지 제안]** : 유저들은 관리자에게 챌린지를 제안할수 있습니다.
- **[챌린지 제안 상세]** : 챌린지 상세 페이지 입니다.

---


#### 8-2. 챌린지 관리페이지
<img src="/uploads/92112d15ae026b13b5bb5b8386c281c5/13._챌린지_생성_및_관리.jpg" width="30%" >

- **[챌린지 관리 페이지]** : 챌린지 생성 및 관리 페이지는 관리자 등급만 확인할 수 있으며 생성, 삭제, 수정이 가능합니다.

---


### 9. 런닝 기록 조회
<img src="/uploads/52fef924c5c3e007976c90fcb44fe042/15._내_런닝.jpg" width="30%" >
<img src="/uploads/ef5be5ee1cbdaf0f2050c734d470c67c/15._내_런닝_클릭.jpg" width="30%" >
<img src="/uploads/16b87880924881eae3b76fadf7b77faf/15._내_런닝_클릭2.jpg" width="30%" >

- **[런닝 기록 조회]** : 내 모든 런닝 기록을 조회할 수 있습니다. 하단에서 런닝 기록을 클릭시 맵에 뛴 경로가 표시됩니다.
- **[런닝 기록 클릭시1]** : 맵에 해당 런닝 기록을 분석하여 뛴 경로를 표시해줍니다.
- **[런닝 기록 클릭시2]** : 해당 런닝 기록이 열리고, 런닝 기록을 클릭시 상세 페이지로 넘어갑니다.
---


#### 9-1. 런닝 상세
<img src="/uploads/66bc6b6f01dd83b1af4e4eceeebd4b36/16._내_런닝_상세.jpg" width="30%" >
<img src="/uploads/0275376e046200eeeafe5fe50e0e3f75/16._내_런닝_상세_2.jpg" width="30%" >

- **[내 런닝 상세]** : 해당 런닝 기록을 상세하게 볼수 있습니다. 
---


### 10. 친구 목록
<img src="/uploads/36e159c16ef22689b375390dc04bca02/17._친구_목록.jpg" width="30%" >

- **[친구 목록]** : 친구의 간단한 정보와, 채팅을 할수 있는 버튼과 삭제 할 수 있는 버튼이 있습니다. 
---


### 11. 마일리지 충전
<img src="/uploads/3535f4239241a52417504badcddbc8db/18._마일리지_충전.jpg" width="30%" >
<img src="/uploads/808ba62310c67e6d7bef8be9d7738493/18._마일리지_충전_가_.jpg" width="30%" >
<img src="/uploads/3c87041886827e9e91251a7bd36f543b/18._마일리지_충전완.jpg" width="30%" >

- **[마일리지 충전]** : 마일리지가 부족할시 마일리지 충전창으로 이동되며, 원하는 금액만큼 충전할 수 있습니다.
- **[마일리지 충전(현재 공짜로 충전)]** : 현재는 비밀번호를 입력받지 않고 **TEST** 를 위한 충전기능입니다.
- **[마일리지 충전완료]** : 마일리지가 충전되면 즉시 현재 보유 마일리지가 올라갑니다.
---


### 12. 회원정보 수정
<img src="/uploads/ca913d3815b36b613a79998e08f69986/14._회원정보_수정.jpg" width="30%" >
<img src="/uploads/f5aa90a5c3cbbd48353dfa83c8a41e78/14._회원정보_수정전.jpg" width="30%" >
<img src="/uploads/b0ce339d70317e6a7e3eba1971a174b1/14._회원정보_수정후.jpg" width="30%" >

- **[회원정보 수정]** : 회원정보 수정 페이지입니다.
- **[회원정보 수정전, 수정 후]** : 회원정보를 수정하거나 탈퇴할 수 있습니다.


---

## 👤 저자

* 김대용 - Daeyong Kim - kim940813@naver.com - @[imdaeyong](https://github.com/imdaeyong) [Front]
* 김순빈 - Soonbeen Kim - ksb940925@gmail.com - @[soo-ni](https://github.com/soo-ni) [Back / PM]
* 김형택 - Hyungtaik Kim - kimhyungtaik@gmail.com - @[hyungtaik](https://github.com/hyungtaik) [Back]
* 이선수 - Sunsoo Lee - tjstn921030@gmail.com - @[LEESUNSOO](https://github.com/LEESUNSOO) [Back]
* 전수현 - Soohyun Jeon - soohyun0907@naver.com - @[soohyun0907](https://github.com/soohyun0907) [Front]



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