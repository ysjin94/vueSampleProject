<script setup>
defineProps({
  title: String,
  content: String,
});

defineEmits(['update:title', 'update:content']); // 'submit' 추가
</script>

<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input :value="title" @input="$emit('update:title', $event.target.value)" type="text" class="form-control" id="title" placeholder="Title">
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Contents</label>
        <textarea :value="content" @input="$emit('update:content', $event.target.value)" class="form-control" id="content" rows="3"></textarea>
      </div>
      <div class="d-flex gap-2 me-2">
        <slot name="actions"></slot>
      </div>
    </form>
  </div>
</template>
