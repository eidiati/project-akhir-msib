<template>
  <div class="card w-100 border shadow-sm">
    <img
      :src="images"
      class="mt-3 mx-auto rounded-circle card-img-top d-lg-block d-md-none d-sm-none d-none"
      style="height: 150px; width: 150px; object-fit: contain"
      :alt="poll.opt_text"
    />
    <img
      :src="images"
      class="mt-3 mx-auto rounded-circle card-img-top d-lg-none d-md-block d-sm-block d-block"
      style="height: 200px; width: 200px; object-fit: contain"
      :alt="poll.opt_text"
    />
    <div class="card-body">
      <h5 class="card-title text-capitalize">{{ poll.opt_text }}</h5>
      <div class="d-flex mb-3">
        <img
          src="https://api.iconify.design/bi:megaphone-fill.svg?color=%23969696"
          alt="megaphone"
          style="width: 14px; margin-right: 11px"
        />
        <p class="card-text">{{ poll.opt_count }} suara</p>
      </div>
      <div class="progress">
        <div
          class="progress-bar progress-bar-info progress-bar-striped"
          :style="{
            'background-color': bgColor,
            width: poll.opt_percent + '%',
          }"
        >
          <div class="progress-value">{{ poll.opt_percent }}%</div>
        </div>
      </div>
      <button
        class="btn btn-primary w-100"
        @click="() => handleVote(poll.opt_id)"
      >
        Voting
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  poll: Object,
  images: String,
  bgColor: String,
});

async function handleVote(id) {
  console.log(id);
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
