<template>
  <v-container grid-list-md>
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
    },
    callApi: function(url){
      freadApi.callFreadApi(url,this.setInfo)
    }
  },
  mounted() {
    //this.callApi("get_feed?url=http://gigazine.net/news/rss_2.0/")
  }
};
</script>

<style>
</style>
