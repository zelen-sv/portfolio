<template>
  <div class="card" :class="{ 'card--hovered': hovered }" >
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      hovered: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss";
</style>
