<template>
  <div class="card w-100 border shadow-sm">
    <img
      :src="opt.opt_image"
      class="mt-3 mx-auto rounded-circle card-img-top"
      style="width: 50%; object-fit: contain"
      :alt="opt.opt_text"
    />
    <div class="card-body">
      <h5 class="card-title text-capitalize">{{ opt.opt_text }}</h5>
      <div class="d-flex mb-3">
        <img
          src="https://api.iconify.design/bi:megaphone-fill.svg?color=%23969696"
          alt="megaphone"
          style="width: 14px; margin-right: 11px"
        />
        <p class="card-text">{{ opt.opt_count }} suara</p>
      </div>
      <div class="progress">
        <div
          class="progress-bar progress-bar-info progress-bar-striped"
          :style="{
            'background-color': bgColor,
            width: opt.opt_percent + '%',
          }"
        >
          <div class="progress-value">{{ opt.opt_percent }}%</div>
        </div>
      </div>
      <button
        class="btn btn-primary w-100"
        @click="() => handleVote(opt.opt_id)"
      >
        <div
          v-if="loading"
          class="spinner-border spinner-border-sm text-light"
          style="margin: -2px 20px -2px 20px"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
        <template v-else> Vote </template>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["poll_id", "opt", "bgColor"]);
const poll_id = ref(props.poll_id);
const opt = ref(props.opt);
const bgColor = ref(props.bgColor);

const { postData } = await useFetchData();
const loading = ref(false);
async function handleVote(opt_id) {
  loading.value = true;
  const reqBody = {
    ip_address: "192.168.88.1",
    poll_id: poll_id.value,
    opt_id,
  };
  const res = await postData("polling", reqBody);
  loading.value = res.loading;
}
</script>

<style>
.progress {
  height: 14px;
  background: #eee;
  border-radius: 20px;
  overflow: visible;
  line-height: 15px;
  margin: 25px 0 20px 0;
}
.progress .progress-bar {
  border-radius: 20px;
  position: relative;
  animation: animate-positive 2s;
}
.progress .progress-value {
  position: absolute;
  top: -19px;
  right: -9px;
  font-size: 12px;
  color: #fff;
  padding: 2px 6px;
  background: #191919;
  border: 1px solid #000;
}
.progress .progress-value:after {
  content: "";
  border-top: 10px solid #191919;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  bottom: -6px;
  left: 25%;
}
@-webkit-keyframes animate-positive {
  0% {
    width: 0%;
  }
}
@keyframes animate-positive {
  0% {
    width: 0%;
  }
}
</style>
