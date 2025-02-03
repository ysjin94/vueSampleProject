<script setup>

import { useRouter } from 'vue-router'

const router = useRouter();
const goAboutPage = () =>{
  router.push('/about');
}
</script>

<template>
  <div>
    <h2>
      Home View
    </h2>
    <p>{{$route.path}}</p>
    <button class="btn btn-primary" @click=goAboutPage>Go to About</button>
  </div>

</template>

<style scoped lang="scss">

</style>
