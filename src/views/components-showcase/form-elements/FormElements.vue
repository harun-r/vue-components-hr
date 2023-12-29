<script setup>
import {ref} from "vue";
import AppInput from "@/components/forms/app-input/AppInput.vue";
import AppCheckbox from "@/components/forms/app-checkbox/AppCheckbox.vue";
import AppRadio from "@/components/forms/app-radio/AppRadio.vue";
import AppTextarea from "@/components/forms/app-textarea/AppTextarea.vue";
import AppFile from "@/components/forms/app-file/AppFile.vue";

const inputModel = ref('Harun')
const textareaValue = ref('Harun')
const checkboxModel = ref(false)

const radioSelect = ref('option1')
const radioOptions = ref([
  {label: 'Option 1', value: 'option1'},
  {label: 'Option 2', value: 'option2'},
  {label: 'Option 3', value: 'option3'},
])
</script>

<template>
  <div class="p-4">
    <h3 class="font-bold text-2xl font-mono mb-3">Form Elements</h3>
    <div class="mb-4">
      <app-input
          :label="'v-model Input Label'"
          :placeholder="'Name'"
          v-model="inputModel"
      />
      <span
          class="font-sans text-dark font-medium bg-gray-300 py-1 px-2 rounded block mt-2">Value : {{
          inputModel
        }}</span>
    </div>
    <div class="mb-4">
      <app-checkbox :label="'Checkbox label'" v-model="checkboxModel"/>
      <span
          class="font-sans text-dark font-medium bg-gray-300 py-1 px-2 rounded block mt-2">Value : {{
          checkboxModel
        }}</span>
    </div>
    <div class="mb-4">

      <app-radio :options="radioOptions" name="options" v-model="radioSelect"/>
      <span class="font-sans text-dark font-medium bg-gray-300 py-1 px-2 rounded block mt-2">Value : {{
          radioSelect
        }}</span>
    </div>

    <div class="mb-4">

      <app-textarea
          :label="'Textarea'"
          v-model="textareaValue"
        />
      <span class="font-sans text-dark font-medium bg-gray-300 py-1 px-2 rounded block mt-2">Value : {{
          textareaValue
        }}</span>
    </div>
    <div class="mb-4">

      <app-file/>

    </div>
  </div>
</template>

