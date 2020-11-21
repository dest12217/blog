<template lang="pug">
  bMain
    cHero(:title="error.message")
    cButton(to="/") ブログトップへ戻る
</template>

<script lang="ts">
import { NuxtError } from '@nuxt/types'
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  components: {
    bMain: () => import('@/components/BaseMain.vue'),
    cHero: () => import('@/components/CompHero.vue'),
    cButton: () => import('@/components/CompButton.vue')
  },
  props: {
    error: {
      type: Object,
      default: () => ({
        message: 'エラーが発生しています'
      })
    } as PropOptions<NuxtError>
  }
})
</script>
