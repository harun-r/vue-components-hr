<template>
  <div class="loading">
    <div
        v-for="i in 5"
        :key="i"
        :style="{backgroundColor: color}"
        class="line"/>
  </div>
</template>

<script>
export default {
  name: 'Loading',

  props: {
    color: {
      type: String,
      default: '#222'
    }
  }
}
</script>
<style lang="scss" scoped>

</style>