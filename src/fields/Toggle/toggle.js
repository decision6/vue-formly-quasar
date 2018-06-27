import { QToggle } from 'quasar'
import { returnPlainObject } from '../../helpers'
import { returnProps } from '../../common'

/**
 * Render a toggle component
 * @param  {Function} h     createElement function
 * @param  {Object} context
 * @param  {Object} item    vue component
 * @return {Object}         vue component
 */
export default (h, context) => {
  const inputDefinitions = returnPlainObject(context.to.toggle)
  const props = returnProps(context, inputDefinitions)
  return h(QToggle, props)
}
