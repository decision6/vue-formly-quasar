import { QInput } from 'quasar-framework'
import { returnPlainObject } from '../../helpers'
import { Button, Icon } from '../../common'
import { defaultsDeep } from 'lodash'

const returnPropsToArray = (context, option, index) => {
  const array = context.model[context.field.key]
  const props = defaultsDeep({}, {
    value: array[index],
    error: context.hasError,
    after: [
      {
        icon: 'delete',
        handler () {
          array.splice(index, 1)
        }
      }
    ]
  }, option)

  return {
    props,
    on: {
      input: value => {
        array[index] = value
      },
      blur: context.onBlur,
      focus: context.onFocus,
      change: context.onChange,
      keyDown: context.onKeydown,
      keyUp: context.onKeyup,
      click: context.onClick
    }
  }
}

const createInput = (h, props) => h(QInput, props)

/**
 * Render a input component
 * @param  {Function} h     createElement function
 * @param  {Object} context
 * @param  {Object} item    vue component
 * @return {Object}         vue component
 */
export default (h, context) => {
  const inputDefinitions = returnPlainObject(context.to.input)
  const values = context.model[context.field.key] || []
  const inputs = values.map((value, index) => createInput(h, returnPropsToArray(context, inputDefinitions, index)))
  const btnProps = {
    props: {
      small: true,
      color: 'negative'
    },
    style: {
      marginTop: '5px',
      display: 'block',
      marginLeft: 'auto'
    }
  }

  const icon = Icon(h, {
    name: 'add',
    color: 'white'
  })

  const handlerClick = event => {
    context.model[context.field.key].push('')
  }

  return h('div', [ ...inputs, Button(h, btnProps, handlerClick, [ icon ]) ])
}
