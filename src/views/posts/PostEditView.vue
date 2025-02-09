<script setup>

import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { getPostById, updatePost } from '@/api/post.js'

const route =useRoute();
const router =useRouter();

const goDetailPage = () =>{
  router.push({name: 'PostDetailView', params: {id: route.params.id}})
}

const id = route.params.id;
const form =ref({
  title : null,
  content : null,
});

const fetchPost = async () =>{
  const {data} = await getPostById(id);
  console.dir(data);
  setForm(data.title,data.content);
}

const setForm = (title, content) =>{
  form.value = {
    title:title,
    content: content,
  }
}

fetchPost();

const edit = async () => {
  try{
    await updatePost(id, {...form.value});
    router.push({name: 'PostDetailView', params: {id}});
  }catch(e){
    console.log(e);
  }
}
</script>

<template>
  <div>
    <h2>Edit Post</h2>
    <hr class="my-4"/>
    <form @submit.prevent="edit">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input v-model="form.title" type="text" class="form-control" id="title" placeholder="Title">
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">Contents</label>
        <textarea v-model="form.content" class="form-control" id="contents" rows="3"></textarea>
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
