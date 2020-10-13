<template>
  <div class="room">
    <h1>{{title}}</h1>
    <hr />
    <div v-for="(m, idx) in msg" :key="idx">
      <div v-bind:class="m.style">
      <h5 style="margin:3px">
        {{m.senderNickname}}
        </h5>
      {{m.content}}
      </div>
    </div>
    <hr />
    <input type="text" v-model="content" placeholder="보낼 메세지" size="100" />
    <button @click="sendMessage()"> SEND</button>
  </div>
</template>

<script>
import axios from 'axios'
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'


export default {
  name: "Room",
    data: () => {
    return {
      id: -1,
      nickname: '',
      title:'',
      roomid:-1,
      idx:0,
      msg:[],
      content:"",
      stompClient:null
    }
  },
  created(){
    this.id = this.$route.params.id
    this.roomid = this.$route.params.roomid
    this.nickname = this.$route.params.nickname

     if (this.id == -1 || typeof this.id === "undefined") {
       this.$router.push({ name: "Home" });
    }
     if (this.roomid == -1 || typeof this.roomid === "undefined") {
       this.$router.push({ name: "Home" });
    }
  // 방 제목 가져오기
    axios({
        method:'get',
        url:'/api/chat/room/'+this.roomid,
        baseURL:'http://localhost:8080/'
      }).then(res=>{
        this.title = res.data
      }, err=>{
        console.log(err)
        this.$router.push({ name: "Home" });
      })

  // 채팅방 내용 불러오기
       axios({
         method:'get',
        url:'/api/chat/room/message/'+this.roomid+"?page="+this.idx,
        baseURL:'http://localhost:8080/'
      }).then(res=>{
        this.msg = []
        for(let i=res.data.length-1; i>-1; i--){
          let m={
            'senderNickname':res.data[i].senderNickname,
            'content':res.data[i].content,
            'style': res.data[i].senderId == this.id ? 'myMsg':'otherMsg'
          }
          this.msg.push(m)
        }
      }, err=>{
        console.log(err)
        alert("error : 새로고침하세요")
      })
    // socket 연결
     let socket = new SockJS('http://localhost:8080/ws')
    this.stompClient = Stomp.over(socket)
    this.stompClient.connect({}, frame=>{
      console.log("success", frame)
      this.stompClient.subscribe("/sub/"+this.roomid, res=>{
        let jsonBody = JSON.parse(res.body)
             let m={
            'senderNickname':jsonBody.senderNickname,
            'content': jsonBody.content,
            'style': jsonBody.senderId == this.id ? 'myMsg':'otherMsg'
          }
          this.msg.push(m)
      })
    }, err=>{
console.log("fail", err)
    })
  },
  methods:{
    sendMessage(){
     if(this.content.trim() !='' && this.stompClient!=null) {
        let chatMessage = {
          'content': this.content,
          'chatroomId' : this.roomid,
          'senderNickname':this.nickname,
          'senderId': this.id,
          'id':"0"
        }
        this.stompClient.send("/pub/message", JSON.stringify(chatMessage),{})
   
        this.content=''
    }
    }
  }
};
</script>
<style scoped>
.myMsg{
text-align: right;
color : gray;
}
.otherMsg{
  text-align: left;
}
</style>
