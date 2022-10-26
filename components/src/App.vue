<template>
  <div id="app">
    <Header />

    <h2>
      Hello from the top-level App component!
    </h2> 

    <Counter />
    <Counter />
    <Counter />
    <Counter />
  </div>
</template>

<script lang="ts">
import Header from './components/Header.vue';
import Counter from './components/Counter.vue';

export default {
  name: 'app',
  components: {Header, Counter}
}
</script>

<style>
  #app {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-align: center;
    color: steelblue;
  }
</style>
