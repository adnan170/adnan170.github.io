var _ = require('lodash');
var errorHandler = require('./error-handler');

/**
 * @param {jQuery} $element
 * @param {Array} requiredParams
 * @param {Array} optionalParams
 * @param {Object} optionalParamsWithDefaults
 * @return {Object}
 */
exports.getOptions = function ($element, requiredParams, optionalParams, optionalParamsWithDefaults) {
  requiredParams = requiredParams || [];
  optionalParams = optionalParams || [];
  optionalParamsWithDefaults = optionalParamsWithDefaults || {};

  var dataValues = $element.data();

  var optionWhitelist = _.union(
    requiredParams,
    optionalParams,
    _.keys(optionalParamsWithDefaults)
  );

  dataValues = _.pick(dataValues, optionWhitelist);
  dataValues = _.omit(dataValues, function (value) {
    return value === "";
  });

  _.each(requiredParams, function (value) {
    if (!dataValues.hasOwnProperty(value)) {
      errorHandler.log('The object does not have the required "' + value + '" value');
    }
  });

  return _.defaultsDeep(dataValues, optionalParamsWithDefaults);
};