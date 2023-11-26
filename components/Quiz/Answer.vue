<template>
  <label class="label">
    <input
      type="radio"
      name="product"
      :value="opt.opt_id"
      :checked="option === opt.opt_id"
      v-on:input="handleRadioChange"
      class="card-input-element"
    />

    <div class="panel panel-default card-input">
      <div class="card w-full shadow-sm">
        <img :src="opt.opt_image" class="card-img-top w-50 mx-auto" alt="..." />
        <div class="card-body">
          <span class="card-title font-weight-bold">{{
            choice + ". " + opt.opt_text
          }}</span>
        </div>
      </div>
    </div>
  </label>
</template>

<script setup>
defineProps({
  opt: Object,
  option: Number,
  choice: String,
  handleRadioChange: Function,
});
</script>

<style>
.label {
  width: 100%;
  transition: all 0.2s ease;
}
.label:hover {
  transform: scale(0.9);
}

.card-input-element {
  display: none;
}

.card-input {
  margin: 10px;
  padding: 00px;
  border-radius: 5px;
}

.card-input:hover {
  cursor: pointer;
  box-shadow: 0 0 1px 1px #2e8fcc;
  transition: all 0.2s ease;
}

.card-input-element:checked + .card-input {
  box-shadow: 0 0 1.5px 1.5px #2e8fcc;
}
</style>
