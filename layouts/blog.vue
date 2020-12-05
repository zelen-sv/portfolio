<template>
  <div class="layout">
    <blog-navbar />
    <div class="content">
      <nuxt />
    </div>
    <v-footer />
  </div>
</template>

<script>
  import BlogNavbar from '~/components/blog-navbar';
  import Footer from '~/components/footer';

  export default {
    components: {
      BlogNavbar,
      'v-footer': Footer
    }
  }
</script>
