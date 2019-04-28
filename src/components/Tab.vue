<template>
  <v-layout row　wrap>
    <v-flex xs12>
      <v-tabs color="black" dark slider-color="white">
        <v-tab v-for="(tab, index) in tabs" :key="index" ripple>{{ tab }}</v-tab>
        <v-tab-item v-for="(tab, tab_index) in tabs" :key="tab_index">
          <v-layout row wrap>
            <v-flex row v-for="(url, url_index) in urls[tab_index]" :key="url_index" xs6>
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
import freadApi from "../freadApi";
export default {
  name: "Tab",
  components: {
    Site
  },
  data: () => ({
    info: "",
    tabs: "",
    urls: ""
  }),
  methods: {
    setSample: function() {
      this.tabs = ["おもしろ", "まとめブログ", "IT"];
      this.urls = [
        [
          "http://feeds.lifehacker.jp/rss/lifehacker/index.xml",
          "http://www.huffingtonpost.jp/rss/index.xml",
          "http://portal.nifty.com/rss/headline.rdf",
          "https://rocketnews24.com/feed/",
          "http://gigazine.net/news/rss_2.0/",
          "https://omocoro.jp/?mode=rss"
        ],
        [
          "http://alfalfalfa.com/index.rdf",
          "http://hamusoku.com/index.rdf",
          "http://himasoku.com/index.rdf",
          "http://blog.livedoor.jp/news23vip/index.rdf",
          "http://news4vip.livedoor.biz/index.rdf",
          "http://shikaku2ch.doorblog.jp/index.rdf"
        ],
        [
          "https://jp.techcrunch.com/feed/",
          "http://b.hatena.ne.jp/hotentry/it.rss",
          "https://www.gizmodo.jp/index.xml",
          "https://uxmilk.jp/feed",
          "https://frontendweekly.tokyo/feed",
          "https://postd.cc/feed/"
        ]
      ];
    },
    setFeed: function() {
      this.tabs = this.feed[0];
      this.urls = this.feed[1];
    }
  },
  mounted() {
    if(this.auth.token == null){
      this.setSample() 
    }
    else{
      this.setFeed()
    }
  },
  computed: {
    feed() {
      return this.$store.getters.feed;
    },
    auth() {
      return this.$store.getters.auth;
    }
  },
};
</script>

<style>
</style>
