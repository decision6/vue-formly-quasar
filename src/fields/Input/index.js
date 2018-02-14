import { Field, basedMixin } from '../../common'
import Input from './input'

export default {
  name: 'q-formly-input',
  mixins: [ basedMixin ],
  render (h) {
    return Field(h, this, Input(h, this))
  }
}
