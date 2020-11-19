<template lang="pug">
  #page
    Nuxt
    footer.footer
      p: small &copy; 2020 desto.me
</template>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  position: relative;
  box-sizing: border-box;
  background-color: #f3f3f3;
  font-family: "\6e38\30b4\30b7\30c3\30af", "YuGothic", "\30e1\30a4\30ea\30aa", "Meiryo", Arial, Helvetica, sans-serif;
  font-feature-settings: "palt";
  font-weight: 400;
  text-size-adjust: 100%;
  overflow-y: scroll;
}

.footer {
  font-size: 14px;
  text-align: center;
  padding: 8px 0;
}
</style>
