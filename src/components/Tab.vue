<template>
  <v-layout row　wrap>
    <v-flex xs12>
      <v-tabs color="cyan" dark slider-color="yellow">
        <v-tab v-for="(tab, index) in tabs" :key="index" ripple>{{ tab.name }}</v-tab>
        <v-tab-item v-for="(tab, index) in tabs" :key="index">
          <v-for ></v-for>
          <Site xs="xs4"/>
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
      { name: "おもしろ" },
      { name: "技術" },
      { name: "エンタメ" },
      { name: "スポーツ" }
    ]
  })
};
</script>

<style>
</style>
