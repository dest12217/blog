<template lang="pug">
  nuxt-link.button(:to="to"): span: slot
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';
@use 'sass:map';

.button {
  background-color: map.get(common.$COLOR, black);
  color: map.get(common.$COLOR, white);
  display: inline-block;
  padding: 16px 0;
  text-align: center;
  text-decoration: none;
  width: 100%;

  @include common.mq {
    min-width: 240px;
    width: auto;
  }

  @include common.rollover {
    > span {
      text-decoration: underline;
    }
  }

  > span {
    display: inline-block;
    padding: 0 16px 0 40px;
    position: relative;

    &::before {
      background-image: url('~@/assets/images/IconArrow.svg');
      content: '';
      display: block;
      width: 17px;
      height: 6px;
      position: absolute;
      top: calc(50% - 3px);
      left: 16px;
    }
  }
}
</style>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { RawLocation } from 'vue-router'

export default Vue.extend({
  props: {
    to: {
      type: String || Object,
      default: '',
      required: true
    } as PropOptions<RawLocation>
  }
})
</script>
