<template>
  <div class="contact-section">
    <div class="block-number">5.</div>
    <h1 class="section__h1">
      Contact
    </h1>
    <hr class="section__devider">
    <form name="contact"
          method="post"
          action="/message-sent"
          data-netlify="true"
          data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <input v-model="name" required name="name" placeholder="Name" type="text" class="contact-section__input" />
      <input v-model="email" required name="email" placeholder="Email" type="email" class="contact-section__input" />
      <input v-model="message" required name="message" placeholder="Message" type="text" class="contact-section__input" />
      <v-button class="contact-section__button" text="Send message" type="submit" />
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
