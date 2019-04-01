<template>
  <v-container grid-list-md>
    <p>ログイン</p>
    <form>
      <v-flex xs6>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="15"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
      </v-flex>
      <v-flex xs6>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
      </v-flex>

      <v-btn @click="submit">ログイン</v-btn>
    </form>
  </v-container>
</template>

<script>
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
    }
  }
};
</script>

<style>
</style>
