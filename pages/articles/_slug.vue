<template>
  <div class="article-page">
    <h1 class="article-page__header">{{ article.title }}</h1>
    <div class="article-page__info">
      <tags :list="article.tags" inline class="article-page__tags" />
      <div class="article-page__date">{{ article.createdAt | to_date }}</div>
    </div>
    <markdown :content="article.content" />
  </div>
</template>

<script>
  import { getArticle } from '~/api/queries';
  import Markdown from '~/components/markdown'
  import Tags from '~/components/tags'

  export default {
    layout: 'blog',
    head () {
      return {
        title: `${this.article.title} • Stas Zelenko`,
        meta: [
          { hid: 'description', name: 'description', content: `${this.article.title} • Stas Zelenko` },
          { hid: 'og:title', name: 'og:title', content: `Stas Zelenko • Articles | ${this.article.seoDesc}` },
          { hid: 'og:description', name: 'og:description', content: `Stas Zelenko • Articles | ${this.article.seoDesc}` },
          { property: 'og:site_name', content: 'Stas Zelenko' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://zelen-co.com' },
          { property: 'keywords', content: 'stas,zelenko,zelenco,stas zelenko,portfolio,design,experience,iOS,web,developer,freelance, nuxt.js developer, full stack,vue.js developer, rails developer' },
        ]
      }
    },
    components: {
      Markdown, Tags
    },
    async asyncData({ $graphcms, params }) {
      const { article } = await $graphcms.request(getArticle, { slug: params.slug });
      return { article }
    }
  }
</script>
