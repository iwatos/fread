<template>
  <v-card>
    <v-toolbar color="grey darken-3" dark>
      <v-toolbar-title>{{ feed.title }}</v-toolbar-title>
    </v-toolbar>
    <v-flex v-for="(entry, index) in feed.entries" :key="index">
      <v-card :href="entry[1][1]" target="_blank" height="3.5em">
        <div class="test">{{ entry[0][1] }}</div>
      </v-card>
    </v-flex>
  </v-card>
</template>

<script>
import freadApi from "../freadApi";
import axios from "axios";
export default {
  props: {
    feedUrl: String,
    itemNum: Number
  },
  data: () => ({
    feed: null,
    items: null
  }),
  methods: {
    setInfo: function(feed) {
      this.feed = feed.data;
    }
  },
  mounted() {
    let url = "get_feed?url=" + this.feedUrl;
    freadApi.callFreadApi(url, this.setInfo);
  }
};
</script>

<style>
div.test {
  font-size: 1em;
  overflow: hidden;
  display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
 
}
</style>
