import { Field, basedMixin } from '../../common'
import OptionGroup from './option-group'

export default {
  name: 'q-formly-option-group',
  mixins: [ basedMixin ],
  render (h) {
    return Field(h, this, OptionGroup(h, this))
  }
}
