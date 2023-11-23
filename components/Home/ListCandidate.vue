<template>
  <div class="col-3 d-flex align-items-center rounded-circle">
    <img
      :src="opt.opt_image"
      :alt="opt.opt_text"
      class="img-fluid rounded-circle"
    />
  </div>
  <div class="col-9 d-flex align-items-center justify-content-between">
    <span style="font-size: 12px">{{ opt.opt_text }}</span>
    <span
      class="badge text-bg-warning"
      style="cursor: pointer"
      @click="() => handleVote(opt.opt_id)"
      ><template v-if="loading">Loading...</template
      ><template v-else>Vote</template>
    </span>
  </div>
</template>

<script setup>
const props = defineProps(["opt", "poll_id"]);
const opt = ref(props.opt);
const poll_id = ref(props.poll_id);
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
