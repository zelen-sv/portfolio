<template>
  <button class="hamburger" type="button" :class="{ 'hamburger--active': active }">
      <div class="hamburger__inner">
          <span class="hamburger__bar"></span>
          <span class="hamburger__bar"></span>
          <span class="hamburger__bar"></span>
      </div>
  </button>
</template>

<script>
  export default {
    props: {
      active: {
        default: false,
        type: Boolean
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss"
</style>
