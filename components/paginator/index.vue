<template>
  <div class="paginator">
    <a v-for="item in sections"
       :key="item"
       href="#"
       v-scroll-to="`#${item}`"
       class="paginator__dot"
       :class="{'paginator__dot--active': active === item}"
       v-tooltip.left="{ content: item, classes: ['tooltip--blinked'] }"></a>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters('paginator', [ 'active', 'sections' ])
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss";
</style>
