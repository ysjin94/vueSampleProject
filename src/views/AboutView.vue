<script setup>

import { useRoute } from 'vue-router'

const route = useRoute();
console.log('route.path', route.path);
</script>

<template>
  <div>
    <h2>
      About View
    </h2>
    <p>{{route.path}}</p>
    <button class="btn btn-primary" @click="$router.push('/')">Go to Home</button>
  </div>
</template>

<style scoped lang="scss">

</style>
