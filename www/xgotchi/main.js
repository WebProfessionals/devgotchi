define(function(require) {
    var brain = require('./mainbrain');
    var angst = require('./input/quetschen');
    var uebelkeit = require('./input/schuetteln');

    // UI geladen
    var ui = require('./ui');

    ui.animationLoop();
});
