<template>
  <div id="header">
    <h1>I am the header component</h1>
    <h2>Hello!</h2>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Header'
}
</script>

<style scoped>
  #header {
    border: 5px solid #ccc;
    border-radius: 15px;
  }

  h1 {
    color: goldenrod;
  }
</style>
