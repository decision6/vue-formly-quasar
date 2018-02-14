import { basedMixin } from '../../common'
import Radio from './radio'


export default {
  name: 'q-formly-radio',
  mixins: [ basedMixin ],
  render (h) {
    const option = this.to.radio
    return Radio(h, this, option)
  }
}
