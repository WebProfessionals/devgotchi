define(function(require) {

    // inputs einbinden
    var angst = require('./input/quetschen');
    var uebelkeit = require('./input/schuetteln');


    // stammhirn laden
    var brain = require('./mainbrain');

    // UI laden
    var ui = require('./ui');

    ui.animationLoop();
});
