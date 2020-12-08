<template>
  <div class="layout">
    <navbar />
    <mobile-navbar />
    <div class="content">
      <nuxt />
    </div>
    <v-footer />
    <loader />
  </div>
</template>

<script>
  import Navbar from '~/components/navbar';
  import MobileNavbar from '~/components/mobile-navbar';
  import Footer from '~/components/footer';
  import Loader from '~/components/loader';

  export default {
    components: {
      Navbar, Loader, MobileNavbar,
      'v-footer': Footer
    }
  }
</script>
