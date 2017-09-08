import { basedMixin } from '../../common'
import Radio from './radio'

export default {
  name: 'radio',
  mixins: [ basedMixin ],
  render (h) {
    const option = this.to.radio.option
    return Radio(h, this, option)
  }
}
