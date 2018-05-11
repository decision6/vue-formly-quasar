import { Field, basedMixin } from '../../common'
import Editor from './editor'

export default {
  name: 'q-formly-editor',
  mixins: [ basedMixin ],
  render (h) {
    return Field(h, this, Editor(h, this))
  }
}
