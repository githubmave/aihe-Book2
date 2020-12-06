const _ = require('lodash')

function convertKeysSnakeCaseToCamelCase(obj) {
  return _.mapKeys(obj, (value, key) => {
    return _.camelCase(key)
  })
}

function convertKeysCamelCaseToSnakeCase(obj) {
  return _.mapKeys(obj, (value, key) => {
    return _.snakeCase(key)
  })
}

module.exports = {
  convertKeysSnakeCaseToCamelCase,
  convertKeysCamelCaseToSnakeCase,
}
