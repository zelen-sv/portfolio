<template>
  <div ref="content" class="markdown" v-html="$md.render(content)">

  </div>
</template>

<script>
  import hljs from 'highlight.js';
  import hljsDefineVue from 'highlightjs-vue';

  export default {
    props: {
      content: {
        type: String
      }
    },
    mounted () {
      hljsDefineVue(hljs);
      this.$refs.content.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss";
  @import "code-styles.scss";
</style>
