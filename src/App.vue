<template>
  <v-app>
    <v-toolbar app >
      <v-toolbar-title >
        <router-link class="headline text-uppercase" to="/">Fread~自由に作るまとめ~</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/about">"fread!とは?</v-btn>
      <v-btn flat to="/signup">新規登録</v-btn>
      <v-btn flat to="/login">ログイン</v-btn>
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
    return {
      //
    }
  }
}
</script>
