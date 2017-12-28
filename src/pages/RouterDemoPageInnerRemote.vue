<template>
  <div class="page-content-inner page-content-inner--remote">
    <div v-if="!postBody">Loading data from {{remoteApiUrl}}...</div>
    <div v-if="postBody">
      <h2>inner page with data from <a :href="remoteApiUrl" target="_blank">{{remoteApiUrl}}</a></h2>
      <br>
      <div class="remote-data">
        <div>postId: {{postId}}</div>
        <div>postTitle: {{postTitle}}</div>
        <div>postBody: {{postBody}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      remoteApiUrl: 'https://jsonplaceholder.typicode.com/posts/1',
      postId: '',
      postTitle: '',
      postBody: ''
    }
  },

  methods: {
    getRemoteData: function() {
      var that = this;
      axios.get(this.remoteApiUrl)
         .then(function(response) {
           that.postId = response.data.id;
           that.postTitle = response.data.title;
           that.postBody = response.data.body;
         })
         .catch(function(err) {
           that.postBody = err;
           console.log(err);
         });
    }
  },

  created: function() {
    this.getRemoteData();
  }
}
</script>

<style scoped>
.remote-data {
  line-height: 1.4;
}
</style>



