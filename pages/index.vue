<template lang="pug">
  .wrap
    bHeader
      h1.header__title 記事一覧
      p #[b.header__label Pickup] #[nuxt-link(to="/20201111/") ブログをリニューアルしました]
    bMain
      cGrid.grid--column2.grid--gap
        cGridItem.grid__item--only(v-for="{ slug, title, timestamp, tags, text } in articles" :key="slug")
          cArticle(:slug="slug" :title="title" :timestamp="timestamp" :tags="tags" :text="formatText(text)")
    bFooter
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  components: {
    bFooter: () => import('@/components/BaseFooter.vue'),
    bHeader: () => import('@/components/BaseHeader.vue'),
    bMain: () => import('@/components/BaseMain.vue'),
    cArticle: () => import('@/components/CompArticle.vue'),
    cGrid: () => import('@/components/CompGrid.vue'),
    cGridItem: () => import('@/components/CompGridItem.vue')
  },
  async asyncData ({ $content }) {
    const articles = await $content('article', {
      text: true
    }).fetch()
    let resultArticles: IContentDocument | IContentDocument[]

    if (Array.isArray(articles)) {
      resultArticles = articles.sort((a, b) => parseInt(b.slug, 10) - parseInt(a.slug, 10))
    } else {
      resultArticles = articles
    }

    return { articles: resultArticles }
  },
  data: (): {
    articles: IContentDocument | IContentDocument[]
  } => ({
    articles: []
  }),
  methods: {
    formatText (text: string) {
      let formatText = text

      formatText = formatText.replace(/```(html|javascript)/g, '')
      formatText = formatText.replace(/[`]/g, '')
      formatText = formatText.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      formatText = formatText.substr(0, 60)

      return formatText
    }
  }
})
</script>
