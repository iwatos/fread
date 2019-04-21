import axios from "axios"

let option = {
  headers: {
    Authorization: "Token " + process.env.VUE_APP_FREAD_TOKEN
  }
}

function getApi(url, callback) {
  axios
    .get(url, option)
    .then(response => { callback(response) })
    .catch(e => { console.log("[Error occurred in API] \n" + e) });
}

function postApi(url, params, callback) {
  axios
    .post(url, params, option)
    .then(response => { callback(response) })
    .catch(e => { console.log("[Error occurred in API] \n" + e) });
}

function getFreadApi(url, callback) {
  let apiUrl = process.env.VUE_APP_BASE_API + url;
  getApi(apiUrl, callback)
}

function postFreadApi(url, params, callback) {
  let apiUrl = process.env.VUE_APP_BASE_API + url;
  postApi(apiUrl, params, callback)
}

export default {
  getFreadApi,
  postFreadApi
}