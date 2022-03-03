const is = require("@sindresorhus/is");

function isValidNumber(value) {
  return is.number(value) && !isNaN(value);
}

function isValidObject(value) {
  return is.object(value) && !is.null(value);
}

function plainObject(obj, response = {}) {
  for (let key in obj) {
    const value = obj[key];
    const type = typeof value;

    if (
      is.string(value) ||
      is.boolean(value) ||
      is.array(value) ||
      is.date(value) || //=> Object.prototype.toString.call(value) === '[object Date]'
      is.function(value) ||
      is.map(value) ||
      is.set(value) ||
      is.bigint(value) ||
      is.symbol(value) ||
      is.buffer(value) ||
      is.regExp(value) ||
      isValidNumber(value)
    ) {
      response[key] = value;
    } else if (isValidObject(value)) {
      plainObject(value, response);
    }
  }
  return response;
}

module.exports = plainObject;
