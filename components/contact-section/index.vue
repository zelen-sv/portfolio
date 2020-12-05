<template>
  <div class="contact-section">
    <div class="block-number">5.</div>
    <h1 class="section__h1">
      Contact
    </h1>
    <hr class="section__devider">
    <ValidationObserver v-slot="{ handleSubmit, invalid }" tag="form" ref="form">
      <form @submit.prevent="handleSubmit(submitMessage)">
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
  import { createApplication } from '~/api/mutations';

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
    },
    methods: {
      async submitMessage () {
        await this.$graphcms.request(createApplication, {
          name: this.name,
          email: this.email,
          message: this.message
        });
        this.$scrollTo('#about');
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss";
</style>
