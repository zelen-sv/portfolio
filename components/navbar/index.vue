<template>
  <div class="navbar__container">
    <div class="navbar">
      <logo />
      <nav class="navbar__links">
        <a href="#" v-for="item in sections"
                    :key="`nav-${item}`"
                    v-scroll-to="`#${item}`"
                    class="navbar__link"
                    :class="{ 'navbar__link--active': active === item }">
          {{ item }}
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Logo from '~/components/logo';

  export default {
    components: {
      Logo
    },
    computed: {
      ...mapGetters('paginator', [ 'active', 'sections' ])
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss";
</style>
