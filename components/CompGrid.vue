<template lang="pug">
  .grid: slot
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';

.grid {
  $this: &;

  @include common.mq {
    display: flex;
  }

  &--gap {
    #{$this}__item {
      margin-top: 20px;

      &:first-child {
        margin-top: 0;
      }
    }

    @include common.mq {
      margin-right: -10px;
      margin-left: -10px;

      #{$this}__item {
        padding-right: 10px;
        padding-left: 10px;
      }
    }
  }

  &--column2 {
    @include common.mq {
      flex-wrap: wrap;

      #{$this}__item {
        width: 50%;

        &:nth-child(-n+2) {
          margin-top: 0;
        }
      }
    }
  }

  &--split {
    justify-content: space-between;
    align-items: center;

    #{$this}__item {
      margin-top: 20px;

      &:first-child {
        margin-top: 0;
      }
    }

    @include common.mq {
      #{$this}__item {
        margin-top: 0;
      }
    }
  }
}
</style>
