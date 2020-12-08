<template lang="pug">
  main.main: .main__inner: slot
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';

.main {
  background-color: #f3f3f3;
  color: common.$C_TEXT;
  padding: 0 16px;

  &__inner {
    max-width: 920px;
    margin: 0 auto;
    padding: 32px 0;

    @include common.mq {
      padding: 64px 0;
    }
  }
}
</style>
