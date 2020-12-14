<template>
  <div class="message-sent-page">
    <svg width="130" height="130" class="message-sent-page__logo" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="65" cy="65" r="65" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M28.167 48.4813H55.5023L28.5589 95.6077H92.0473C100.081 95.6077 104 90.513 104 81.8911H51.8772L71.0774 48.4813L79.0165 34.6667H40.0221C33.8496 34.6667 28.167 40.2513 28.167 48.4813Z" fill="#78FFF1"/>
      <path d="M104 58.2789H71.0774L63.3403 72.0935H92.0473C101.061 72.0935 104 65.921 104 58.2789Z" fill="#78FFF1"/>
      <path d="M104 34.6667H84.993L77.1549 48.3833L92.0473 48.4813C101.061 48.4813 104 42.3088 104 34.6667Z" fill="#78FFF1"/>
    </svg>

    <h1 class="message-sent-page__title">
      Get in touch
    </h1>
    <div class="message-sent-page__description">
      I'll be in touch with you shortly!
    </div>
    <nuxt-link to="/">
      <v-button class="message-sent-page__buttom" text="BACK TO PROFILE" />
    </nuxt-link>
  </div>
</template>


<script>
  import Button from '~/components/button';

  export default {
    layout: 'empty',
    components: {
      'v-button': Button
    },
    head () {
      return {
        title: 'I\'ll be in touch with you shortly!'
      }
    }
  }
</script>
