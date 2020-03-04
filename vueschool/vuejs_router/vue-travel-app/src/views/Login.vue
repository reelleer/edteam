<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form">
      <label for="">Username</label>
      <input v-model="username" type="text" class="input">
      <label for="">Password</label>
      <input v-model="password" type="text" class="input">
      <button @click="login" class="btn">Login</button>
    </div>
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  data(){
    return {
      username: null,
      password: null
    }
  },
  methods: {
    login() {
      // Authenticate against API
      store.user = this.username;
      const redirectPath = this.$route.query.redirect || "/";
      this.$router.push(redirectPath);
      //this.$router.push('/user');
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
</style>