<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { createPost } from '@/api/post.js'
import PostForm from '@/components/posts/PostForm.vue'


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
    <PostForm v-model:title="form.title" v-model:content="form.content" @submit.prevent="save">
      <template #actions>
        <button type="button" class="btn btn-outline-dark me-2" @click="goListPage" >List</button>
        <button class="btn btn-primary">Save</button>
      </template>
    </PostForm>
  </div>

</template>

<style scoped lang="scss">

</style>
