<template>
  <ul class="dropdown-menu">
    <template v-for="(menu, i) in submenu" :key="i">
      <li v-if="menu.submenu" class="dropdown-submenu">
        <NuxtLink class="dropdown-item" :to="menu.link">{{
          menu.label
        }}</NuxtLink>
        <DropdownMenu :submenu="menu.submenu" />
      </li>
      <li v-else>
        <NuxtLink class="dropdown-item" :to="menu.link">
          {{ menu.label }}
        </NuxtLink>
      </li>
    </template>
  </ul>
</template>

<script setup>
defineProps({
  submenu: Array,
});
</script>
