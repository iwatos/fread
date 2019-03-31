<template>
  <v-container grid-list-md text-xs-center>
    <Tab/>
    {{ info }}
  </v-container>
</template>

<script>
import freadApi from "../freadApi"
import Tab from "./Tab";

export default {
  name: "HelloWorld",
  components: {
    Tab
  },
  data() {
    return {
      info: ""
    }
  },
  methods: {
    setInfo: function(info){
      this.info = info
    }
  },
  mounted() {
    let url = "get_feed?url=http://gigazine.net/news/rss_2.0/"
    freadApi.callFreadApi(url,this.setInfo)
  }
};
</script>

<style>
</style>
