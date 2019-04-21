<template>
  <v-container grid-list-md>
    <p>ログイン</p>
    <form @submit.prevent="login">
      <v-flex xs6>
        <v-text-field
          v-model="email"
          label="email"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="password"
          type="password"
          required
        ></v-text-field>
      </v-flex>
      <v-btn type="submit">ログイン</v-btn>
    </form>
  </v-container>
</template>

<script>
import axios from "axios";
import Cookies from 'js-cookie';
import freadApi from "../freadApi";
export default {
  name: "Login",
  data() {
    return {
      info: "info",
      email: "test.com",
      password: "test"
    };
  },
  methods: {
    login() {
      const params = new URLSearchParams();
      params.append("email", this.email);
      params.append("password", this.password);
      freadApi.postFreadApi("/login",params,this.setInfo)
    },
    setInfo(info) {
      console.log(info.data)
      if(info.data[0] == true){
        let data = {userName:info.data[1], token:info.data[2]}
        this.$store.dispatch('create', data)
        this.getFeed()
        //this.$router.push("/")
      } else {
        console.log("Login failed")
      }
    },
    getFeed(){
      const params = new URLSearchParams();
      freadApi.postFreadApi("/login",params,function(param){
         this.$store.dispatch('createFeed', param)
        })
    }
  },
  computed: {
    auth(){
      return this.$store.getters.auth
    }
  }
};
</script>

<style>
</style>
