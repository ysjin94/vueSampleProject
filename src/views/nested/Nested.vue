<script setup>

</script>

<template>
  <ul class="nav">
    <li class="nav-item">
      <RouterLink class="nav-link active" active-class="active" to="/nested/one"> Nested One</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link active" active-class="active" to="/nested/two"> Nested Two</RouterLink>
    </li>
  </ul>
  <hr class="my-4">
  <RouterView></RouterView>
</template>

<style scoped lang="scss">

</style>
