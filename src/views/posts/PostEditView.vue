<script setup>

import { useRoute, useRouter } from 'vue-router'

const route =useRoute();
const router =useRouter();

const goDetailPage = () =>{
  router.push({name: 'PostDetailView', params: {id: route.params.id}})
}
</script>

<template>
  <div>
    <h2>Edit Post</h2>
    <hr class="my-4"/>
    <form @submit.prevent>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title">
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">Contents</label>
        <textarea class="form-control" id="contents" rows="3"></textarea>
      </div>
      <div class="pt-4">
        <button type="button" class="btn btn-outline-dark me-2" @click="goDetailPage">Cancel</button>
        <button class="btn btn-primary">Edit</button>
      </div>
    </form>
  </div>

</template>

<style scoped lang="scss">

</style>
