<script setup>

import { useRoute, useRouter } from 'vue-router'

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const goListPage = () => {
  router.push({name: 'PostList'});
}

const goEditPage = () => {
  router.push({name: 'PostEdit', params: {id}});
}

</script>

<template>
  <div>
    <h2>Title</h2>
    <p>Contents</p>
    <p class="text-muted">2025-01-01</p>
    <hr class="my-4"/>
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">Previous Post </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">Next Post </button>
      </div>

      <div class="col-auto me-auto">
      </div>

      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">List</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">Edit </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">Delete</button>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>
