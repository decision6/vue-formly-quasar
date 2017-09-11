import { QInput } from 'quasar-framework'
import { returnPlainObject } from '../../helpers'
// import { returnProps } from '../../common'

const returnPropsToArray = (context, option, index) => {
  const props = Object.assign({
    value: context.model[context.field.key][index],
    error: context.hasError
  }, option)
  return {
    props,
    on: {
      input: value => {
        context.model[context.field.key][index] = value
      },
      blur: context.onBlur,
      focus: context.onFocus,
      change: context.onChange,
      keyDown: context.onKeydown,
      keyUp: context.onKeyup,
      click: context.onClick
    }
  }
}


const createInput = (h, props) => h(QInput, props)

/**
 * Render a input component
 * @param  {Function} h     createElement function
 * @param  {Object} context
 * @param  {Object} item    vue component
 * @return {Object}         vue component
 */
export default (h, context) => {
  const inputDefinitions = returnPlainObject(context.to.input)
  const values = context.model[context.field.key] || []
  const inputs = values.map((value, index) => createInput(h, returnPropsToArray(context, option, index)))
  return h('div', inputs)
}
