<template lang="pug">
  main.main: .main__inner: slot
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';

.main {
  color: common.$C_TEXT;
  padding: 0 16px;

  &__inner {
    max-width: 850px;
    margin: 0 auto;
    padding-bottom: 32px;

    @include common.mq {
      padding-bottom: 48px;
    }
  }
}
</style>
