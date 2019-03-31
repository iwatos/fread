<template>
  <v-container grid-list-md text-xs-center>
    <!--
    <Tab/>
    -->
    {{ info }}
  </v-container>
</template>

<script>
import Tab from "./Tab";
import axios from "axios"

export default {
  name: "HelloWorld",
  components: {
    Tab
  },
  data: () => ({
    info: ""
  }),
  mounted() {
    let feedUrl = "http://feeds.feedburner.com/hatena/b/hotentry"
    let url = process.env.VUE_APP_BASE_API + "get_feed?url=" + feedUrl
    axios.get(url, {
        headers: { Authorization: "Token " + process.env.VUE_APP_FREAD_TOKEN }
      })
      .then(response => (this.info = response));
  }
};
</script>

<style>
</style>
