define(function (require) {
  // Load any xgotchi-specific modules
  // with a relative require call,
  // like:
  require(['./messages']);
  var state = require('./state');

  state.registerCallback(function (e, d) {
    console.log(e, d);
  });


  var ui = require('./ui');
  ui.ready();

});