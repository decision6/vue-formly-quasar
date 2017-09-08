import { Field, basedMixin } from '../../common'
import Toggle from './toggle'

export default {
  name: 'toggle',
  mixins: [ basedMixin ],
  render (h) {
    return Field(h, this, Toggle(h, this))
  }
}
