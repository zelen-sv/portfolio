<template>
  <div class="index-page">
    <div class="index-page__data">
      <v-header id="about" v-waypoint="waypointOptions" class="section section--top" />
      <skills-section id="skills" v-waypoint="waypointOptions" :skills="skills" class="section" />
      <projects-section id="projects" v-waypoint="waypointOptions" :projects="projects" class="section" />
      <articles-section id="articles" v-waypoint="waypointOptions" :articles="articles" class="section" />
      <contact-section id="contact" v-waypoint="waypointOptions" class="section section--bottom" />
    </div>
    <div class="index-page__paginator">
      <paginator />
    </div>
  </div>
</template>

<script>
  import Header from '~/components/header';
  import SkillsSection from '~/components/skills-section';
  import ProjectsSection from '~/components/projects-section';
  import ArticlesSection from '~/components/articles-section';
  import ContactSection from '~/components/contact-section';
  import Paginator from '~/components/paginator';
  import { siteData } from '~/api/queries';
  import { mapActions } from 'vuex';

  export default {
    head () {
      return {
        title: 'Stas Zelenko • Minsk based Freelance Full Stack Web Developer',
        meta: [
          { hid: 'description', name: 'description', content: 'Hey, I\'m a software developer from Minsk, Belarus. I can help you build your next product.' },
          { hid: 'og:title', name: 'og:title', content: 'Stas Zelenko • Minsk based Freelance Full Stack Web Developer' },
          { hid: 'og:description', name: 'og:description', content: 'Hey, I\'m a software developer from Minsk, Belarus. I can help you build your next product.' },
          { property: 'og:site_name', content: 'Stas Zelenko' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://zelen-co.com' },
          { property: 'keywords', content: 'stas,zelenko,zelenco,stas zelenko,portfolio,design,experience,iOS,web,developer,freelance, nuxt.js developer, full stack,vue.js developer, rails developer' },
        ]
      }
    },
    components: {
      'v-header': Header,
      SkillsSection, Paginator, ProjectsSection, ArticlesSection, ContactSection
    },
    async asyncData({ $graphcms }) {
      const { skills, projects, articles } = await $graphcms.request(siteData);
      return { skills, projects, articles }
    },
    computed: {
      waypointOptions () {
        return { active: true, callback: this.onScrolled, options: { threshold: [0.25, 0.75] } };
      }
    },
    methods: {
      ...mapActions('paginator', [
        'updatePaginator'
      ]),
      onScrolled (ev) {
        let id = ev.el.id;
        if (ev.going === 'in') {
          this.updatePaginator(id)
        }
      }
    }
  }
</script>
