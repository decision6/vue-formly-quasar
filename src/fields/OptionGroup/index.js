import { Field, basedMixin } from '../../common'
import OptionGroup from './option-group'

export default {
  name: 'option-group',
  mixins: [ basedMixin ],
  render (h) {
    const options = this.to
    return Field(h, this, OptionGroup(h, this, options))
  }
}
