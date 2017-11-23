import { QDatetime } from 'quasar-framework'
import { returnPlainObject } from '../../helpers'
import { returnProps } from '../../common'

/**
 * Render a input component
 * @param  {Function} h        createElement function
 * @param  {Object}   context
 * @param  {Object}   item     vue component
 * @param  {Array}    children
 * @return {Object}            vue component
 */
export default (h, context, children = []) => {
  const inputDefinitions = returnPlainObject(context.to.input)
  const props = returnProps(context, inputDefinitions)
  return h(QDatetime, props, children)
}
