import { QAutocomplete } from 'quasar-framework'

export default {
  name: 'QAutocomplete',
  extends: QAutocomplete,
  inject: {
    '__input': { default: null },
    '__inputParent': { default: null },
    '__inputDebounce': { default: null }
  }
}
