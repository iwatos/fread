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
    getFeed: async function(feedUrl) {
      let url = process.env.VUE_APP_BASE_API + "get_feed?url=" + feedUrl;
      await axios
        .get(url, {
          headers: { Authorization: "Token " + process.env.VUE_APP_FREAD_TOKEN }
        })
        .then(response => (this.feed = response.data))
        .catch(console.log("error occured in API"));
    }
  },
  mounted() {
    this.getFeed(this.feedUrl);
  }
};
</script>

<style>
</style>
