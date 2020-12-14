<template>
  <div class="contact-section">
    <div class="block-number">5.</div>
    <h1 class="section__h1">
      Contact
    </h1>
    <hr class="section__devider">
    <ValidationObserver v-slot="{ invalid }" tag="div">
      <form name="contact" method="post" netlify="true" netlify-honeypot="bot-field">
        <p class="contact-section__bot-input">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>
        <ValidationProvider rules="required" v-slot="{ classes }" name="Name">
          <input v-model="name" placeholder="Name" class="contact-section__input" :class="classes">
        </ValidationProvider>
        <ValidationProvider rules="required|email" v-slot="{ classes }" name="Email">
          <input v-model="email" placeholder="Email" type="email" class="contact-section__input" :class="classes">
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ classes }" name="Message">
          <input v-model="message" placeholder="Message" class="contact-section__input" :class="classes">
        </ValidationProvider>
        <v-button :disabled="invalid" class="contact-section__button" text="Send message" />
      </form>
    </ValidationObserver>
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
        name: '',
        email: '',
        message: ''
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
