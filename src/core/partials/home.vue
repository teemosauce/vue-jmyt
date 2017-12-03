<template>
  <div>
      This is main page!

      <div class="test">

        <span class="first">HI</span>
        <span>Larry</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "main"
};
</script>


<style lang="scss" scoped>
.test {
  height: 300px;
  border: 1px solid #ccc;

  span.first {
    display: inline-block;
    margin-top: 10px;
    vertical-align: middle;
  }
}
</style>
