<template>
  <div class="header-nav-bar bg-primary">
    <div class="container">
      <div class="header-row p-relative">
        <div class="header-column">
          <div class="header-row">
            <div class="header-colum order-2 order-lg-1">
              <div class="header-row">
                <div
                  class="header-nav header-nav-stripe header-nav-divisor header-nav-force-light-text justify-content-start"
                >
                  <div
                    class="header-nav-main header-nav-main-square header-nav-main-effect-1 header-nav-main-sub-effect-1"
                  >
                    <nav class="collapse">
                      <ul class="nav nav-pills align-items-center" id="mainNav">
                        <li class="dropdown dropdown-full-color dropdown-light">
                          <NuxtLink
                            class="dropdown-item dropdown-toggle"
                            to="/"
                          >
                            beranda
                          </NuxtLink>
                        </li>
                        <template v-for="(menu, i) in menus.data" :key="i">
                          <AnimationSkleton
                            v-if="menus.loading"
                            width_="70px"
                            height_="12px"
                            class_="d-inline-block m-2"
                          />
                          <li
                            v-else
                            v-if="menu.parent_id < 1"
                            class="dropdown dropdown-full-color dropdown-light"
                          >
                            <NuxtLink
                              class="dropdown-item dropdown-toggle"
                              :to="'/kategori' + menu.menu_url"
                            >
                              {{ menu.menu_name }}
                            </NuxtLink>
                            <DropdownMenu
                              v-if="menu.menu_sequence > 1"
                              :menuData="menus.data"
                              :menuId="menu.menu_id"
                            />
                          </li>
                        </template>
                        <li class="dropdown dropdown-full-color dropdown-light">
                          <NuxtLink
                            class="dropdown-item dropdown-toggle"
                            to="/"
                          >
                            index berita
                          </NuxtLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <button
                    class="btn header-btn-collapse-nav"
                    data-bs-toggle="collapse"
                    data-bs-target=".header-nav-main nav"
                  >
                    <i class="fas fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
            <!-- search bar -->
            <div class="header-column order-1 order-lg-2">
              <div class="header-row justify-content-end">
                <div
                  class="header-nav-features header-nav-features-no-border w-75 w-auto-mobile d-none d-sm-flex"
                >
                  <div class="simple-search input-group w-100">
                    <input
                      class="form-control border-0 text-1"
                      :value="keyword"
                      v-on:input="(e) => (keyword = e.target.value)"
                      @keydown.enter="handleSearch"
                      placeholder="Search..."
                    />
                    <button class="btn btn-light" @click="handleSearch">
                      <i class="fa fa-search header-nav-top-icon"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
async function handleSearch() {
  if (keyword.value.length < 1) {
    return null;
  } else {
    await navigateTo(`/search/${keyword.value}`);
    keyword.value = "";
  }
}

const keyword = ref("");
const menus = ref({
  data: 6,
  loading: true,
});
const { getData } = await useFetchData();

onMounted(async () => {
  menus.value = await getData("menu");
});
</script>
