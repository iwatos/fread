<template>
  <v-card>
    <v-toolbar color="grey darken-3" dark>
      <v-toolbar-title>{{ feed.title }}</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-tile v-for="(entry, index) in feed.entries" :key="index">
        <a :href="entry[1][1]" target="_blank">
          <v-list-tile-content>
            <v-list-tile-title v-text="entry[0][1]"></v-list-tile-title>
          </v-list-tile-content>
        </a>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
import freadApi from "../freadApi"
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
    setInfo: function(feed){
      this.feed = feed.data
    }
  },
  mounted() {
    let url = "get_feed?url=" + this.feedUrl
    freadApi.callFreadApi(url,this.setInfo)
  }
};
</script>

<style>
</style>
