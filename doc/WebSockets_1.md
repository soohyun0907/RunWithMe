#  Web Socket으로 채팅서버 만들기

### 1. 개념

- 채팅 서버는 Socket 통신을 하는 서버가 필요하다.

- http 통신은 Client 요청이 있을 때만 Server가 응답하고 연결을 종료하는 단방향 통신
  
  - 클라이언트가 서버에 접속해 request하고 response를 받는 구조의 서비스에서 많이 사용
  
- socket 통신은 Server와 Client가 지속적으로 연결을 유지하는 양방향 통신
  
  - 채팅과 같은 실시간 특징을 필요로 하는 서비스에서 많이 사용
  
  #### Web Socket
  
  - 기존의 단방향 HTTP 프로토콜과 호환되어 양방향 통신을 제공하기 위해 개발된 프로토콜
  - 일반 socket 통신과 달리 HTTP 80 Port를 이용하므로 방화벽에 제약이 없음
  - 접속까지는 HTTP 프로토콜을 이용하고, 이후 통신은 자체적인 Websocket 프로토콜로 통신



### 2. 채팅 서버 구현

<hr>

### # 실습 (1)

#####  	* URL에 연결된 클라이언트끼리만 메시지 통신이 가능한 websocket 통신 실습

##### 	 * 채팅방이 하나뿐인 채팅 서버

	#### 1) build.gradle에 라이브러리 추가

- spring-boot-starter-websocket

#### 2) Application 설정

- 일반적인 boot 서버와 동일

#### 3) Websocket Handler 작성

- socket 통신은 서버와 클라이언트가 1:N 관계를 맺는다.
  - 하나의 서버에 여러 클라이언트가 접속 가능
  - 서버에는 여러 클라이언트가 발송한 메시지를 받아 처리해줄 Handler가 필요
  - TextWebSocketHandler를 상속받아 Handler를 작성

#### 4) Websocket Config 작성

- Handler를 이용하여 Websocket을 활성화하기 위해 Config 파일을 작성
- @EnableWebSocket을 선언하여 Websocket을 활성화
- Websocket에 접속하기 위한 endpoint는 /ws/chat으로 설정하고 도메인이 다른 서버에서도 접속 가능하도록 CORS:setAllowedOrigins("*") 를 추가
- 클라이언트가 ws://localhost:8080/ws/chat 으로 Connection을 연결하고 메시지 통신을 할 수 있다.

#### 5) Websocket 테스트

- Chrome 웹스토어에서 Simple Websocket Client를 검색하여 설치한다.

  - [Simple Websocket Client]: https://chrome.google.com/webstore/search/websocket

- Boot 서버 구동 -> URL : ws://localhost:8080/ws/chat 을 입력하고 Open

- Websocket을 통한 client - server 통신 완료

<hr>

### # 실습 (2)

##### 	* 여러개의 채팅방을 만들어 메시지를 교환하는 실습

##### 	* 클라이언트들은 서버에 접속하면 개별의 Websocket Session을 가지게 된다.

##### 	* 채팅방에 입장 시 클라이언트들의 Websocket Session 정보를 채팅방에 맵핑시켜 보관하고 있으면

##### 	   서버에 전달된 메시지를 특정 방의 Websocket 세션으로 보낼 수 있으므로 개별의 채팅방을 구현할 수 있다.

#### 1) 채팅 메시지 구현

- 채팅 메시지를 주고받기 위한 DTO 생성
  - 채팅방 입장 / 메시지 보내기 두가지 상황을 고려하여 ENTER / TALK 을 enum으로 선언
  - 채팅방 구별 id, 메시지를 보낸 사람, 메시지로 구성

#### 2) 채팅방 구현

- 채팅방을 구현하기 위한 DTO 생성
  - 입장한 클라이언트들의 정보를 가지고있어야 하므로 WebsocketSession 정보 리스트를 멤버 필드로 갖는다.
  - 채팅방 id, 채팅방 이름 구성
- 입장 / 대화하기 기능이 있으므로 handleAction을 통해 분기 처리한다. 
- 입장 시에는 채팅방의 session 정보에 클라이언트의 session리스트에 추가해놓다가 채팅방에 메시지가 도착한 경우 채팅방의 모든 클라이언트 session에 메시지를 발송하여 채팅 기능 구현

#### 3) 채팅 서비스 구현

- 채팅방 생성 / 조회 기능 구현
- 하나의 세션에 메시지 발송을 하는서비스를 구현

#### 4) 채팅 컨트롤러 구현

- 채팅방 생성 / 조회 Rest api로 구현

#### 5) WebSocket Handler 수정

- Web Socket 클라이언트로부터 채팅 메시지를 전달받아 채팅 메시지 객체로 변환
- 전달받은 메시지에 담긴 채팅방 ID로 발송 대상 채팅방 정보를 조회
- 해당 채팅방에 입장해있는 모든 클라이언트들(Websocket session)에게 타입에 따른 메시지 발송

#### 6) 테스트

- 채팅방 생성 
  - Postman으로 요청을 보내 채팅방 생성
    - ex ) roomID : dd8e4018-1ca8-4fb1-bd57-fd3de4c47a61
- 채팅방 입장
  - Chrome에서 Simplewebsocket 실행 -> URL 연결 -> 채팅방 입장을 위한 Json을 구성하여 Websocket으로 발송
    - 이때 해당 roomID의 채팅방에 session 리스트에 클라이언트의 Websocket session을 저장
  - Send 클릭 -> 메시지가 Web Socket Server로 전달, 

- 채팅 메시지 발송



