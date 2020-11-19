<template lang="pug">
  article.article
    h2.article__title: nuxt-link.article__link(:to="`/blog/${slug}`") {{ title }}
    p.article__timestamp {{ timestamp }}
    cTags(:items="tags")
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';
@use 'sass:map';

.article {
  background-color: common.$C_BACK;
  box-shadow: 0 2px 4px rgba(map.get(common.$COLOR, black), 0.2);
  padding: 16px;

  > :last-child {
    margin-bottom: 0 !important;
  }

  &__link {
    color: common.$C_TEXT;
    text-decoration: none;
    transition: color 0.2s;

    a {
      color: inherit;
    }

    @include common.rollover {
      color: #00a5e4;
    }
  }

  &__title {
    font-size: common.rem(20);
    font-weight: bold;

    @include common.mq {
      font-size: common.rem(24);
    }
  }

  &__timestamp {
    color: #999;
    font-size: common.rem(14);
    margin-bottom: 8px;
  }
}
</style>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  components: {
    cTags: () => import('@/components/CompTags.vue')
  },
  props: {
    slug: {
      type: String,
      default: '',
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    timestamp: {
      type: String,
      default: '',
      required: true
    },
    tags: {
      type: Array,
      default: () => [],
      required: true
    } as PropOptions<string[]>
  }
})
</script>
