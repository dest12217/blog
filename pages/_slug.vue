<template lang="pug">
  bMain
    cHero(:title="article.title")
      .hero__detail--blog
        .hero__detail-row
          p {{ article.timestamp }}
          cTags(:items="article.tags")
        .hero__detail-row
          cListShare
            li: a.twitter-share-button(
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              data-size="large"
              :data-text="article.title"
              :data-url="`https://desto.me/blog/${article.slug}/`"
              data-lang="ja"
              data-show-count="false"
            ) ツイート
            li: iframe(
              src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=large&width=79&height=28&appId"
              width="79"
              height="28"
              style="border:none; overflow:hidden;"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            )
            li: a.hatena-bookmark-button(
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
    section.section
      .section__header
        cBreadcrumb(:items="breadcrumb")
      .section__content
        nuxtContent(:document="article")
      .section__footer
        p: cButton(to="/") ブログトップへ戻る
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';
@use '@/assets/scss/adjustment.scss';
@use 'sass:map';

.section {
  &__header {
    margin-bottom: 32px;
  }

  &__content {
    background-color: common.$C_BACK;
    box-shadow: 0 4px 8px rgba(map.get(common.$COLOR, black), 0.2);
    line-height: 1.8;
    margin-bottom: 24px;
    padding: 24px 16px;

    > :first-child {
      margin-top: 0 !important;
    }

    > :last-child {
      margin-bottom: 0 !important;
    }

    @include common.deep {
      h2 {
        font-size: common.rem(24);
        font-weight: bold;
        line-height: 1.5;
        margin: 32px 0 16px;
      }

      p {
        margin-bottom: 16px;
      }

      a {
        @include common.rollover {
          text-decoration: none;
        }
      }

      blockquote {
        background-color: #f3f3f3;
        border-left: solid 5px #ccc;
        padding: 16px;
        margin-bottom: 16px;

        > :first-child {
          margin-top: 0 !important;
        }

        > :last-child {
          margin-bottom: 0 !important;
        }
      }

      pre {
        line-height: 1.5;
        margin-bottom: 16px;
      }

      ul {
        > li {
          padding-left: 20px;
          position: relative;
          list-style: none;

          &::before {
            content: '';
            display: block;
            position: absolute;
            top: calc(0.9em - 2px);
            left: 0;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: #333;
          }
        }
      }
    }

    @include common.mq {
      padding: 48px 32px;

      @include common.deep {
        h2 {
          font-size: common.rem(30);
        }
      }
    }
  }

  &__footer {
    padding: 0 16px;

    @include common.mq {
      padding: 0;
    }
  }
}

.hero__detail-row {
  .tags {
    margin-bottom: 0;
    margin-left: 16px;

    @include common.mq {
      margin-left: 24px;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  components: {
    bMain: () => import('@/components/BaseMain.vue'),
    cButton: () => import('@/components/CompButton.vue'),
    cBreadcrumb: () => import('@/components/CompBreadcrumb.vue'),
    cListShare: () => import('@/components/CompList--share.vue'),
    cHero: () => import('@/components/CompHero.vue'),
    cTags: () => import('@/components/CompTags.vue')
  },
  async asyncData ({ $content, params, error }) {
    const article = await $content('article', params.slug).fetch().catch(() => {
      error({
        statusCode: 404,
        message: 'このページは存在しません'
      })
    })

    return { article: Array.isArray(article) ? article[0] : article }
  },
  data: (): {
    article?: IContentDocument
  } => ({}),
  computed: {
    breadcrumb () {
      return [
        {
          text: this.article?.title,
          to: `${this.article?.slug}`
        }
      ]
    }
  },
  head () {
    return {
      titleTemplate: `${this.article?.title} - 青色の紙切れ`,
      meta: [
        { hid: 'description', name: 'description', content: `「${this.article?.title}」についての記事です。` },
        { hid: 'og:url', name: 'og:url', content: `https://desto.me/blog/${this.article?.slug}/` },
        { hid: 'og:description', name: 'og:description', content: `「${this.article?.title}」についての記事です。` },
        { hid: 'og:image', name: 'og:image', content: `${this.$ogp(this.article?.title)}` }
      ],
      link: [
        { rel: 'canonical', href: `https://desto.me/blog/${this.article?.slug}/` }
      ],
      script: [
        { src: 'https://platform.twitter.com/widgets.js', async: true },
        { src: 'https://b.st-hatena.com/js/bookmark_button.js', async: true }
      ]
    }
  }
})
</script>
