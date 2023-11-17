<template>
  <main v-if="polling.loading" class="mb-4 pb-2">
    <article class="pb-2 mb-2">
      <div class="row">
        <div class="col">
          <div class="position-relative w-100" style="padding-top: 90%">
            <div class="position-absolute top-0 start-0 end-0 bottom-0">
              <AnimationSkleton width_="100%" height_="100%" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <AnimationSkleton width_="100px" height_="14px" class_="my-2" />
          <AnimationSkleton width_="100%" height_="14px" />
        </div>
      </div>
    </article>
  </main>
  <main v-else v-if="polling.data.length > 0">
    <h3 class="font-weight-bold text-3 pt-1">Polling & Survey</h3>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="(poll, index) in polling.data"
          :key="index"
          :class="index === 0 ? 'carousel-item active' : 'carousel-item'"
        >
          <div class="card shadow-sm text-center">
            <h4
              class="d-block line-height-2 text-4 text-dark font-weight-bold my-3 px-2"
            >
              <NuxtLink
                :to="'/polling' + poll.poll_url"
                class="text-decoration-none text-color-dark text-color-hover-primary"
              >
                {{ poll.poll_title }}</NuxtLink
              >
            </h4>
            <section class="overflow-auto" style="max-height: 200px">
              <div
                class="row shadow-sm p-1 mx-4 mb-1"
                v-for="opt in poll.poll_opt"
                :key="opt.opt_id"
              >
                <div class="col-3 d-flex align-items-center rounded-circle">
                  <img
                    :src="opt.opt_image"
                    :alt="opt.opt_text"
                    class="img-fluid rounded-circle"
                  />
                </div>
                <div
                  class="col-9 d-flex align-items-center justify-content-between"
                >
                  <span style="font-size: 12px">{{ opt.opt_text }}</span>
                  <span
                    class="badge text-bg-warning"
                    style="cursor: pointer"
                    @click="() => handleVote(poll.poll_id, opt.opt_id)"
                    >Vote</span
                  >
                </div>
              </div>
            </section>
            <NuxtLink :to="'/polling' + poll.poll_url" class="card-button"
              >Selengkapnya</NuxtLink
            >
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon bg-black"
          style="width: 15px"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon bg-black"
          style="width: 15px"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </main>
</template>

<script setup>
const { getData } = await useFetchData();
const polling = ref({
  data: 1,
  loading: true,
});
function handleVote(poll_id, opt_id) {
  alert("poll id: " + poll_id + " opt id: " + opt_id);
}
onMounted(async () => {
  polling.value = await getData("polling");
});
</script>

<style scoped>
.card-image img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 8px 8px 0px 0;
}

.card-button {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  width: 100%;
  background-color: rgb(0, 119, 255);
  color: #fff;
  border-radius: 0 0 8px 8px;
}

.card-button:hover {
  text-decoration: none;
  background-color: rgb(0, 75, 160);
  color: #fff;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(158, 158, 158);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(92, 92, 92);
}
</style>
