<template>
  <div id="router">
    <p>
      <router-link to="/intro">
        Go to Hello Greeter
      </router-link>
    </p>
    <p>
      <router-link to="/counters">
        Go to Counters
      </router-link>
    </p>

    <router-view></router-view>
  </div>
</template>

