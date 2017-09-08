import { lensProp, omit, set } from 'ramda'

/**
 * set option.value to option.val
 * @param  {Object} option
 * @return {Object}
 */
const transform = option => {
  const valLens = lensProp('val')

  const optionWithVal = set(valLens, option.value, option)
  return omit(['value'], optionWithVal)
}

export default transform
