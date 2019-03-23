<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <h1>{{ info.data.status }}</h1> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      info: null
    }
  },
  mounted () {
    console.log("BASE_API: " + process.env.VUE_APP_BASE_API)
    //axios.get(process.env.VUE_APP_API_URL_BASE+'users').then(response => (this.info = response))
    //this.apiUrl = process.env.VUE_APP_API_URL_BASE
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this csomponent only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
