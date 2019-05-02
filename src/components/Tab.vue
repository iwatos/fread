<template>
  <v-layout row　wrap>
    <v-flex xs12>
      <v-tabs color="black" dark slider-color="white">
        <v-tab v-for="(tab, index) in tabs" :key="index" ripple>{{ tab }}</v-tab>
        <v-tab-item v-for="(tab, tabIndex) in tabs" :key="tabIndex">
          <v-layout row wrap>
            <v-flex row v-for="(feedId, feedIdIndex) in feedIds[tabIndex]" :key="feedIdIndex" xs6>
              <Site :feedId="feedIds[tabIndex][feedIdIndex]"></Site>
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
    urls: "",
    feedId: "",
  }),
  methods: {
    setSample: function() {
      this.tabs = ["おもしろ", "まとめブログ", "IT"];
      this.feedIds = [
        [1,2,3,4,5,6],
        [7,8,9,10,11,12],
        [13,14,15,16,17,18]
      ]
    }
  },
  mounted() {
      this.setSample()
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
