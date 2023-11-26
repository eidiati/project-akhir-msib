<template>
  <div
    v-if="result.loading"
    class="d-flex justify-content-center align-items-center"
  >
    <AnimationEllipsis />
  </div>
  <div v-else class="px-3">
    <h3 class="m-0 pt-5 text-center text-capitalize">Horee Selesai</h3>
    <h4 class="my-4 text-center">
      {{ result.data.data.result_text }}
    </h4>
    <template v-if="result.data.data.incorect_answer.length > 0">
      <div class="accordion accordion-flush my-3" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              :class="
                collapse
                  ? 'accordion-button py-0'
                  : 'accordion-button collapsed py-0'
              "
              type="button"
              data-bs-target="#flush-collapseOne"
              :aria-expanded="collapse ? 'true' : 'false'"
              aria-controls="flush-collapseOne"
              @click="collapse = !collapse"
            >
              Tampilkan jawaban
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            :class="
              collapse
                ? 'accordion-collapse collapse show'
                : 'accordion-collapse collapse'
            "
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div
                v-if="collapse"
                v-for="data in result.data.data.incorect_answer"
                :key="data.question_id"
              >
                <ul>
                  <li>Pertanyaan: {{ data.question_text }}</li>
                  <li>Jawaban Anda: {{ data.your_answer }}</li>
                  <li>Jawaban yang benar: {{ data.correct_answer }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
defineProps({
  result: Object,
});
const collapse = ref(false);
</script>
