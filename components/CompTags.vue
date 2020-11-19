<template lang="pug">
  ul.tags: li.tags__item(v-for="item in items" :key="item"): span {{ item }}
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';
@use 'sass:map';

.tags {
  display: flex;
  font-size: common.rem(14);
  font-weight: bold;
  margin-right: -8px;
  margin-bottom: 32px;

  @include common.mq {
    margin-bottom: 48px;
  }

  &__item {
    margin-right: 8px;
    list-style: none;

    > span {
      background-color: common.$C_BACK;
      box-shadow: 0 2px 4px rgba(map.get(common.$COLOR, black), 0.2);
      color: common.$C_TEXT;
      display: inline-block;
      padding: 0 8px 0 24px;
      position: relative;

      &::before {
        background-color: common.$C_ACCENT;
        border-radius: 50%;
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        position: absolute;
        top: calc(50% - 3px);
        left: 8px;
      }
    }
  }
}

</style>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
export default Vue.extend({
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true
    } as PropOptions<string[]>
  }
})
</script>
