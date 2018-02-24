import { QSelect } from 'quasar-framework'
import { returnPlainObject } from '../../helpers'
import { returnProps } from '../../common'

/**
 * Render a select component
 * @param  {Function} h     createElement function
 * @param  {Object} context
 * @param  {Object} item    vue component
 * @return {Object}         vue component
 */
export default (h, context) => {
  const selectDefinitions = returnPlainObject(context.to.select)
  const props = returnProps(context, selectDefinitions)
  return h(QSelect, props)
}
