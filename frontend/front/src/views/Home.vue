<template>
  <div class="home">
    <h2>채팅 입장</h2>
    <input type="text" v-model="id" placeholder="ID" />
    <input type="text" v-model="nickname" placeholder="NICKNAME" />
    <br />

    <input type="button" @click="enterChatRoom()" value="ENTER" />
    <input type="button" @click="createUser()" value="CREATE" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data: () => {
    return {
      id: 0,
      nickname: ''
    }
  },
  methods:{
    enterChatRoom(){
       axios({
        method:'post',
        url:'/api/chat/login',
        baseURL:'http://localhost:8080/',
        headers:{'content-type': 'application/json'},
        data : {"id":this.id,"nickname":this.nickname}
      }).then(res=>{
        this.nickname = res.data
          this.$router.push({name:"Roomlist",params:{id : this.id, nickname: this.nickname}})
      }, err=>{
        alert("id, nickname error")
      console.log(err)
      })
    },
    createUser () {
      this.id = 0
      axios({
        method:'post',
        url:'/api/chat/user',
        baseURL:'http://localhost:8080/',
        headers:{'content-type': 'application/json'},
        data : {"id":this.id,"nickname":this.nickname}
      }).then(res=>{
        this.id = res.data.id
        this.nickname = res.data.nickname
        this.$router.push({name:"Roomlist",params:{id : this.id, nickname: this.nickname}})
      }, err=>{
        alert("create user error")
        console.log(err)
      })
    }
  }
};
</script>
