import axios from "axios"

function callApi(url, callback) {
  console.log()
  axios
    .get(url, {
      headers: { Authorization: "Token " + process.env.VUE_APP_FREAD_TOKEN }
    })
    .then(response => {
      callback(response)
    })
    .catch(e => {
      console.log("Error occurred in API")
      console.log(e)
    });
}

function callFreadApi(url, callback) {
  let apiUrl = process.env.VUE_APP_BASE_API + url;
  callApi(apiUrl, callback)
}

export default {callFreadApi}