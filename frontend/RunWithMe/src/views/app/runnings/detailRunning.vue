<template>
  <div class="detail">
    <h1>{{test.name}}</h1>
    <img v-bind:src="test.poster" class="poster">
    <section>
      <h2>영화정보</h2>
      <dl class="info">
        <dt>감독</dt>
        <dd>{{test.director}}</dd>
        <dt>출연</dt>
        <dd>{{test.actors}}</dd>
        <dt>러닝타임</dt>
        <dd>{{test.time}}</dd>
      </dl>
    </section>
    <section>
      <h2>줄거리</h2>
      <p v-html="test.synopsis" class="synopsis"></p>
    </section>
    <router-link :to="{ name: 'index', params: { id: test.id }}" class="link">돌아가기</router-link>
  </div>
</template>
<script>
export default {
  created: function () {
    var id = this.$route.params.id;
    this.$http.get('/api/tests/${id}')
        .then((response) => {
          this.test = response.data[0]
        })
  },
  data: function () {
    return {
      test: {}
    }
  }
}
</script>