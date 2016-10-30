define(function(require) {
    // stammhirn laden
    var brain = require('./mainbrain');

    // inputs einbinden
    var angst = require('./input/quetschen');
    var uebelkeit = require('./input/schuetteln');

    // UI laden
    var ui = require('./ui');

    ui.animationLoop();
});
