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
    <p>{{ info }}</p>
  </v-container>
</template>

<script>
import axios from "axios";
import freadApi from "../freadApi";
export default {
  name: "Login",
  data() {
    return {
      info: "",
      count: 0
    };
  },
  methods: {
    login: function() {
      const params = new URLSearchParams();
      params.append("email", this.email);
      params.append("password", this.password);
      freadApi.postFreadApi("/login",params,this.renderToUserPage)
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
