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
                      <ul class="nav nav-pills" id="mainNav">
                        <template v-for="(menu, i) in menus" :key="i">
                          <li
                            class="dropdown dropdown-full-color dropdown-light"
                          >
                            <NuxtLink
                              class="dropdown-item dropdown-toggle"
                              :to="menu.link"
                            >
                              {{ menu.label }}
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
                  <form
                    role="search"
                    class="d-flex w-100"
                    action="page-search-results.html"
                    method="get"
                  >
                    <div class="simple-search input-group w-100">
                      <input
                        class="form-control border-0 text-1"
                        id="headerSearch"
                        name="q"
                        type="search"
                        value=""
                        placeholder="Search..."
                      />
                      <button class="btn btn-light" type="submit">
                        <i class="fa fa-search header-nav-top-icon"></i>
                      </button>
                    </div>
                  </form>
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
const menus = [
  {
    label: "Beranda",
    link: "/",
    submenu: [
      {
        label: "Level 1 dropdown",
        submenu: [
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2 dropdown",
            submenu: [
              {
                label: "Level 3",
                link: "/",
              },
            ],
          },
        ],
      },
      { label: "Level 1", link: "/" },
    ],
  },
  {
    label: "Pendidikan",
    link: "/",
    submenu: [
      {
        label: "Level 1 dropdown",
        submenu: [
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2 dropdown",
            submenu: [
              {
                label: "Level 3",
                link: "/",
              },
            ],
          },
        ],
      },
      { label: "Level 1", link: "/" },
    ],
  },
  {
    label: "Bisnis",
    link: "/",
    submenu: [
      {
        label: "Level 1 dropdown",
        submenu: [
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2 dropdown",
            submenu: [
              {
                label: "Level 3",
                link: "/",
              },
            ],
          },
        ],
      },
      { label: "Level 1", link: "/" },
    ],
  },
  {
    label: "Wisata",
    link: "/",
    submenu: [
      {
        label: "Level 1 dropdown",
        submenu: [
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2 dropdown",
            submenu: [
              {
                label: "Level 3",
                link: "/",
              },
            ],
          },
        ],
      },
      { label: "Level 1", link: "/" },
    ],
  },
  {
    label: "Kampus",
    link: "/",
    submenu: [
      {
        label: "Level 1 dropdown",
        submenu: [
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2 dropdown",
            submenu: [
              {
                label: "Level 3",
                link: "/",
              },
            ],
          },
        ],
      },
      { label: "Level 1", link: "/" },
    ],
  },
  {
    label: "Sawit",
    link: "/",
    submenu: [
      {
        label: "Level 1 dropdown",
        submenu: [
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2 dropdown",
            submenu: [
              {
                label: "Level 3",
                link: "/",
              },
            ],
          },
        ],
      },
      { label: "Level 1", link: "/" },
    ],
  },
  {
    label: "Daerah",
    link: "/",
    submenu: [
      {
        label: "Level 1 dropdown",
        submenu: [
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2 dropdown",
            submenu: [
              {
                label: "Level 3",
                link: "/",
              },
            ],
          },
        ],
      },
      { label: "Level 1", link: "/" },
    ],
  },
  {
    label: "Index Berita",
    link: "/",
    submenu: [
      {
        label: "Level 1 dropdown",
        submenu: [
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2",
            link: "/",
          },
          {
            label: "Level 2 dropdown",
            submenu: [
              {
                label: "Level 3",
                link: "/",
              },
            ],
          },
        ],
      },
      { label: "Level 1", link: "/" },
    ],
  },
];
</script>
