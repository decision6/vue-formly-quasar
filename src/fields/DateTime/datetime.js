import { QDatetime } from 'quasar-framework'
import { returnPlainObject } from '../../helpers'
import { returnProps } from '../../common'

/**
 * Render a datetime component
 * @param  {Function} h        createElement function
 * @param  {Object}   context
 * @param  {Array}    children
 * @return {Object}            vue component
 */
export default (h, context, children = []) => {
  const inputDefinitions = returnPlainObject(context.to.datetime)
  const props = returnProps(context, inputDefinitions)
  return h(QDatetime, props, children)
}
