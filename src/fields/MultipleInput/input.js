import { QInput } from 'quasar'
import { returnPlainObject } from '../../helpers'
import { Button, Icon } from '../../common'
import { defaultsDeep, isEmpty } from 'lodash'

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
    const array = context.model[context.field.key]
    const hasItemEmpty = array.some(item => isEmpty(item))
    if (!hasItemEmpty) {
      array.push('')
    }
  }

  return h('div', [ ...inputs, Button(h, btnProps, handlerClick, [ icon ]) ])
}
