<template>
  <div class="card w-100 border shadow-sm">
    <div class="card-body">
      <h5 class="card-title text-capitalize text-center">
        {{ quiz.quiz_title }}
      </h5>
      <div class="d-flex align-items-center justify-content-center">
        <img
          :src="quiz.quiz_image"
          class="mt-3"
          style="width: 50%; object-fit: contain"
          :alt="quiz.quiz_title"
        />
      </div>
      <NuxtLink
        v-if="isParticipant"
        :to="'/quiz/' + quiz.quiz_slug"
        class="mt-3 btn btn-primary w-100"
      >
        Mulai
      </NuxtLink>
      <button
        v-else
        class="mt-3 btn btn-primary w-100"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
      >
        Mulai
      </button>
    </div>

    <!-- modal -->
    <div
      class="modal fade"
      id="exampleModalToggle"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalToggleLabel">
              Silahkan berpartisipasi
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <QuizFormData :quiz_slug="quiz.quiz_slug" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  quiz: Object,
});
const { quiz } = toRefs(props);
const isParticipant = ref(false);

onMounted(() => {
  const participant = localStorage.getItem("participant");
  if (participant) {
    isParticipant.value = true;
  }
});
</script>
