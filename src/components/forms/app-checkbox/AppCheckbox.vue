<script setup>
// TYPE: checkbox
defineProps({
  label: {
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
})
// v mode bind
const modelValue = defineModel()
</script>

<template>
  <div :class="`form-field ${fieldClass}`">
    <input
        autocomplete="off"
        :class="`form-control ${inputClass}`"
        :type="'checkbox'"
        :id="label"
        v-model="modelValue"
    >
    <label :class="`form-label ms-3 ${labelClass}`" v-if="label" :for="label">{{ label }}</label>
  </div>
</template>