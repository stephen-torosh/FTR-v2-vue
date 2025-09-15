<script setup>

import { ref } from 'vue';

const browserUrl = ref('')
const contents = ref('')


var cors_api_host = '0.0.0.0:8000';
var cors_api_url = 'https://www.google.com' + cors_api_host + '/';
var slice = [].slice;
var origin = window.location.protocol + '//' + window.location.host;
var open = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function() {
    var args = slice.call(arguments);
    var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
    if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
        targetOrigin[1] !== cors_api_host) {
        args[1] = cors_api_url + args[1];
    }
    return open.apply(this, args);
};


async function browserSubmitFunc() {
  const response = await fetch(browserUrl.value)
  contents.value = await response.text()
}

</script>

<template>
  
  <div class="navbrowser">
    <input id="browser-url" v-model="browserUrl" type="text"/>
    <button id="browser-submit" @click="browserSubmitFunc()">search</button>
  </div>
  <div class="content">
    <div id="browser-contents" v-html="contents" />
    <!-- <iframe src="https://fireinc.pp.ua" width="100%" height="100%" frameborder="0"></iframe> -->
  </div>
</template>

<style scoped>
input {
  height: 70%;
  width: 50%;
}

#browser-contents {
  width: 1200px;
  height: 570px;
  overflow-y: scroll;
}

.content {
  width: 100%;
  height: 100%;
}

.navbrowser {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
}
</style>
