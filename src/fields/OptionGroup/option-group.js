import { QOptionGroup } from 'quasar'
import { returnPlainObject } from '../../helpers'
import { returnProps } from '../../common'

/**
 * Render a option group component
 * @param  {Function} h     createElement function
 * @param  {Object} context
 * @param  {Object} item    vue component
 * @return {Object}         vue component
 */
export default (h, context) => {
  const optionGroupDefinitions = returnPlainObject(context.to.option_group)
  const props = returnProps(context, optionGroupDefinitions)
  return h(QOptionGroup, props)
}
