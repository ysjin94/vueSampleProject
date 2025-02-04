<script setup>
import PostItem from '@/components/posts/PostItem.vue'
import { ref } from 'vue'
import { getPosts } from '@/api/post.js'
import { useRouter } from 'vue-router'

const posts = ref([]);
const fetchPosts = () => {
  posts.value = getPosts();
}
fetchPosts();

const router =useRouter();
const goPage = (id) =>{
  // router.push('/posts/' + id);
  router.push({
    name: 'PostDetailView',
    params: { id }
  });
}
</script>

<template>
  <div>
    <h2>
      Post List View
    </h2>
    <hr class="my-4"/>
    <div class="row">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem :title="post.title" :contents="post.content" :create-at="post.createAt" @click="goPage(post.id)"></PostItem>

      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>
