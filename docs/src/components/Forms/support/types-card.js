import { QCard, QCardTitle, QCardMain, QCardSeparator } from 'quasar-framework'

export default {
  functional: true,
  props: {
    title: {
      required: true,
      type: String
    },
    href: {
      type: String,
      default: '#'
    }
  },
  render (h, context) {
    const { title, href } = context.props

    return h(
      QCard,
      [
        h(QCardTitle, title),
        h(QCardSeparator),
        h(QCardMain, [
          ...context.slots().default,
          h('a', {
            attrs: { href }
          }, 'See example code')
        ])
      ]
    )
  }
}
