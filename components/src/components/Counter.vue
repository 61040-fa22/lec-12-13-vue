<template>
  <div class="counter">
    Counter: {{value}}

    <button v-on:click="value++">Increment</button>
    <button v-on:click="value--">Decrement</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Counter',
  data() {
    return {
      value: Math.floor(Math.random() * 10)
    }
  }
}
</script>

<style scoped>
  .counter { 
    margin: 20px auto; 
    padding: 20px;
    border: 5px solid #ccc;
    border-radius: 15px;
    width: 350px;
  }

  button {
    margin: 0 10px;
  }
</style>
