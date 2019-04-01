<template>
  <v-container grid-list-md>
    <p>{{ info }}</p>
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
import freadApi from "../freadApi";
export default {
  name: "Login",
  data() {
    return {
      info: ""
    };
  },
  methods: {
    callApi: function(url) {
      freadApi.callFreadApi(url, this.setInfo);
    },
    login: function() {
      let url = process.env.VUE_APP_BASE_API + "/login";
      
      const params = new URLSearchParams();
      params.append("email", this.email);
      params.append("password", this.password);

      axios
        .post(url, params,{headers: { Authorization: "Token " + process.env.VUE_APP_FREAD_TOKEN }})
        .then(response => { this.info = response.data })
        .catch(error => { console.log(error) });
    }
  }
};
</script>

<style>
</style>
