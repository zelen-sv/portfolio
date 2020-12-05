<template>
  <div class="blog-navbar__container">
    <div class="blog-navbar">
      <nuxt-link to="/">
        <logo />
      </nuxt-link>
      <nuxt-link to="/">
        <div class="blog-navbar__back">
          <svg class="blog-navbar__back-arrow" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16L12 5.33333V13.3333H32V18.6667H12V26.6667L0 16Z" fill="#78FFF1"/>
          </svg>
        </div>
      </nuxt-link>
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
