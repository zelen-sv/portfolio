<template>
  <div class="projects-section">
    <div class="block-number">3.</div>
    <h1 class="section__h1">
      Projects
    </h1>
    <hr class="section__devider">
    <content-slider>
      <div v-for="item in projects" :key="item.order" slot="slides" class="projects-section__work">
        <div class="projects-section__image" :style="{ background: `url(${item.image.url})` }" >
          <div class="projects-section__image-border"></div>
        </div>

        <div class="projects-section__info">
          <div class="projects-section__number">{{ item.order }}.</div>
          <h4 class="projects-section__title">{{ item.title }}</h4>
          <p class="projects-section__description">{{ item.description }}</p>
          <tags class="projects-section__tags" :list="item.tags" inline />
          <a :href="item.url" target="blank">
            <v-button class="projects-section__button" text="Website" />
          </a>
        </div>
      </div>

        <div slot="preload">
          <img :src="item.image.url" v-for="item in projects" :key="`preload-image-${item.id}`" />
        </div>
      </content-slider>
  </div>
</template>

<script>
  import Card from '~/components/card';
  import Tags from '~/components/tags';
  import Button from '~/components/button';
  import ContentSlider from '~/components/content-slider';
  import LinkIcon from '~/components/icons/link.vue';

  export default {
    props: {
      projects: {
        type: Array,
        default: () => []
      }
    },
    components: {
      Card, Tags, LinkIcon, ContentSlider,
      'v-button': Button
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss";
</style>
