import { isFunction } from 'lodash'

export default {
  props: [
    'form',
    'field',
    'model',
    'to'
  ],
  created () {
    let state = {
      '$dirty': false,
      '$active': false,
      '$hasError': false
    }
    this.$set(this.form, this.field.key, state)
  },
  methods: {
    runFunction (action, e) {
      if (isFunction(this.to[action])) {
        this.to[action].call(this, e)
      }
    },
    onFocus (e) {
      this.$set(this.form[this.field.key], '$active', true)
      this.runFunction('onFocus', e)
    },
    onBlur (e) {
      this.$set(this.form[this.field.key], '$dirty', true)
      this.$set(this.form[this.field.key], '$active', false)
      this.runFunction('onBlur', e)
    },
    onClick (e) {
      this.runFunction('onClick', e)
    },
    onChange (e) {
      this.$set(this.form[this.field.key], '$dirty', true)
      this.runFunction('onChange', e)
    },
    onKeyup (e) {
      this.runFunction('onKeyup', e)
    },
    onKeydown (e) {
      this.runFunction('onKeydown', e)
    }
  },
  computed: {
    hasError () {
      if (this.form[ this.field.key ].$dirty === false || this.form[ this.field.key ].$active === true) {
        return false
      }
      let errors = this.form.$errors[ this.field.key ]
      let hasErrors = false
      Object.keys(errors).forEach(err => {
        if (errors[err] !== false) hasErrors = true
      })
      this.$set(this.form[ this.field.key ], '$hasError', hasErrors)
      return hasErrors
    }
  }
}
