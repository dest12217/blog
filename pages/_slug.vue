<template lang="pug">
  .wrap
    bHeader
      h1.header__title {{ article.title }}
      cTags(:items="article.tags")
    bMain
      section.section
        .section__header
          cBreadcrumb(:items="breadcrumb")
        .section__content
          nuxtContent(:document="article")
        .section__footer
          cGrid.grid--split
            cGridItem: p: cButton(to="/") ブログトップへ戻る
            cGridItem: cListShare(:twitter="true", :facebook="true", :hatena="true", :url="`https://www.desto.me/blog/${article.slug}/`")
    bFooter
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

        code {
          background-color: #f5f2f0;
          display: inline-block;
          padding: 0 4px;
        }
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
        margin-bottom: 16px;

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
            background-color: common.$C_TEXT;
          }
        }
      }

      table {
        border-collapse: collapse;
        table-layout: fixed;
        margin-bottom: 16px;

        td,
        th {
          border: solid 1px common.$C_BORDER;
          padding: 4px 8px;
        }

        thead {
          td,
          th {
            background-color: #f3f3f3;
            font-weight: bold;
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

        table {
          td,
          th {
            padding: 8px 16px;
          }
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
</style>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  components: {
    bFooter: () => import('@/components/BaseFooter.vue'),
    bHeader: () => import('@/components/BaseHeader.vue'),
    bMain: () => import('@/components/BaseMain.vue'),
    cButton: () => import('@/components/CompButton.vue'),
    cBreadcrumb: () => import('@/components/CompBreadcrumb.vue'),
    cGrid: () => import('@/components/CompGrid.vue'),
    cGridItem: () => import('@/components/CompGridItem.vue'),
    cListShare: () => import('@/components/CompList--share.vue'),
    cTags: () => import('@/components/CompTags.vue')
  },
  async asyncData ({ $content, params, redirect }) {
    const article = await $content('article', params.slug).fetch().catch(() => {
      redirect('/404')
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
        { hid: 'description', name: 'description', content: `「${this.article?.title}」についての記事です。青色の紙切れはHTML/CSS/JavaScriptなどフロントエンド技術を中心としたテックブログです。` },
        { hid: 'og:title', name: 'og:title', content: `${this.article?.title} - 青色の紙切れ` },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'og:url', name: 'og:url', content: `https://www.desto.me/blog/${this.article?.slug}/` },
        { hid: 'og:description', name: 'og:description', content: `「${this.article?.title}」についての記事です。青色の紙切れはHTML/CSS/JavaScriptなどフロントエンド技術を中心としたテックブログです。` }
      ],
      link: [
        { rel: 'canonical', href: `https://www.desto.me/blog/${this.article?.slug}/` }
      ],
      script: [
        { src: 'https://platform.twitter.com/widgets.js', async: true },
        { src: 'https://b.st-hatena.com/js/bookmark_button.js', async: true }
      ]
    }
  }
})
</script>
