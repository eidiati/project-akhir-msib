<template>
  <div class="row">
    <div class="col-lg-10 col-11 mx-auto">
      <div
        v-if="!quiz.loading"
        class="d-flex flex-column justify-content-center align-items-center"
      >
        <div v-if="quiz.data.quiz_active" class="row mx-lg-0 mx-2 w-100">
          <main class="col-12 mx-auto p-0 border rounded shadow-sm">
            <section class="row bg-primary m-0 rounded-top">
              <div
                class="border-bottom col-12 d-lg-none d-flex justify-content-start justify-content-lg-end align-items-center"
              >
                <div
                  class="p-lg-2 my-2 p-1 text-white rounded"
                  style="width: fit-content; height: fit-content"
                >
                  <img
                    src="https://api.iconify.design/material-symbols:person.svg?color=%23ffffff"
                    alt="user"
                    style="margin-top: -4px"
                  />
                  {{ user.fullname }}
                </div>
              </div>
              <div
                class="col-12 col-lg-9 my-2 text-light d-flex align-items-center justify-content-center justify-content-lg-start"
              >
                {{ quiz.data.quiz_title }}
              </div>
              <div
                class="col-3 d-lg-flex d-none justify-content-end align-items-center"
              >
                <div
                  class="p-lg-2 my-2 p-1 text-white rounded"
                  style="width: fit-content; height: fit-content"
                >
                  <img
                    src="https://api.iconify.design/material-symbols:person.svg?color=%23ffffff"
                    alt="user"
                    style="margin-top: -4px"
                  />
                  {{ user.fullname }}
                </div>
              </div>
            </section>
            <!--  -->
            <section v-if="isDone" class="">
              <QuizResult :result="result" />
            </section>
            <section v-else class="px-3">
              <h4 class="mt-3">
                {{
                  question +
                  ". " +
                  quiz.data.quiz_question[question - 1].question_text
                }}
              </h4>
              <div
                class="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 g-lg-4 g-2 mb-5 mx-lg-4 mx-2"
              >
                <div
                  v-for="(opt, index) in quiz.data.quiz_question[question - 1]
                    .question_opt"
                  :key="index"
                  class="col"
                >
                  <QuizAnswer
                    :opt="opt"
                    :option="option"
                    :choice="choice[index]"
                    :handleRadioChange="
                      () =>
                        handleRadioChange(
                          quiz.data.quiz_question[question - 1].question_id,
                          opt.opt_id
                        )
                    "
                  />
                </div>
              </div>
            </section>
            <!--  -->
            <section
              v-if="!isDone"
              class="d-flex justify-content-between align-items-center border-top py-1 px-3"
            >
              <span class="my-3">
                {{
                  question +
                  " dari " +
                  quiz.data.quiz_question.length +
                  " Pertanyaan"
                }}
              </span>

              <button
                v-if="question === quiz.data.quiz_question.length"
                class="btn btn-success"
                :disabled="option < 1"
                @click="sendAnswer"
              >
                Kirim
              </button>
              <button
                v-else
                class="btn btn-primary"
                :disabled="option < 1"
                @click="() => nextQuestion(quiz.data.quiz_question.length)"
              >
                Selanjutnya
              </button>
            </section>
            <section
              v-else
              class="d-flex justify-content-between align-items-center border-top py-2 px-3"
            >
              <button class="btn btn-success" @click="replay">
                Mainkan lagi
              </button>
              <NuxtLink class="btn btn-primary" to="/kuis">
                Kuis Lainnya
              </NuxtLink>
            </section>
          </main>
        </div>
      </div>
      <div v-else class="d-flex justify-content-center align-items-center">
        <AnimationEllipsis />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  quiz_id: Number,
});
const { quiz_id } = toRefs(props);
const { getData, postData } = await useFetchData();
const router = useRouter();
const quiz = ref({
  data: [],
  loading: true,
});
const result = ref({
  data: {},
  loading: true,
});
const user = ref({
  fullname: "",
  phone: "",
});
const question = ref(1);
const choice = ref(["A", "B", "C", "D"]);
const isDone = ref(false);

const answer = ref({});
const data_answer = ref([]);
const option = ref(0);
const nextQuestion = (quiz_question_length) => {
  option.value = 0;
  if (question.value <= quiz_question_length) {
    question.value = question.value + 1;
    data_answer.value.push(answer.value);
  }
};

const handleRadioChange = (question_id, opt_id) => {
  option.value = opt_id;
  answer.value = {
    question_id: question_id,
    value: opt_id,
  };
};

const sendAnswer = async () => {
  data_answer.value.push(answer.value);
  const reqBody = {
    participant_name: user.value.fullname,
    participant_phone: user.value.phone,
    answer: data_answer.value,
  };
  isDone.value = true;
  const res = await postData("quiz", reqBody);
  result.value = res;
};

const replay = () => {
  option.value = 0;
  question.value = 1;
  data_answer.value = [];
  isDone.value = false;
};

onMounted(async () => {
  const participant = localStorage.getItem("participant");
  if (!participant) {
    router.push("/kuis");
  } else {
    user.value = JSON.parse(participant);
    quiz.value = await getData(`quiz/${quiz_id}`);
  }
});
</script>
