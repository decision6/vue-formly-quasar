import { QBtn } from 'quasar-framework'
import { defaultsDeep } from 'lodash'

/**
 * Render a button component
 * @param  {Function} h     createElement function
 * @param  {Object} props
 * @param  {Function} handlerClick
 * @param  {Object} iconProps
 * @return {Object}                vue component
 */
export default (h, props, handlerClick, item = []) => {
  const btnProps = defaultsDeep({ }, props, {
    on: {
      click: handlerClick
    }
  })
  return h(QBtn, btnProps, [ ...item ])
}
