<script setup>
  import {RouterView} from 'vue-router'
  import AppLoader from "@/components/app-loader/AppLoader.vue";
</script>

<template>
  <AppLoader v-if="false"/>
  <RouterView/>
</template>

<style lang="scss">
  @import "./assets/scss/app";
</style>
