define(function (require) {



  // UI geladen
  var ui = require('./ui');

  ui.animationLoop();



  document.addEventListener('click', function () {
    console.log('click');
  });



});
