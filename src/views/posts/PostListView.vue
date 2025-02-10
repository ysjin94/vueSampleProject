<script setup>
import PostItem from '@/components/posts/PostItem.vue'
import { computed, ref, watchEffect } from 'vue'
import { getPosts } from '@/api/post.js'
import { useRouter } from 'vue-router'
import PostDetailView from '@/views/posts/PostDetailView.vue'

const posts = ref([]);
const params = ref({
  _sort : 'createAt',
  _order : 'desc',
  _limit: '3',
  _page: 1,
  title_like : '',
});
//pagination
const totalCount = ref(0);
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit));

const fetchPosts = async () => {
//  posts.value = getPosts();
    try{
//      console.log('Request Params:', params.value);
//  {data} => response.data 동일하다
      const { data, headers } = await getPosts(params.value);
//   console.dir(data);
      posts.value = data;
      totalCount.value = headers['x-total-count']
//      console.log(headers['x-total-count']);
    }catch(error){
      console.error(error);
    }


  // getPosts().then(response => {
  //   console.log(response.data);
  //   posts.value = response.data;
  // }).catch(error => {
  //   console.log(error);
  // })

}
fetchPosts();

watchEffect(fetchPosts);

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
    <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input v-model="params.title_like" type="text" class="form-control">
        </div>
        <div class="col">
          <select v-model="params._limit" class="form-select">
            <option value="3">3 Lists</option>
            <option value="6">6 Lists</option>
            <option value="9">9 Lists</option>
          </select>
        </div>
      </div>
    </form>



    <hr class="my-4"/>
    <div class="row">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem :title="post.title" :contents="post.content" :create-at="post.createAt" @click="goPage(post.id)"></PostItem>
      </div>
    </div>

    <nav class="mt-5" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{disabled : !(params._page > 1)}"><a class="page-link" href="#" @click.prevent="--params._page">Previous</a></li>
        <li v-for="page in pageCount" :key="page" class="page-item " :class="{active: params._page === page}"><a class="page-link" href="#" @click.prevent="params._page = page">{{page}}</a></li>
        <li class="page-item" :class="{disabled : !(params._page < pageCount)}"><a class="page-link" href="#" @click.prevent="++params._page">Next</a></li>
      </ul>
    </nav>

    <hr class="my-5"/>
<!--   Number-->
<!--    <PostDetailView :id="1"></PostDetailView>-->
<!--    String-->
    <PostDetailView id="1"></PostDetailView>
  </div>

</template>

<style scoped lang="scss">

</style>
