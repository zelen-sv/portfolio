<template>
  <div class="layout">
    <blog-navbar />
    <div class="content">
      <nuxt />
    </div>
    <v-footer />
    <loader />
  </div>
</template>

<script>
  import BlogNavbar from '~/components/blog-navbar';
  import Footer from '~/components/footer';
  import Loader from '~/components/loader';

  export default {
    components: {
      BlogNavbar, Loader,
      'v-footer': Footer
    }
  }
</script>
