/**
 * return props
 * @param  {Object} context
 * @param  {Object} option
 * @return {Object}
 */
export default (context, option) => {
  const props = Object.assign({
    value: context.model[context.field.key],
    error: context.hasError
  }, option)
  return {
    props,
    on: {
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
  }
}
