<template>
  <v-container grid-list-md>
    <p>ログイン</p>
    <form @submit.prevent="login">
      <v-flex xs6>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="email"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :error-messages="passwordErrors"
          label="password"
          type="password"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
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
      count: "",
      cookies: "cookies"
    };
  },
  methods: {
    login: function() {
      const params = new URLSearchParams();
      params.append("email", this.email);
      params.append("password", this.password);
      freadApi.postFreadApi("user/get_feed",params,this.setInfo)
      //freadApi.postFreadApi("/login",params,this.setInfo)
      //freadApi.postFreadApi("/login",params,this.renderToUserPage)
    },


    setInfo: function (info) {
      this.info = info.data
      /*
      let key = String(this.info[1])
      let value = String(this.info[2])
      Cookies.set(key,value,{ expires: 7 });
      this.cookies = Cookies.get(key)
      */
    },

    renderToUserPage: function(str) {
      console.log(str)
      if(str.data[0] == "LoginSuccess"){
        this.$router.push("/user/" + str.data[1])
      }
      else{
        this.info = "Login failed"
      }
    }
  }
};
</script>

<style>
</style>
