import { QCard, QCardTitle, QCardMain } from 'quasar-framework'

export default {
  functional: true,
  props: {
    title: {
      required: true,
      type: String
    }
  },
  render (h, context) {
    const { title } = context.props

    return h(
      QCard,
      [
        h(QCardTitle, title),
        h(QCardMain, [ ...context.slots().default ])
      ]
    )
  }
}
