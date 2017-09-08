import fields from './fields'

/**
 * Install plugin for formly
 * @param  {Object} Vue vue instance
 */
const VueFormlyQuasar = Vue => {
  Object.keys(fields).forEach(field => {
    Vue.$formly.addType(`${field}`, fields[field])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFormlyQuasar)
}

export default VueFormlyQuasar
