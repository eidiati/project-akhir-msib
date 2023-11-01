<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li v-if="Number(currentPage) !== 1" class="page-item">
        <NuxtLink
          class="page-link"
          :to="setPrev(currentPage)"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </NuxtLink>
      </li>

      <template v-for="number in pageNumbers" :key="number">
        <li
          :class="
            Number(currentPage) === number ? 'page-item active' : 'page-item'
          "
        >
          <NuxtLink class="page-link" :to="setRoute(number)">{{
            number
          }}</NuxtLink>
        </li>
      </template>

      <li v-if="Number(currentPage) !== pageNumbers" class="page-item">
        <NuxtLink
          class="page-link"
          :to="setNext(currentPage)"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps(["pageNumbers", "currentPage", "params"]);
const pageNumbers = props.pageNumbers;
const currentPage = props.currentPage;
const params = props.params;

function setRoute(number) {
  return `/archive/${params}-page-${number}`;
}
function setPrev(number) {
  return `/archive/${params}-page-${Number(number) - 1}`;
}
function setNext(number) {
  return `/archive/${params}-page-${Number(number) + 1}`;
}
</script>
