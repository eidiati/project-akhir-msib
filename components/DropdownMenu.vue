<template>
  <ul class="dropdown-menu">
    <template v-for="menu in menuData" :key="menu.menu_id">
      <template v-if="menu.parent_id === menuId">
        <li v-if="menu.menu_sequence > 1" class="dropdown-submenu">
          <NuxtLink class="dropdown-item" :to="'/kategori' + menu.menu_url">{{
            menu.menu_name
          }}</NuxtLink>
          <DropdownMenu :menuData="menuData" :menuId="menu.menu_id" />
        </li>
        <li v-else>
          <NuxtLink class="dropdown-item" :to="'/kategori' + menu.menu_url">
            {{ menu.menu_name }}
          </NuxtLink>
        </li>
      </template>
    </template>
  </ul>
</template>

<script setup>
defineProps({
  menuData: Array,
  menuId: Number,
});
</script>
