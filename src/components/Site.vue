<template>
  <v-card>
    <v-card :href="feed.url" target="_blank">
      <v-toolbar color="grey darken-3" dark>
        <v-toolbar-title >{{ feed.title }}</v-toolbar-title>
      </v-toolbar>
    </v-card>
    <v-flex v-for="(index) in 5" :key="index">
      <v-card :href="feed.entries[index].url" target="_blank" height="3.5em">
        <div class="test">{{ feed.entries[index].title }}</div>
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
      this.feed = feed.data
    }
  },
  mounted() {
    let url = "get_feed?url=" + this.feedUrl
    freadApi.getFreadApi(url, this.setInfo)
  }
}
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