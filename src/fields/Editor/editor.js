import { QEditor } from 'quasar'
import { returnPlainObject } from '../../helpers'
import { returnProps } from '../../common'

/**
 * Render a editor component
 * @param  {Function} h        createElement function
 * @param  {Object}   context
 * @param  {Object}   item     vue component
 * @param  {Array}    children
 * @return {Object}            vue component
 */
export default (h, context, children = []) => {
  const inputDefinitions = returnPlainObject(context.to.editor)
  const props = returnProps(context, inputDefinitions)
  return h(QEditor, props, children)
}
