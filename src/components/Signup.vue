<template>
  <v-container grid-list-md>
    <p>新規登録</p>
    <form @submit.prevent="signup">
      <v-flex xs6>
        <v-text-field
          v-model="name"
          label="name"
          required
        ></v-text-field>
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
      <v-btn type="submit">新規登録</v-btn>
    </form>
  </v-container>
</template>

<script>
import axios from "axios";
import Cookies from 'js-cookie';
import freadApi from "../freadApi";
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    signup() {
      const params = new URLSearchParams();
      params.append("name", this.name);
      params.append("email", this.email);
      params.append("password", this.password);
      freadApi.postFreadApi("/signup",params,this.setInfo)
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
