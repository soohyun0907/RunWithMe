#  Web Socket으로 채팅서버 만들기 (Stomp)

### 1. Stomp 개념

- 스트리밍 텍스트 지향 메시지 프로토콜 (Streaming Text Oriented Messaging)
- 메시징 전송을 효율적으로 하기 위한 프로토콜
- 신뢰성있는 양방향 Streaming Network Protocol에 사용
- HTTP에 모델링된 Frame기반 프로토
- **구독**이라는 개념을 통해 통신하고자 하는 주체(Topic)를 판단하여 **브로커**라는 개념을 두어 실시간, 지속적으로 관심을 가지며 요청이 들어오면 처리
- 기본적으로 pub / sub 구조로 메시지를 송신, 수신
- 개발하는 입장에서 명확하게 인지하고 개발할 수 있다.
- 통신 메시지의 헤더에 값을 세팅할 수 있어 헤더 값을 기반으로 통신 시 인증처리를 구현 가능
- **pub / sub**: 메시지를 공급하는 주체와 소비하는 주체를 분리하여 제공하는 메시징 방법
  - ex) 우체통(topic)이 있으면 집배원(publisher)이 편지를 우체통에 배달하는 액션이 있다.
  - ex) 우체통에 편지가 배달되는 것을 기다렸다가 꺼내서 보는 구독자(subscriber)의 액션이 있다.
    - 이때, 구독자는 여러명일 수 있다.
  - 채팅방 생성 - pub / sub 구현을 위한 Topic이 하나 생성
  - 채팅방 입장 - Topic을 구독
  - 채팅방에서 메시지를 송수신 - 해당 Topic으로 메시지를 발송하거나 (pub), 메시지를 받는다.(sub)



### 2. Stomp를 이용한 채팅 구현

<hr>
### # 실습

##### 	 * pub / sub를 이용하여 메시지의 이동경로가 명확해졌고, 채팅방마다 개별의 클라이언트 session을 저장하고 있다가 메시지를 발송하는 절차가 단순해진다.

#####  	* URL에 연결된 클라이언트끼리만 메시지 통신이 가능한 websocket 통신 실습

##### 	 * 채팅방이 하나뿐인 채팅 서버

#### 1) build.gradle에 라이브러리 추가

- dependencies에 stomp 관련 라이브러리 추가
  - webjar : 채팅 웹 화면을 구현하기 위해 필요한 js를 로드하기 위해 선언
  - sockjs : websocket을 지원하지 않는 낮은 버전의 브라우저에서도 websocket을 사용할 수 있도록 해주는 라이브러리

#### 2) application.yml

- Intellij에서 static 파일을 개발할 때 서버를 재시작하지 않고도 수정사항이 반영되도록 추가.

  - ```yml
    spring:
      devtools:
        livereload:
          enabled: true
        restart:
          enabled: false
      freemarker:
        cache: false
    ```

#### 3) Websocket Config 수정

- Stomp를 사용하기 위해 @EnableWebSocketMessageBroker를 선언
- WebSocketMessageBrokerConfigurer를 상속받아 configureMessageBroker를 구현
- pub / sub 메시징을 구현
  - 메시지를 발행하는 요청의 prefix는 /pub로 시작하도록 설정
  - 메시지를 구독하는 요청의 prefix는 /sub로 시작하도록 설정
- Stomp Websocket의 연결 endpoint는 /ws-stomp로 설정
  - URL : ws://localhost:8080/ws-stomp

#### 4) 채팅방 DTO 수정

- pub / sub 방식을 이용하면 구독자 관리가 알아서 되므로 웹소켓 세션 관리가 필요없어진다.
- 발송의 구현도 알아서 해결되므로 일일히 클라이언트에게 메시지를 발송하는 구현이 필요없어진다.

#### 5) 채팅방 Repository 생성

- 채팅방을 생성하고 정보를 조회하는 Repository를 생성
- DB나 저장 매체에 채팅방 정보를 저장하도록 구현한다.
- 앞서 구현한 ChatService는 ChatRoomRepository가 대체하므로 삭제

#### 5) 채팅방 Repository 생성

- 채팅방을 생성하고 정보를 조회하는 Repository를 생성
- DB나 저장 매체에 채팅방 정보를 저장하도록 구현한다.
- 앞서 구현한 ChatService는 ChatRoomRepository가 대체하므로 삭제

#### 6) ChatController 수정 (Publisher 구현)

- @MessageMapping을 통해 Websocket으로 들어오는 메시지 발행을 처리
- 클라이언트에서 prefix를 붙여 /pub/chat/message로 발행 요청을 하면 Controller가 해당 메시지를 받아 처리
  - 메시지가 발행되면 /sub/chat/room/{roomId}로 메시지를 send한다.
  - 클라이언트에서는 주소 ( /sub/chat/room/{roomId})를 구독(Subscribe)하고 있다가 메시지가 전달되면 화면에 출력한다.
  -  /sub/chat/room/{roomId} 주소는 채팅방을 구분하는 값이므로 pub / sub 에서 Topic의 역할이다.
- WebSockChatHandler가 했던 역할을 대체하므로 WebSocketChatHandler 삭제

#### 7) 구독자 (Subscriber) 구현

- 웹 뷰에서 stomp 라이브러리를 이용해서 subscriber 주소를 바라보고 있는 코드만 작성하면 된다.

#### 8) ChatRoomController 생성

- Websocket 통신 외 채팅 화면 View 구성을 위해 필요한 Controller를 생성

#### 9) 채팅 화면 (View) 생성

- 채팅방 리스트, 채팅방 상세 화면을 위한 view 구현

- /resources/templates 하위에 room.ftl, roomdetail.ftl 파일 생성 - 추후 vue.js에 적용시킬 예정

- 내부 로직은 vue.js

- [View 1] room.ftl

  - 채팅방을 개설하거나 현재 채팅방의 리스트를 보여준다.
  - 리스트를 클릭하면 채팅방으로 입장한다.

- [View 2] roomdetail.ftl

  - 채팅방에 입장했을 때의 view
  - 접속한 클라이언트 간에 간단하게 채팅 메시지를 주고받을 수 있다.
  - 입장 시엔 ws-stomp로 서버 연결을 한 후 채팅방을 구독하는 액션을 수행한다.
  - ws.subscribe("/sub/chat/room/"+vm.$data.roomId, function(message){.....})
    - 구독은 "/sub/chat/room/채팅방 번호"로 구독하고 있고, 이 주소를 Topic으로 삼아 서버에서 메시지를 발행
    - 채팅방에서 클라이언트가 메시지를 입력하면 서버에서 topic("/sub/chat/room/채팅방 번호")로 메시지를 발행(publish)
    - 구독자는 ws.subscribe에서 대기하고 있다가 발송된 메시지를 받아서 처리할 수 있다.

  #### 10) 테스트

  - 서버 실행 -> localhost:8080/chat/room을 실행 -> 채팅방 개설 -> 리스트 클릭 -> 입장



<hr>