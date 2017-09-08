import { Field, basedMixin } from '../../common'
import Range from './range'

export default {
  name: 'range',
  mixins: [ basedMixin ],
  render (h) {
    return Field(h, this, Range(h, this))
  }
}
