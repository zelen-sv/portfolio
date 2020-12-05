<template>
  <div id="slider-head" class="content-slider">
    <div class="content-slider__container"
         v-touch:swipe.right="prev"
         v-touch:swipe.left="next">
      <transition name="fade" mode="out-in">
        <slot name="activeSlide" />
      </transition>
    </div>
    <div v-if="slides.length > 1" class="content-slider__controls">
      <div class="content-slider__dots">
        <span v-for="(dot, index) in slides.length"
              :key="'slider-pagination-' + index"
              class="content-slider__dot-item"
              :class="{ 'content-slider__dot-item--active': activeIndex == index }"
              @click="updateSlide(index)"></span>
      </div>
    </div>
    <div class="content-slider__preload">
      <slot name="preload" />
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: 0
      }
    },
    computed: {
      slides () {
        return this.$slots.slides;
      },
      slidesCount () {
        return this.slides.length;
      }
    },
    created () {
      this.$slots.activeSlide = this.slides[this.activeIndex]
    },
    methods: {
      updateSlide (index) {
        this.activeIndex = index
        this.setActiveSlide()
      },
      next () {
        if (this.activeIndex == (this.slidesCount - 1)) {
          this.activeIndex = 0
        } else {
          this.activeIndex += 1;
        }
        this.setActiveSlide()
      },
      prev () {
        if (this.activeIndex == 0) {
          this.activeIndex = this.slidesCount - 1
        } else {
          this.activeIndex -= 1;
        }
        this.setActiveSlide()
      },
      setActiveSlide () {
        this.$slots.activeSlide = this.slides[this.activeIndex]
        this.$forceUpdate()
        this.$scrollTo('#slider-head')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles.scss"
</style>
