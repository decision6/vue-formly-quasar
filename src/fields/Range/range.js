import { QRange } from 'quasar'
import { returnPlainObject } from '../../helpers'
import { returnProps } from '../../common'

/**
 * Render a range component
 * @param  {Function} h     createElement function
 * @param  {Object} context
 */
export default (h, context) => {
  const inputDefinitions = returnPlainObject(context.to.range)
  const props = returnProps(context, inputDefinitions)
  return h(QRange, props)
}
