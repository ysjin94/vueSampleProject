<script setup>

import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { getPostById, updatePost } from '@/api/post.js'
import PostForm from '@/components/posts/PostForm.vue'

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
    <PostForm v-model:title="form.title" v-model:content="form.content" @submit.prevent="edit">
      <template #actions>
        <button type="button" class="btn btn-outline-dark" @click="goDetailPage">Cancel</button>
        <button class="btn btn-primary">Edit</button>
      </template>
    </PostForm>
  </div>

</template>

<style scoped lang="scss">

</style>
