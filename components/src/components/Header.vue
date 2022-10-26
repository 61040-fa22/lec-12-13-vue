<template>
  <div id="header">
    <h1>I am the header component</h1>
    <slot>
      <h2>Hello!</h2>
    </slot>

    <input type="text"
      v-bind:value="$store.state.email"
      v-on:input="$store.commit('changeEmail', $event.target.value)" />
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

  h2 {
    color: goldenrod;
  }
</style>
