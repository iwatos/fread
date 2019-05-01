<template>
  <v-app>
    <v-toolbar app >
      <v-toolbar-title >
        <router-link class="headline" to="/">Fread</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    <v-toolbar-items >
      <v-btn flat to="/about">Freadとは?</v-btn>
      <!--
      <v-btn v-if="auth.userName==null" flat to="/signup">新規登録</v-btn>
      <v-btn v-if="auth.userName==null" flat to="/login">ログイン</v-btn>
      <v-btn v-if="auth.userName!=null" flat to="/mypage">{{ auth.userName }}</v-btn>
      <v-btn v-if="auth.userName!=null" flat @click="logout">ログアウト</v-btn>
      -->
    </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {}
  },
  methods: {
    logout(){
      this.$store.dispatch('destroy')
      this.$router.push({ path: '/login' });
    }
  },
  computed: {
    auth(){
      return this.$store.getters.auth
    }
  },
}
</script>

<style>
.headline {
  text-decoration: none;
  color: black;
}
</style>