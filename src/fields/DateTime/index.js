import { Field, basedMixin } from '../../common'
import DateTime from './datetime'

export default {
  name: 'q-formly-datetime',
  mixins: [ basedMixin ],
  render (h) {
    return Field(h, this, DateTime(h, this))
  }
}
