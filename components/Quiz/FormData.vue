<template>
  <form v-on:submit="(e) => handleSubmit(e)" class="contact-form">
    <div class="row">
      <div class="form-group col-12">
        <label class="form-label mb-1 text-2">Nama Lengkap</label>
        <input
          type="text"
          :value="participant.fullname"
          v-on:input="(e) => (participant.fullname = e.target.value)"
          data-msg-required="Masukkan nama anda."
          maxlength="100"
          class="form-control text-3 h-auto py-2"
          required
        />
      </div>
      <div class="form-group col-12">
        <label class="form-label mb-1 text-2">Nomor Telepon</label>
        <input
          type="Number"
          :value="participant.phone"
          v-on:input="(e) => (participant.phone = e.target.value)"
          data-msg-required="Masukkan nomor telepon anda."
          data-msg-email="Masukkan nomor telepon yang valid."
          maxlength="100"
          class="form-control text-3 h-auto py-2"
          required
        />
      </div>
    </div>
    <div class="mt-3 d-flex align-items-center justify-content-center">
      <button class="btn btn-primary mx-auto rounded-5 w-75" type="submit">
        <template v-if="!loading">Mulai</template>
        <div
          v-else
          class="spinner-border spinner-border-sm text-light"
          style="margin: -2px 6.5px -2px 6.5px"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </button>
    </div>
  </form>
</template>

<script setup>
const props = defineProps({
  quiz_id: Number,
});
const { quiz_id } = toRefs(props);
const { postData } = await useFetchData();
const { encrypted } = useFunction();
const participant = useParticipant();
const loading = ref(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  loading.value = true;

  const res = await postData("participant", participant.value);
  if (res.data.success) {
    const encrypt = encrypted(quiz_id.value);
    localStorage.setItem("participant", JSON.stringify(participant.value));
    window.location.href = `/kuis/${encodeURIComponent(encrypt)}`;

    loading.value = false;
    participant.value = {
      fullname: "",
      phone: "",
    };
  } else {
    console.log(res);
  }
};
</script>
