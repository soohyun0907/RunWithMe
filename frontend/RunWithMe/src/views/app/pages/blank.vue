<style  scoped>
.app-footer {
    margin-top: 2rem;
    background: #eee;
    padding: 1.25rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: none;
}
</style>
<template>
  <div class="main-content">
    <breadcumb :page="'Blank'" :folder="'Pages'" />
    <div class="container" id="app" v-cloak>
        <div class="row">
            <div class="col-md-12">
                <h3>채팅방 리스트</h3>
            </div>
        </div>
        <div class="input-group">
            <div class="input-group-prepend">
                <label class="input-group-text">방제목</label>
            </div>
            <input type="text" class="form-control" v-model="room_name" v-on:keyup.enter="createRoom">
            <div class="input-group-append">
                <button class="btn btn-primary" type="button" @click="createRoom">채팅방 개설</button>
            </div>
        </div>
        <ul class="list-group">
            <li class="list-group-item list-group-item-action" v-for="item in chatrooms" v-bind:key="item.roomId" v-on:click="enterRoom(item.roomId)">
                {{item.name}}
            </li>
        </ul>
    </div>
    
  </div>
</template>
<script>

</script>
