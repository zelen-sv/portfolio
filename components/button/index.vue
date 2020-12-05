<template>
  <button class="button">
    {{ text }}
  </button>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss";
</style>
