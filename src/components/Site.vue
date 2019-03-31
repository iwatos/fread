<template>
  <v-card>
    <v-toolbar color="grey darken-3" dark>
      <v-toolbar-title>{{ feedSite.data.title }}</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-tile v-for="(item, index) in items" :key="index">
        <a href>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
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
    feedSite: null,
    items: []
  }),
  mounted() {
    /*
    let url = process.env.VUE_APP_BASE_API + "get_feed?url=" + this.feedUrl
    axios.get(url, {
        headers: { Authorization: "Token " + process.env.VUE_APP_FREAD_TOKEN }
      })
      .then(response => (this.feedSite = response));
      */
  }
};
</script>

<style>
</style>
