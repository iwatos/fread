<template>
  <div class="about">
    <h1>現在実装中のため編集内容は反映されません</h1>
    <p>{{ userFeeds }}</p>
      <!-- テーブルヘッダー表示　-->
      <v-toolbar flat color="white">
        <v-toolbar-title>Your Feeds</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="primary" dark class="mb-2" @click="createTag()">NewTag</v-btn>
      </v-toolbar>

      <!-- データテーブル表示　-->
      <div v-for="(feed,tagIndex) in feeds" :key="tagIndex">
        <v-toolbar flat color="grey">
          <v-toolbar-title>{{ feed.tag }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark class="mb-2" @click="createItem(tagIndex)">NewItem</v-btn>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2" @click="editTag(tagIndex)">edit</v-icon>
              <v-icon small @click="deleteTag(tagIndex)">delete</v-icon>
            </td>
        </v-toolbar>
        <v-data-table :items="feed.sites" class="elevation-1" hide-headers hide-actions>
          <template v-slot:items="props">
            <td>{{ props.index }}</td>
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.url }}</td>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2" @click="editItem(tagIndex,props.index)">edit</v-icon>
              <v-icon small @click="deleteItem(tagIndex,props.index)">delete</v-icon>
            </td>
          </template>
        </v-data-table>
      </div>

      <!-- アイテムダイアログ内容　=-->
      <v-dialog v-model="itemDialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ itemFormTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.url" label="URL"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="itemDialogClose">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="itemDialogSave">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- タグダイアログ内容　=-->
      <v-dialog v-model="tagDialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ tagFormTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedTag.tag" label="name"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="tagDialogClose">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="tagDialogSave">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import freadApi from "../freadApi";
export default {
  name: "About",
  data: () => ({
    feeds: [],
    tagDialog: false,
    itemDialog: false,
    editedTagIndex: -1,
    editedItemIndex: -1,
    editedItem: {
      name: "",
      url: ""
    },
    defaultItem: {
      name: "",
      url: ""
    },
    editedTag: {
      name: "",
      sites: []
    },
    defaultTag: {
      name: "",
      sites: []
    },
  }),

  computed: {
    tagFormTitle() {
      return this.editedTagIndex === -1 ? "New Tag" : "Edit Tag";
    },
    itemFormTitle() {
      return this.editedItemIndex === -1 ? "New Item" : "Edit Item";
    },
    userFeed() {
      return this.$store.getters.feeds
    }
  },

  watch: {
    itemDialog(val) {
      val || this.close();
    },
    tagDialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.feeds = [
        {
          tag: "tech",
          sites: [
            {
              name: "Frozen Yogurt",
              url: "bbb"
            },
            {
              name: "Ice cream sandwich",
              url: "aaa"
            }
          ]
        },
        {
          tag: "foods",
          sites: [
            {
              name: "meet",
              url: "bbb"
            },
            {
              name: "fish",
              url: "aaa"
            }
          ]
        }
      ];
    },

    editTag(tagIndex) {
      this.editedTagIndex = tagIndex;
      this.tagDialog = true;
    },
    createTag() {
      this.editedTagIndex = -1;
      this.tagDialog = true;
    },
    deleteTag(tagIndex) {
      confirm("Are you sure you want to delete this tag?") &&
        this.feeds.splice(tagIndex, 1);
    },
    tagDialogClose() {
        this.tagDialog = false;
        this.editedTag = Object.assign({}, this.defaultTag);
        this.editedTagIndex = -1;
    },
    tagDialogSave() {
        if (this.editedTagIndex > -1) {
          this.feeds[this.editedTagIndex].tag = this.editedTag.tag
        } else {
          this.feeds.push(this.editedTag);
        }
      this.tagDialogClose();
    },


    createItem(tagIndex) {
      this.editedTagIndex = tagIndex;
      this.editedItemIndex = -1;
      this.editedItem = Object.assign({}, this.defaultItem);
      this.itemDialog = true;
    },

    editItem(tagIndex, itemIndex) {
      this.editedTagIndex = tagIndex;
      this.editedItemIndex = itemIndex;
      this.editedItem = Object.assign(
        {},
        this.feeds[tagIndex].sites[itemIndex]
      );
      this.itemDialog = true;
    },
    deleteItem(tagIndex, itemIndex) {
      confirm("Are you sure you want to delete this item?") &&
        this.feeds[tagIndex].sites.splice(itemIndex, 1);
    },

    itemDialogClose() {
        this.itemDialog = false;
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedItemIndex = -1;
    },

    itemDialogSave() {
        if (this.editedItemIndex > -1) {
          Object.assign(this.feeds[this.editedTagIndex].sites[this.editedItemIndex],this.editedItem);
        } else {
          this.feeds[this.editedTagIndex].sites.push(this.editedItem);
        }
      this.itemDialogClose();
    },

  },
  mounted() {
    const params = new URLSearchParams();
    params.append("name", this.$store.getters.auth.userName);
    freadApi.postFreadApi(
      "/user/get_feed",
      params,
      function(param) {
        this.$store.dispatch("setFeed", param.data);
      }.bind(this)
    );
  }
};
</script>
