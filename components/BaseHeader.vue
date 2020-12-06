<template lang="pug">
  header.header(ref="header")
    .header__background(ref="headerBackground")
    .header__inner
      .header__links
        p.header__logo 青色の紙切れ
      slot
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';
@use 'sass:map';

.header {
  color: map.get(common.$COLOR, white);
  padding: 0 16px;
  position: relative;
  overflow: hidden;

  a {
    color: inherit;
  }

  &__background {
    background: url('~@/assets/images/Background_1.jpg') no-repeat 50% 50% / cover #00a5e4;
    content: '';
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    min-height: 172px;

    &::before {
      background-color: rgba(map.get(common.$COLOR, black), 0.1);
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    @include common.mq {
      min-height: 288px;
    }
  }

  &__inner {
    max-width: 1080px;
    margin: 0 auto;
    padding: 24px 0;

    > :last-child {
      margin-bottom: 0 !important;
    }

    @include common.mq {
      padding: 32px 0 48px;
    }
  }

  &__logo {
    font-size: common.rem(14);
    font-weight: bold;

    @include common.mq {
      font-size: common.rem(18);
    }
  }

  &__title {
    font-size: common.rem(26);
    font-weight: bold;
    position: relative;
    margin-bottom: 16px;
    padding-bottom: 8px;

    &::before {
      background-color: currentColor;
      content: '';
      display: block;
      width: 1em;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    @include common.mq {
      font-size: common.rem(48);
      margin-bottom: 24px;
      padding-bottom: 16px;
    }
  }

  &__links {
    margin-bottom: 8px;

    @include common.mq {
      margin-bottom: 32px;
    }
  }

  &__label {
    background-color: common.$C_BACK;
    box-shadow: 0 1px 2px rgba(map.get(common.$COLOR, black), 0.2);
    color: common.$C_TEXT;
    display: inline-block;
    font-size: common.rem(12);
    padding: 0 8px;
    margin-right: 8px;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted () {
    const { header, headerBackground } = this.$refs as { [key: string]: HTMLElement }
    const media = matchMedia('(min-width: 769px)')
    const setHeight = () => {
      headerBackground.style.height = `${header.offsetHeight}px`
    }

    setHeight()
    media.addListener(setHeight)
  }
})
</script>
