<template lang="pug">
  bMain
    cHero(title="ページが存在しません")
    cButton(to="/") ブログトップへ戻る
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {
    bMain: () => import('@/components/BaseMain.vue'),
    cHero: () => import('@/components/CompHero.vue'),
    cButton: () => import('@/components/CompButton.vue')
  }
})
</script>
