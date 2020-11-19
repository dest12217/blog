<template lang="pug">
  bMain
    cHero(title="記事一覧")
      p #[b.hero__label Pickup] #[nuxt-link(to="/blog/20201111") ブログをリニューアルしました]
    cGrid.grid--column2.grid--gap
      cGridItem(v-for="{ slug, title, timestamp, tags } in articles" :key="slug")
        cArticle(:slug="slug" :title="title" :timestamp="timestamp" :tags="tags")
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  components: {
    bMain: () => import('@/components/BaseMain.vue'),
    cArticle: () => import('@/components/CompArticle.vue'),
    cGrid: () => import('@/components/CompGrid.vue'),
    cGridItem: () => import('@/components/CompGridItem.vue'),
    cHero: () => import('@/components/CompHero.vue')
  },
  async asyncData ({ $content }) {
    const articles = await $content('blog' || 'index').fetch()
    let resultArticles: IContentDocument | IContentDocument[]

    if (Array.isArray(articles)) {
      resultArticles = articles.sort((a, b) => parseInt(b.slug, 10) - parseInt(a.slug, 10))
    } else {
      resultArticles = articles
    }

    return { articles: resultArticles }
  },
  data: (): {
    blog: IContentDocument | IContentDocument[]
  } => ({
    blog: []
  })
})
</script>
