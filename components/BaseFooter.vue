<template lang="pug">
  footer.footer
    .footer__inner
      .footer__profile-image
        img(src="@/assets/images/PictureProfile.png" alt="" decoding="async")
      dl.footer__profile-list
        div
          dt 管理人
          dd ですとみ
        div
          dt ひとこと
          dd フロントエンジニア4年目。来年こそはエンジニアアカウントを作る。
      ul.footer__profile-sns
        li: a(href="https://github.com/dest12217" target="_blank" rel="noopener"): img(src="@/assets/images/IconGithub.svg" alt="Github" decoding="async")
      p.footer__copy: small &copy; 2020 desto.me
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';

.footer {
  background-color: #f3f3f3;
  color: common.$C_TEXT;
  padding: 0 16px;

  &__inner {
    border-top: solid 1px common.$C_BORDER;
    max-width: 1080px;
    margin: 0 auto;
    padding: 32px 0;

    @include common.mq {
      padding: 48px 0;
    }
  }

  &__profile-list {
    text-align: center;
    margin-bottom: 24px;

    > div {
      margin-bottom: 8px;

      > dt {
        font-size: common.rem(16);
        font-weight: bold;
        margin-bottom: 4px;
      }

      > dd {
        font-size: common.rem(14);
      }
    }

    @include common.mq {
      > div {
        display: flex;
        justify-content: center;
        align-items: center;

        > dt {
          margin-right: 8px;
          margin-bottom: 0;
        }

        > dd {
          font-size: common.rem(16);
        }
      }
    }
  }

  &__profile-image {
    text-align: center;
    margin-bottom: 16px;

    img {
      border-radius: 50%;
      width: 80px;
    }

    @include common.mq {
      img {
        width: 110px;
      }
    }
  }

  &__profile-sns {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;

    > li {
      list-style: none;

      a {
        transition: opacity 0.4s;
      }

      img {
        width: 40px;
      }
    }

    @include common.rollover {
      a {
        opacity: 0.6;
      }
    }
  }

  &__copy {
    font-size: common.rem(14);
    text-align: center;
  }
}
</style>
