<template>
  <div id="app" class="app-container">
    <transition>
        <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
html {
  font-family: "Microsoft YaHei", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  min-width: 1250px;
  min-height: 600px;
}
.app-container {
  background: #fff;
}
</style>
