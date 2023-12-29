<script setup>
// TYPE: Text, Number, Password
defineProps({
  label: {
    type: String
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String
  },
  labelClass: {
    type: String
  },
  fieldClass: {
    type: String
  },
  inputClass: {
    type: String
  },
  errMsg: {
    type: String
  },
  hintMsg: {
    type: String
  },
})
// v mode bind
const modelValue = defineModel()
</script>

<template>
  <div :class="`form-field ${fieldClass}`">
    <label :class="`form-label block mb-3 ${labelClass}`" v-if="label" :for="label">{{ label }}</label>
    <div class="form-field-wrap">
      <input
          autocomplete="off"
          :class="`form-control ${inputClass}`"
          :type="type"
          :id="label"
          :placeholder="placeholder"
          v-model="modelValue"
      >
      <span v-if="errMsg" class="block text-sm form-error">{{errMsg}}</span>
      <span v-if="hintMsg" class="block text-sm form-error">{{hintMsg}}</span>
    </div>
  </div>
</template>