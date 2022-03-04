const is = require("@sindresorhus/is");

interface GenericObject {
  [key: string]: any;
}

function isValidNumber(value: GenericObject): boolean {
  return is.number(value) && !isNaN(+value);
}

function isValidObject(value: GenericObject): boolean {
  return is.object(value) && !is.null(value);
}

function plainObject(data: any, response: GenericObject = {}): GenericObject {
  for (let key in data) {
    const value = data[key];
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
      is.promise(value) ||
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
