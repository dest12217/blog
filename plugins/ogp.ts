import { Plugin } from '@nuxt/types'
import { createCanvas } from 'canvas'

declare module 'vue/types/vue' {
  interface Vue {
    $ogp(text: string): string
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $ogp(text: string): string
  }

  interface Context {
    $ogp(text: string): string
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $ogp(text: string): string
  }
}

const plugin: Plugin = (_context, inject) => {
  inject('ogp', (text: string) => {
    const canvas = createCanvas(600, 315)
    const ctx = canvas.getContext('2d')
    const fontSize = 32
    const sliceTexts = text.match(/.{1,15}/g)

    ctx.fillStyle = '#334bc1'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#fff'
    ctx.fillRect(32, 32, (canvas.width - 64), (canvas.height - 64))

    ctx.fillStyle = '#333'
    ctx.font = `bold ${fontSize}px "游ゴシック", "YuGothic", "メイリオ", "Meiryo", Arial, Helvetica, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    if (sliceTexts) {
      for (const [index, sliceText] of sliceTexts.entries()) {
        ctx.fillText(
          sliceText,
          canvas.width / 2,
          canvas.height / 2 + fontSize * ((index * 1.2) - ((sliceTexts.length - 1) * 0.6))
        )
      }
    } else {
      ctx.fillText(
        text,
        canvas.width / 2,
        canvas.height / 2
      )
    }

    return canvas.toDataURL('image/jpeg')
  })
}

export default plugin
