<template>
  <nav class="mobile-navbar" id="mobile-navbar">
    <div class="mobile-navbar__nav" >
      <logo class="mobile-navbar__logo" />

      <hamburger class="mobile-navbar__hamburger"
                 @click.native="toggleNavbar"
                 :active="menuExpanded" />
    </div>
    <transition name="slide">
      <div v-show="menuExpanded" class="mobile-navbar__content">
        <div class="mobile-navbar__links">
          <a href="#" v-for="item in sections"
                      :key="`nav-${item}`"
                      v-scroll-to="`#${item}`"
                      class="mobile-navbar__link"
                      :class="{ 'mobile-navbar__link--active': active === item }"
                      @click="hideNavbar">
            {{ item }}
          </a>
        </div>
        <div class="mobile-navbar__social">
          <a href="" class="mobile-navbar__email">st.zelenko@gmail.com</a>
          <div class="mobile-navbar__icons">
            <a href="https://github.com/zelen-sv" target="blank">
              <github-icon class="mobile-navbar__icon-item" />
            </a>
            <a href="https://t.me/st_zelenko" target="blank">
              <telegram-icon class="mobile-navbar__icon-item"/>
            </a>
            <a href="https://wa.me/375293079905" target="blank">
              <whatsapp-icon class="mobile-navbar__icon-item" />
            </a>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
  import Hamburger from '~/components/hamburger';
  import Logo from '~/components/logo';
  import GithubIcon from '~/components/icons/github';
  import TelegramIcon from '~/components/icons/telegram';
  import WhatsappIcon from '~/components/icons/whatsapp';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      Hamburger, Logo, GithubIcon, TelegramIcon, WhatsappIcon
    },
    data () {
      return {
        menuExpanded: false
      }
    },
    computed: {
      ...mapGetters('paginator', [ 'active', 'sections' ])
    },
    methods: {
      toggleNavbar () {
        this.menuExpanded = !this.menuExpanded
      },
      hideNavbar () {
        this.menuExpanded = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss"
</style>
