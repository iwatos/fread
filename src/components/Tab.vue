<template>
  <v-layout row　wrap>
    <v-flex xs12>
      <v-tabs color="cyan" dark slider-color="yellow">
        <v-tab v-for="(tab, index) in tabs" :key="index" ripple>{{ tab.name }}</v-tab>
        <v-tab-item v-for="(tab, index) in tabs" :key="index">
          <v-layout row wrap>
            <v-flex row v-for="(url, index) in tab.urls" :key="index" xs4>
              <Site :feedUrl="url"></Site>
            </v-flex>
          </v-layout>
        </v-tab-item>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
import Site from "./Site";
export default {
  name: "Tab",
  components: {
    Site
  },
  data: () => ({
    tabs: [
      {
        name: "おもしろ",
        urls: [
          "http://gigazine.net/news/rss_2.0/",
          "http://feeds.lifehacker.jp/rss/lifehacker/index.xml"
          ]
      },
      {
        name: "技術",
        urls: [
          "http://feeds.lifehacker.jp/rss/lifehacker/index.xml",
          "http://littlebigdetails.com/rss"
          ]
      }
    ]
  })
};
</script>

<style>
</style>
