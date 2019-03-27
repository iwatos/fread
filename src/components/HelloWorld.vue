<template>
  <v-container grid-list-md text-xs-center>
    <Tab/>
    <p>{{ info }}</p>
  </v-container>
</template>

<script>
import axios from "axios";
import Tab from "./Tab";
export default {
  name: "HelloWorld",
  components: {
    Tab
  },
  data: () => ({
    info: ""
  }),
  mounted() {
    axios
      .get(process.env.VUE_APP_BASE_API + "get_feed", {
        headers: { Authorization: "Token " + process.env.VUE_APP_FREAD_TOKEN }
      })
      .then(response => (this.info = response));
  }
};
</script>

<style>
</style>
