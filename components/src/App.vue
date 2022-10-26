<template>
  <div id="app">
    <Header>
      <h2 v-bind:style="{color: messageColor}">
        {{message}}
        Total = {{total}}
      </h2> 
    </Header>

    <Counter 
      v-for="counter in counters" 
      v-bind="counter"
      v-on:init="handleInit"
      v-on:incr="handleIncr"
      v-on:decr="handleDecr"
      />
  </div>
</template>

<script lang="ts">
import Header from './components/Header.vue';
import Counter from './components/Counter.vue';

export default {
  name: 'app',
  components: {Header, Counter},
  data() {
    return {
      message: 'Hello from the top-level App component!',
      messageColor: 'steelblue',

      total: 0,

      counters: [
        {name: 'Thundercats!', init: -5},
        {name: 'Dexter', init: 7},
        {name: 'Johnny Bravo'},
        {name: 'Birdman'}
      ]
    }
  },
  methods: {
    handleInit(name, value) {
      this.total += value;
    },
    handleIncr(name, value) {
      this.message = `Incremented ${name}`;
      this.messageColor = 'forestgreen';
      this.total++;
    },
    handleDecr(name) {
      this.message = `Decremented ${name}`
      this.messageColor = 'orangered';
      this.total--;
    }
  }
}
</script>

<style>
  #app {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-align: center;
    color: steelblue;
  }
</style>
