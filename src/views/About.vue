<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ auth }}</p>
    <p>{{ feed }}</p>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import freadApi from "../freadApi";
export default {
  name: "About",
  data() {
    return {
    };
  },
  mounted() {
    const params = new URLSearchParams();
    params.append("name", this.$store.getters.auth.userName);
    freadApi.postFreadApi("/user/get_feed", params, function(param) {
      this.$store.dispatch("setFeed", param.data)
    }.bind(this));
  },
  computed: {
    auth() {
      return this.$store.getters.auth;
    },
    feed() {
      return this.$store.getters.feed;
    }
  }
};
</script>
