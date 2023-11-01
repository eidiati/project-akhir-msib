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
                        <template v-for="(menu, i) in menus.data" :key="i">
                          <AnimationSkleton
                            v-if="menus.loading"
                            width_="70px"
                            height_="12px"
                            class_="d-inline-block m-2"
                          />
                          <li
                            v-else
                            class="dropdown dropdown-full-color dropdown-light"
                          >
                            <NuxtLink
                              class="dropdown-item dropdown-toggle"
                              :to="menu.menu_link"
                            >
                              {{ menu.menu_name }}
                            </NuxtLink>
                            <DropdownMenu :submenu="menu.submenu" />
                          </li>
                        </template>
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
const menus = ref({
  data: 7,
  loading: true,
});
const keyword = ref("");
// const dataMenu=[
//   {
//     menu_name: "Beranda",
//     menu_link: "/",
//   },
//   {
//     menu_name: "Pendidikan",
//     menu_link: "/",
//     submenu: [
//       {
//         menu_name: "Level 1 dropdown",
//         submenu: [
//           {
//             menu_name: "Level 2",
//             menu_link: "/",
//           },
//           {
//             menu_name: "Level 2",
//             menu_link: "/",
//           },
//           {
//             menu_name: "Level 2 dropdown",
//             submenu: [
//               {
//                 menu_name: "Level 3",
//                 menu_link: "/",
//               },
//             ],
//           },
//         ],
//       },
//       { menu_name: "Level 1", menu_link: "/" },
//     ],
//   },
//   {
//     menu_name: "Bisnis",
//     menu_link: "/",
//     submenu: [
//       {
//         menu_name: "Level 1 dropdown",
//         submenu: [
//           {
//             menu_name: "Level 2",
//             menu_link: "/",
//           },
//           {
//             menu_name: "Level 2",
//             menu_link: "/",
//           },
//           {
//             menu_name: "Level 2 dropdown",
//             submenu: [
//               {
//                 menu_name: "Level 3",
//                 menu_link: "/",
//               },
//             ],
//           },
//         ],
//       },
//       { menu_name: "Level 1", menu_link: "/" },
//     ],
//   },
//   {
//     menu_name: "Wisata",
//     menu_link: "/",
//     submenu: [
//       {
//         menu_name: "Level 1 dropdown",
//         submenu: [
//           {
//             menu_name: "Level 2",
//             menu_link: "/",
//           },
//           {
//             menu_name: "Level 2",
//             menu_link: "/",
//           },
//           {
//             menu_name: "Level 2 dropdown",
//             submenu: [
//               {
//                 menu_name: "Level 3",
//                 menu_link: "/",
//               },
//             ],
//           },
//         ],
//       },
//       { menu_name: "Level 1", menu_link: "/" },
//     ],
//   },
//   {
//     menu_name: "Kampus",
//     menu_link: "/",
//     submenu: [
//       {
//         menu_name: "Level 1 dropdown",
//         submenu: [
//           {
//             menu_name: "Level 2",
//             menu_link: "/",
//           },
//           {
//             menu_name: "Level 2",
//             menu_link: "/",
//           },
//           {
//             menu_name: "Level 2 dropdown",
//             submenu: [
//               {
//                 menu_name: "Level 3",
//                 menu_link: "/",
//               },
//             ],
//           },
//         ],
//       },
//       { menu_name: "Level 1", menu_link: "/" },
//     ],
//   },
//   {
//     menu_name: "Sawit",
//     menu_link: "/",
//     submenu: [
//       {
//         menu_name: "Level 1 dropdown",
//         submenu: [
//           {
//             menu_name: "Level 2",
//             menu_link: "/",
//           },
//           {
//             menu_name: "Level 2",
//             menu_link: "/",
//           },
//           {
//             menu_name: "Level 2 dropdown",
//             submenu: [
//               {
//                 menu_name: "Level 3",
//                 menu_link: "/",
//               },
//             ],
//           },
//         ],
//       },
//       { menu_name: "Level 1", menu_link: "/" },
//     ],
//   },
//   {
//     menu_name: "Daerah",
//     menu_link: "/",
//     submenu: [
//       {
//         menu_name: "Level 1 dropdown",
//         submenu: [
//           {
//             menu_name: "Level 2",
//             menu_link: "/",
//           },
//           {
//             menu_name: "Level 2",
//             menu_link: "/",
//           },
//           {
//             menu_name: "Level 2 dropdown",
//             submenu: [
//               {
//                 menu_name: "Level 3",
//                 menu_link: "/",
//               },
//             ],
//           },
//         ],
//       },
//       { menu_name: "Level 1", menu_link: "/" },
//     ],
//   },
//   {
//     menu_name: "Index Berita",
//     menu_link: "/",
//     submenu: [
//       {
//         menu_name: "Level 1 dropdown",
//         submenu: [
//           {
//             menu_name: "Level 2",
//             menu_link: "/",
//           },
//           {
//             menu_name: "Level 2",
//             menu_link: "/",
//           },
//           {
//             menu_name: "Level 2 dropdown",
//             submenu: [
//               {
//                 menu_name: "Level 3",
//                 menu_link: "/",
//               },
//             ],
//           },
//         ],
//       },
//       { menu_name: "Level 1", menu_link: "/" },
//     ],
//   },
// ]
const { getData } = useFetchData();
async function getMenus() {
  try {
    const datas = await getData("products/categories");
    menus.value = {
      data: [
        {
          menu_id: 1,
          menu_name: "Beranda",
          menu_link: "/",
        },
        {
          menu_id: 1,
          menu_name: "Pendidikan",
          menu_link: "/",
          submenu: datas.map((d, index) => ({
            menu_id: index,
            menu_name: d,
            menu_link: `/archive/${d}-page-1`,
          })),
        },
        {
          menu_id: 1,
          menu_name: "Bisnis",
          menu_link: "/",
          submenu: datas.map((d, index) => ({
            menu_id: index,
            menu_name: d,
            menu_link: `/archive/${d}-page-1`,
          })),
        },
        {
          menu_id: 1,
          menu_name: "Beranda",
          menu_link: "/",
          submenu: datas.map((d, index) => ({
            menu_id: index,
            menu_name: d,
            menu_link: `/archive/${d}-page-1`,
          })),
        },
        {
          menu_id: 1,
          menu_name: "Wisata",
          menu_link: "/",
          submenu: datas.map((d, index) => ({
            menu_id: index,
            menu_name: d,
            menu_link: `/archive/${d}-page-1`,
          })),
        },
        {
          menu_id: 1,
          menu_name: "Kampus",
          menu_link: "/",
          submenu: datas.map((d, index) => ({
            menu_id: index,
            menu_name: d,
            menu_link: `/archive/${d}-page-1`,
          })),
        },
        {
          menu_id: 1,
          menu_name: "Sawit",
          menu_link: "/",
          submenu: datas.map((d, index) => ({
            menu_id: index,
            menu_name: d,
            menu_link: `/archive/${d}-page-1`,
          })),
        },
        {
          menu_id: 1,
          menu_name: "Daerah",
          menu_link: "/",
          submenu: datas.map((d, index) => ({
            menu_id: index,
            menu_name: d,
            menu_link: `/archive/${d}-page-1`,
          })),
        },
        {
          menu_id: 1,
          menu_name: "Index Berita",
          menu_link: "/",
          submenu: datas.map((d, index) => ({
            menu_id: index,
            menu_name: d,
            menu_link: `/archive/${d}-page-1`,
          })),
        },
      ],
      loading: false,
    };
  } catch (error) {
    console.log(error);
  }
}
onMounted(() => {
  getMenus();
});
</script>
