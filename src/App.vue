<template>
  <v-app>
    <v-toolbar app >
      <v-toolbar-title >
        <router-link class="headline" to="/">Fread~自由に作るまとめ~</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/about">"fread!とは?</v-btn>
      <div v-if="auth.userName==null">
        <v-btn flat to="/signup">新規登録</v-btn>
        <v-btn flat to="/login">ログイン</v-btn>
      </div>
      <div v-else>
        <v-btn flat >{{ auth.userName }}</v-btn>
        <v-btn flat @click="logout">ログアウト</v-btn>
      </div>
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
      this.$router.push({ path: 'about' });
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