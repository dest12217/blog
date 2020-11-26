<template lang="pug">
  .grid__item: slot
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';

.grid__item {
  &--only {
    @include common.mq {
      display: flex;
    }
  }
}
</style>
