<template>
  <div class="page-container">
    <div class="page-header">
      <div>Page <strong><i>{{path}}</i></strong> not found (404)</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error",
  data() {
    var path = window.location.search.replace(/\?redirect=/, "");
    return {
      name: 404,
      path: decodeURIComponent(path || "")
    };
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  padding: 30px;
}
</style>
