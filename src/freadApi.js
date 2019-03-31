import axios from "axios"

export default {
    getFeed: async function(feedUrl){
        let info = null
        let url = process.env.VUE_APP_BASE_API + "get_feed?url=" + feedUrl;
        await axios
          .get(url, {
            headers: { Authorization: "Token " + process.env.VUE_APP_FREAD_TOKEN }
          })
          .then(response => (info = response.data))
          .catch(console.log("error occured in API"))
    }

}
