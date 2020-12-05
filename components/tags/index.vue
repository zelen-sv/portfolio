<template>
  <div v-if="list.length > 0" class="tags">
    <div v-for="item in list" :key="`tag-${item.title}`" :class="tagTypeStyles">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default: () => []
      },
      inline: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      tagTypeStyles () {
        return this.inline ? 'tags__item-inline' : 'tags__item';
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss";
</style>
