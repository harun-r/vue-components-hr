<script setup>
// TYPE: Textarea
defineProps({
  label: {
    type: String
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
      <textarea
          :class="`form-control ${inputClass}`"
          :id="label"
          :placeholder="placeholder"
          v-model="modelValue"
      >
      </textarea>
      <span v-if="errMsg" class="block text-sm form-error">{{errMsg}}</span>
      <span v-if="hintMsg" class="block text-sm form-error">{{hintMsg}}</span>
    </div>
  </div>
</template>
