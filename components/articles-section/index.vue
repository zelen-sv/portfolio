<template>
  <div class="articles-section">
    <div class="block-number">5.</div>
    <h1 class="section__h1">
      Articles
    </h1>
    <hr class="section__devider">
    <content-slider>
      <div class="articles-section__list"
           v-for="slideArticles, index in splitArticlesForSlider"
           slot="slides"
           :key="`articles-slide-${index}`">
        <nuxt-link v-for="item in slideArticles"
                   :to="{ name: 'articles-slug', params: { slug: item.slug } }"
                   :key="item.id" >
          <card :hovered="false" class="articles-section__item">
            <div class="articles-section__content">
              <h5 class="articles-section__item-title">{{ item.title }}</h5>
              <p class="articles-section__item-description">
                {{ item.previewDesc }}
              </p>
              <tags class="articles-section__tags" :list="item.tags" inline />
            </div>
            <div class="articles-section__date">
              <p class="articles-section__item-date">{{ item.createdAt | to_date }}</p>
            </div>
          </card>
        </nuxt-link>
      </div>
    </content-slider>
  </div>
</template>

<script>
  import Card from '~/components/card';
  import Tags from '~/components/tags';
  import ContentSlider from '~/components/content-slider';

  export default {
    props: {
      articles: {
        type: Array,
        default: () => []
      }
    },
    components: {
      Card, Tags, ContentSlider
    },
    computed: {
      splitArticlesForSlider () {
        let results = [],
            index = 0;
        while (index < this.articles.length) {
          results.push(this.articles.slice(index, 2 + index));
          index += 2;
        }
        return results;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss";
</style>
