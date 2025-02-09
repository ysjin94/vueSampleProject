<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { createPost } from '@/api/post.js'

const route = useRoute();
const routers = useRouter();

const goListPage = () =>{
  routers.push({name:"PostList", id:route.params.id});
}

const form =ref({
  title : null,
  content : null,
  }
)

const save = ()=>{
  try{
    const data = {
      ...form.value, // form.value 객체의 모든 속성을 펼쳐서 data 객체에 추가
      createAt: Date.now()
    };
    createPost(data);
    routers.push({name:"PostList"});
  }catch(error){
    console.log(error);
  }
}
</script>

<template>
  <div>
    <h2>Create Post</h2>
    <hr class="my-4"/>
    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input v-model="form.title" type="text" class="form-control" id="title" placeholder="Title">
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">Contents</label>
        <textarea v-model="form.content" class="form-control" id="contents" rows="3"></textarea>
      </div>
      <div class="pt-4">
        <button type="button" class="btn btn-outline-dark me-2" @click="goListPage" >List</button>
        <button class="btn btn-primary">Save</button>
      </div>
    </form>
  </div>

</template>

<style scoped lang="scss">

</style>
