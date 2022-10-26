<template>
  <img v-bind:src="url" width="50" />
</template>

<script lang="ts">
  import md5 from 'md5';

  export default {
    name: 'Gravatar',
    props: ['email'],
    computed: {
      url() {
        const email = this.$store.state.email.trim().toLowerCase();
        return `http://www.gravatar.com/avatar/${md5(email)}`
      }
    }
  }
</script>
