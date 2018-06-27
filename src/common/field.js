import { QField } from 'quasar'
import { returnPlainObject } from '../helpers'

/**
 * Render a field component
 * @param  {Function} h     createElement function
 * @param  {Object} context
 * @param  {Object} item    vue component
 * @return {Object}         vue component
 */
export default (h, context, item) => {
  const fieldDefinitions = returnPlainObject(context.to.field)
  const props = Object.assign({ }, fieldDefinitions)
  return h(QField, { props }, [ item ])
}
