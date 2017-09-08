/**
 * return props
 * @param  {Object} context
 * @param  {Object} option
 * @return {Object}
 */
export default (context, option) => {
  return {
    props: {
      value: context.model[context.field.key],
      ...option,
      error: context.hasError
    },
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
