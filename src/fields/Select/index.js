import { Field, basedMixin } from '../../common'
import Select from './select'

export default {
  name: 'select',
  mixins: [ basedMixin ],
  render (h) {
    return Field(h, this, Select(h, this))
  }
}
