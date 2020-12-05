<template>
  <div class="layout">
    <navbar />
    <div class="content">
      <nuxt />
    </div>
    <v-footer />
  </div>
</template>

<script>
  import Navbar from '~/components/navbar';
  import Footer from '~/components/footer';

  export default {
    components: {
      Navbar,
      'v-footer': Footer
    }
  }
</script>
