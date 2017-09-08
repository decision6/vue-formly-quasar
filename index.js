import fields from './src/fields'

/**
 * Install plugin for formly
 * @param  {Object} Vue vue instance
 */
export default (Vue) => {
  Object.keys(fields).forEach(field => {
    Vue.$formly.addType(`${field}`, fields[field])
  })
}
