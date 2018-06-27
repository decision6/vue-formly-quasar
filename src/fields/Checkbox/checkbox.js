import { QCheckbox } from 'quasar'
import { returnProps, optionValueToVal } from '../../common'

/**
 * Render a checkbox component
 * @param  {Function} h     createElement function
 * @param  {Object} context
 * @param  {Object} item    vue component
 * @return {Object}         vue component
 */
export default (h, context, option) => {
  const optionsTransformed = optionValueToVal(option)
  const props = returnProps(context, optionsTransformed)
  return h(QCheckbox, props)
}
