import { toPlainObject, isEmpty } from 'lodash'

/**
 * always return a plain object
 * @param  {Object} obj
 * @return {Object}
 */
export default (obj) => isEmpty(obj) ? toPlainObject({}) : toPlainObject(obj)
