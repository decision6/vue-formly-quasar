import Input from '../Input/input'
import QAutocomplete from './q-autocomplete'
import { returnPlainObject } from '../../helpers'
import { returnProps } from '../../common'

/**
 * Render a autocomplete component
 * @param  {Function} h     createElement function
 * @param  {Object} context
 * @param  {Object} item    vue component
 * @return {Object}         vue component
 */
export default (h, context) => {
  const inputDefinitions = returnPlainObject(context.to.autocomplete)
  const props = returnProps(context, inputDefinitions)
  const Autocomplete = h(QAutocomplete, props)
  return Input(h, context, [ Autocomplete ])
}
