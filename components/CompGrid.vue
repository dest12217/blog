<template lang="pug">
  .grid: slot
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';

.grid {
  $this: &;

  @include common.mq {
    display: flex;
    flex-wrap: wrap;
  }

  &--gap {
    #{$this}__item {
      margin-top: 8px;

      &:first-child {
        margin-top: 0;
      }
    }

    @include common.mq {
      margin-right: -4px;
      margin-left: -4px;

      #{$this}__item {
        padding-right: 4px;
        padding-left: 4px;
      }
    }
  }

  &--column2 {
    @include common.mq {
      #{$this}__item {
        width: 50%;

        &:nth-child(-n+2) {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
