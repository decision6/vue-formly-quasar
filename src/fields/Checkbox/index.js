import { basedMixin } from '../../common'
import Checkbox from './checkbox'

export default {
  name: 'checkbox',
  mixins: [ basedMixin ],
  render (h) {
    const option = this.to.checkbox.option
    return Checkbox(h, this, option)
  }
}
