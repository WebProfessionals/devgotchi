define(function (require) {
  // Load any xgotchi-specific modules
  // with a relative require call,
  // like:
  var messages = require('./messages');

  // Load library/vendor modules using
  // full IDs, like:
  var test = require('test');

  test.print(messages.getHello());
});
