<template>
  <transition name="fade" v-if="loaderVisible">
    <div class='loader' >
      <div class="loader__circle"></div>
      <div class="loader__circle loader__circle--mask">
        <div class="loader__line"></div>
      </div>
      <svg class="loader__logo" width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M39 67.128H76.8488L39.5426 132.38H127.45C138.574 132.38 144 125.326 144 113.388H71.8295L98.4144 67.128L109.407 48H55.4147C46.8682 48 39 55.7326 39 67.128Z" fill="#78FFF1"/>
        <path d="M144 80.6939H98.4144L87.7015 99.8218H127.45C139.93 99.8218 144 91.2753 144 80.6939Z" fill="#78FFF1"/>
        <path d="M144 48H117.682L106.829 66.9923L127.45 67.1279C139.93 67.1279 144 58.5814 144 48Z" fill="#78FFF1"/>
      </svg>
    </div>
  </transition>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters('loader', [ 'loaderVisible' ])
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss";
</style>
