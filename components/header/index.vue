<template>
  <header class="header">
    <div class="block-number">1.</div>
    <h1 class="section__h1">
      Hello, I’m a Stas Zelenko<br>
      Full stack Web Developer
    </h1>
    <p class="header__description">
      I’m a full stack developer which means I can bring your project from concept to completion. I work primarily with Ruby on Rails on the backend and Vue.js on the frontend but picking up new languages or frameworks isn’t a problem.
    </p>
    <a href="mailto:st.zelenko@gmail.com">
      <v-button text="Say Hi!" />
    </a>
  </header>
</template>

<script>
  import Button from '~/components/button';

  export default {
    components: {
      'v-button': Button
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss";
</style>
