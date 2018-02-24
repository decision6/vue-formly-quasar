import { basedMixin } from '../../common'
import Checkbox from './checkbox'

export default {
  name: 'q-formly-checkbox',
  mixins: [ basedMixin ],
  render (h) {
    const option = this.to.checkbox
    return Checkbox(h, this, option)
  }
}
