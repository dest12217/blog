<template lang="pug">
  .hero
    h1.hero__title {{ title }}
    slot
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';
@use 'sass:map';

.hero {
  color: map.get(common.$COLOR, white);
  margin-bottom: 32px;
  padding: 32px 0;
  position: relative;

  @include common.mq {
    margin-bottom: 48px;
    padding: 48px 0;
  }

  &::before {
    background-color: common.$C_ACCENT;
    box-shadow: 0 2px 4px rgba(map.get(common.$COLOR, black), 0.2);
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(50% - 50vw);
    z-index: -1;
    width: 100vw;
  }

  > :first-child {
    margin-top: 0 !important;
  }

  > :last-child {
    margin-bottom: 0 !important;
  }

  a {
    color: inherit;
  }

  &__title {
    font-size: common.rem(24);
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

  &__label {
    background-color: common.$C_BACK;
    box-shadow: 0 1px 2px rgba(map.get(common.$COLOR, black), 0.2);
    color: common.$C_ACCENT;
    display: inline-block;
    font-size: common.rem(12);
    padding: 0 8px;
    margin-right: 8px;
  }

  &__detail-row {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
      required: true
    }
  }
})
</script>
