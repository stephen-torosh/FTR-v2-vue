<script>
const webpage = document.getElementById('webpage')
</script>

<template>
  <div class="navbrowser">
    <input type="text" />
    <button>search</button>
  </div>
  <div class="content">
    <iframe id="webpage" src="https://fireinc.pp.ua" frameborder="0"></iframe>
  </div>
</template>

<style scoped>
input {
  height: 70%;
  width: 50%;
}

iframe {
  width: 100%;
  height: 100%;
}

.content {
  width: 100%;
  height: calc(100% - 30px);
}

.navbrowser {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
}
</style>
