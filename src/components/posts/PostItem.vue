<script setup>
  defineProps({
    title : {
      type: String,
      required: true,
    },
    content : {
      type: String,
    },
    createAt : {
      type: [String, Date, Number],
    }
  })
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{content}}</p>
      <p class="text-muted">{{createAt}}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
