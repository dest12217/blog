<template lang="pug">
  ul.list--share: slot
</template>

<style lang="scss" scoped>
.list--share {
  display: flex;
  align-items: center;

  > li {
    list-style: none;
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
