<template>
  <div class="footer">
    <div class="footer__container">
      <a href="mailto:st.zelenko@gmail.com" class="footer__email">st.zelenko@gmail.com</a>
      <div class="footer__social">
        <a href="https://github.com/zelen-sv" target="blank">
          <github-icon class="footer__social-icon" />
        </a>
        <a href="https://t.me/st_zelenko" target="blank">
          <telegram-icon class="footer__social-icon"/>
        </a>
        <a href="https://wa.me/375293079905" target="blank">
          <whatsapp-icon class="footer__social-icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import GithubIcon from '~/components/icons/github';
  import TelegramIcon from '~/components/icons/telegram';
  import WhatsappIcon from '~/components/icons/whatsapp';

  export default {
    components: {
      GithubIcon, TelegramIcon, WhatsappIcon
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss";
</style>
