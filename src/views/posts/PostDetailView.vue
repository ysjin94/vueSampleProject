<script setup>

import { useRoute, useRouter } from 'vue-router'
import { deletePost, getPostById } from '@/api/post.js'
import { ref } from 'vue'

const router = useRouter();
//const route = useRoute();
//const id = route.params.id;

const props = defineProps({
  id: String
});

const goListPage = () => {
  router.push({name: 'PostList'});
}

const goEditPage = () => {
  router.push({name: 'PostEdit', params:{id : props.id}});
}

const post =ref({});

// const fetchPost = () =>{
//   const data = getPostById(props.id);
//   form.value = data;
// }

const fetchPost = async () =>{
  try{
    const {data} = await getPostById(props.id);
    setPost(data.title,data.content,data.createAt);
  }catch(error){
    console.log(error)
  }
}

const setPost = (title, content, createAt) =>{
  post.value = {
    title:title,
    content: content,
    createAt: createAt,
  }
}
fetchPost();

const remove = async () =>{
  try{
    if(confirm('Are you sure you want to delete this post?') === false){
      return;
    }
    await deletePost(props.id);
    router.push({name: 'PostList'});

  }catch(error){
    console.error(error);
  }
}
</script>

<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{post.content}}</p>
    <p class="text-muted">{{ post.createAt }}</p>
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
      <div class="col-auto" @click="remove">
        <button class="btn btn-outline-danger">Delete</button>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>
