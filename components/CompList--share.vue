<template lang="pug">
  ul.list--share
    li(v-if="twitter"): a.twitter-share-button(
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      data-size="large"
      :data-url="url"
      data-lang="ja"
      data-show-count="false"
    ) ツイート
    li(v-if="facebook"): iframe(
      src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=large&width=79&height=28&appId"
      width="79"
      height="28"
      style="border:none; overflow:hidden;"
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    )
    li(v-if="hatena"): a.hatena-bookmark-button(
      href="https://b.hatena.ne.jp/entry/"
      data-hatena-bookmark-layout="basic-label"
      data-hatena-bookmark-lang="ja"
      data-hatena-bookmark-height="28"
      title="このエントリーをはてなブックマークに追加"
    ): img(
      src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
      alt="このエントリーをはてなブックマークに追加"
      width="20"
      height="20"
      style="border: none;"
    )
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

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    twitter: {
      type: Boolean,
      default: false
    },
    facebook: {
      type: Boolean,
      default: false
    },
    hatena: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ''
    }
  }
})
</script>
