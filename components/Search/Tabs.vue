<template>
  <div>
    <ul
      class="nav nav-tabs mb-2 mx-auto justify-content-center"
      id="myTab"
      role="tablist"
    >
      <li class="nav-item mb-3" role="presentation">
        <button
          class="btn btn-outline-dark rounded-0 border-0 p-2 active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          Relevansi
        </button>
      </li>
      <li class="nav-item mb-3" role="presentation">
        <button
          class="btn btn-outline-dark rounded-0 border-0 p-2"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          Terbaru
        </button>
      </li>
      <li class="nav-item mb-3" role="presentation">
        <button
          class="btn btn-outline-dark rounded-0 border-0 p-2"
          id="lokasi-tab"
          data-bs-toggle="tab"
          data-bs-target="#lokasi"
          type="button"
          role="tab"
          aria-controls="lokasi"
          aria-selected="false"
        >
          Lokasi
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <SearchListPosts :directory="'relevant-search?keyword=' + keyword" />
      </div>
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <SearchListPosts :directory="'recent-search?keyword=' + keyword" />
      </div>
      <div
        class="tab-pane fade"
        id="lokasi"
        role="tabpanel"
        aria-labelledby="lokasi-tab"
      >
        <SearchListPosts :directory="'location-search?keyword=' + keyword" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  keyword: String,
});
</script>
