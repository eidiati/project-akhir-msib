<template>
  <ul
    class="nav nav-tabs mb-3 justify-content-center"
    id="myTab"
    role="tablist"
  >
    <li class="nav-item" role="presentation">
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
        Berita Populer
      </button>
    </li>
    <li class="nav-item" role="presentation">
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
        Berita Terkini
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
      <ListPosts directori="popular-posts" />
    </div>
    <div
      class="tab-pane fade"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <ListPosts directori="recent-posts" />
    </div>
  </div>
</template>

<script setup></script>
