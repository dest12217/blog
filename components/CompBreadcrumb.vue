<template lang="pug">
nav.breadcrumb
  ul.breadcrumb__inner(itemscope itemtype="https://schema.org/BreadcrumbList")
    li.breadcrumb__item(itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem")
      nuxt-link.breadcrumb__link(to="/blog" itemprop="item") ブログトップ
      meta(itemprop="position" content="1")
    li.breadcrumb__item(itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" v-for="(item, index) in items" :key="item.text")
      span(v-if="item === items.slice(-1)[0]") {{ item.text }}
      nuxt-link.breadcrumb__link(:to="item.to" itemprop="item" v-else) {{ item.text }}
      meta(itemprop="position" :content="index + 2")
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';

.breadcrumb {
  font-size: common.rem(14);

  &__inner {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    list-style: none;

    &:nth-child(n+2) {
      padding-left: 24px;
      position: relative;

      &::before {
        background-color: common.$C_TEXT;
        content: '';
        display: block;
        width: 1px;
        height: 1em;
        transform: rotate(30deg);
        position: absolute;
        top: calc(50% - 0.5em);
        left: 13px;
      }
    }
  }

  &__link {
    @include common.rollover {
      text-decoration: none;
    }
  }
}
</style>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { RawLocation } from 'vue-router'

export default Vue.extend({
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true
    } as PropOptions<{
      text: string,
      to: RawLocation
    }[]>
  }
})
</script>
