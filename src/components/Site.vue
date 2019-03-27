<template>
  <!-- タブ内表示 -->
  <v-layout row　wrap>
    <v-flex v-bind:class="xs">
      <v-card>
        <v-toolbar color="grey darken-3" dark>
          <v-toolbar-title>{{ site.title }}</v-toolbar-title>
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
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    xs: String,
    itemNum: Number,
    siteUrl: String
  },
  data: () => ({
    site: { title: "siteTitle", url: "" },
    items: [
      {
        id: "1",
        title:
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        url: "aaa"
      },
      { id: "2", title: "aaa", url: "aaa" },
      { id: "3", title: "aaa", url: "aaa" },
      { id: "4", title: "aaa", url: "aaa" },
      { id: "5", title: "aaa", url: "aaa" }
    ]
  })
};
</script>

<style>
</style>
