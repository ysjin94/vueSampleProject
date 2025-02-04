<script setup>

  import { useRouter } from 'vue-router'

  const router = useRouter();

  const goPage = () => {
    router.push('/posts/create');
  }
</script>

<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark fixed-top">
        <div class="container">
          <a class="navbar-brand fw-bold" href="#">Vue3</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <RouterLink class= "nav-link"  active-class="active" to="/"> Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class= "nav-link" active-class="active" to="/about"> About</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class= "nav-link" active-class="active" to="/posts"> Post </RouterLink>
              </li>
            </ul>
            <div class="d-flex">
              <button class="btn btn-outline-light" type="button" @click="goPage" > Post </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped lang="scss">

</style>
