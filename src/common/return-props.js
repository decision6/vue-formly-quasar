import { omit, get, defaultsDeep } from 'lodash'

const factoryEvent = (options, context) => {
  const onProps = get(options, 'on', { })
  const defaultEvents = {
    input: value => {
      context.model[context.field.key] = value
    },
    blur: context.onBlur,
    focus: context.onFocus,
    change: context.onChange,
    keyDown: context.onKeydown,
    keyUp: context.onKeyup,
    click: context.onClick
  }

  return defaultsDeep({ }, onProps, defaultEvents)
}

const factoryProp = (options, context) => {
  const optionsProp = omit(options, 'on')
  const defaultProp = {
    value: context.model[context.field.key],
    error: context.hasError
  }

  return defaultsDeep({}, defaultProp, optionsProp)
}

/**
 * return props
 * @param  {Object} context
 * @param  {Object} option
 * @return {Object}
 */
export default (context, option) => {
  const props = factoryProp(option, context)
  const on = factoryEvent(option, context)

  return { props, on }
}
