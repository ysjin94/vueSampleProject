<script setup>

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
                <RouterLink class= "nav-link active" to="/"> Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class= "nav-link active" to="/about"> About</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped lang="scss">

</style>
