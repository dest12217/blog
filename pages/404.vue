<template lang="pug">
  .wrap
    bHeader
      h1.header__title ページが存在しません
    bMain
      p.ta__c: cButton(to="/") ブログトップへ戻る
    bFooter
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';
@use '@/assets/scss/adjustment.scss';
@use 'sass:map';
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {
    bFooter: () => import('@/components/BaseFooter.vue'),
    bHeader: () => import('@/components/BaseHeader.vue'),
    bMain: () => import('@/components/BaseMain.vue'),
    cButton: () => import('@/components/CompButton.vue')
  }
})
</script>
