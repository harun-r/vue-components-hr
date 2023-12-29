<script setup>
// TYPE: Radio
import {ref, watch} from 'vue';

const props = defineProps({
  label: {
    type: String
  },
  labelClass: {
    type: String,
    default: ''
  },
  fieldClass: {
    type: String,
    default: ''
  },
  inputClass: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
})


const emit = defineEmits(['update:modelValue']);
const selectedOption = ref(props.modelValue);
watch(selectedOption, (newValue) => {
  emit('update:modelValue', newValue);
});

</script>

<template>
  <div :class="`form-field ${fieldClass}`" v-for="(option, index) in options" :key="index">
    <input
        :class="`form-control ${inputClass}`"
        type="radio"
        :id="`radio-${index}`"
        :value="option.value"
        v-model="selectedOption"
        :name="name"
    >
    <label :class="`form-label ms-3 ${labelClass}`" v-if="option.label" :for="`radio-${index}`">{{
        option.label
      }}</label>
  </div>
</template>
