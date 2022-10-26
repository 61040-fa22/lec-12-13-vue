<template>
  <div class="counter">
    <Gravatar />

    {{name}}: {{value}}

    <button v-on:click="increment">Increment</button>
    <button v-on:click="decrement">Decrement</button>
  </div>
</template>

<script lang="ts">
import Gravatar from './Gravatar.vue';

export default {
  name: 'Counter',
  props: ['name', 'init'],
  components: {Gravatar},

  data() {
    return {
      value: this.init || Math.floor(Math.random() * 10)
    }
  },
  mounted() {
    this.$emit('init', this.name, this.value);
  },
  methods: {
    increment() {
      this.value++;
      this.$emit('incr', this.name, this.value);
    },
    decrement() {
      this.value--;
      this.$emit('decr', this.name);
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
