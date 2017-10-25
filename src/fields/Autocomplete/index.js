import { Field, basedMixin } from '../../common'
import Autocomplete from './autocomplete'

export default {
  name: 'q-formly-input-autocomplete',
  mixins: [ basedMixin ],
  render (h) {
    return Field(h, this, Autocomplete(h, this))
  }
}
