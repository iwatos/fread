import axios from "axios"
import Vue from 'vue';

export default new Vue({
  data: {},
  methods: {

    callApi: function (url,callback) {
      console.log()
      axios
        .get(url, {
          headers: { Authorization: "Token " + process.env.VUE_APP_FREAD_TOKEN }
        })
        .then(response => {
          callback(response)
        })
        .catch(e => {
          console.log("Error occurred in Fread API")
          console.log(e)
        });
    },

    callFreadApi: function(url,callback){
      let apiUrl = process.env.VUE_APP_BASE_API + url;
      this.callApi(apiUrl,callback)
    }

  }
});
