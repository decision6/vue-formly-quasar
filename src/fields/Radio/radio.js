import { QRadio } from 'quasar-framework'
import { returnProps, optionValueToVal } from '../../common'

/**
 * Render a radio component
 * @param  {Function} h     createElement function
 * @param  {Object} context
 * @param  {Object} item    vue component
 * @return {Object}         vue component
 */
export default (h, context, option) => {
  const optionsTransformed = optionValueToVal(option)
  const props = returnProps(context, optionsTransformed)
  return h(QRadio, props)
}
