<template>
  <div>
    <h1>ini quiz</h1>
  </div>
</template>

<script setup>
const props = defineProps(["quiz_id"]);
const quiz_id = ref(props.quiz_id);
</script>
