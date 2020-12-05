<template>
  <div class="skills-section">
    <div class="block-number">2.</div>
    <h1 class="section__h1">
      Skills
    </h1>
    <hr class="section__devider">
    <div class="skills-section__list">
      <card v-for="item in skills" :key="item.id" class="skills-section__item">
        <img :src="item.icon.url" :alt="item.title">
        <h5 class="skills-section__item-title">{{ item.title }}</h5>
        <p class="skills-section__item-description">
          {{ item.description }}
        </p>
      </card>
    </div>
  </div>
</template>

<script>
  import Card from '~/components/card';

  export default {
    props: {
      skills: {
        type: Array,
        default: () => []
      }
    },
    components: {
      Card
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss";
</style>
