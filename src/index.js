const { getOptions } = require('loader-utils');

module.exports = async function loader(source) {
  const options = getOptions(this) || {};
  const { placeholder = ':null-selctor' } = options;
  const regex = new RegExp(`[^\\s]*${placeholder}`, 'g');

  return source.replace(regex, '');
};
