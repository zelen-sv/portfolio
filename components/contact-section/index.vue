<template>
  <div class="contact-section">
    <div class="block-number">5.</div>
    <h1 class="section__h1">
      Contact
    </h1>
    <hr class="section__devider">
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <p class="contact-section__bot-input">
        <label>Don’t fill this out if you’re human:
        <input type="hidden" name="contact" value="contact" /></label>
      </p>
      <input v-model="name" required name="name" placeholder="Name" class="contact-section__input" >
      <input v-model="email" required name="email" placeholder="Email" type="email" class="contact-section__input" >
      <input v-model="message" required name="message" placeholder="Message" class="contact-section__input" >
      <v-button class="contact-section__button" text="Send message" />
    </form>
  </div>
</template>

<script>
  import Button from '~/components/button';

  export default {
    components: {
      'v-button': Button
    },
    data () {
      return {
        name: null,
        email: null,
        message: null
      }
    },
    computed: {
      valid () {
        return
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss";
</style>
