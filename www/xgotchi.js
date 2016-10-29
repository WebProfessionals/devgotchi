// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'xgotchi' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        xgotchi: '../xgotchi'
    }
});

// Start loading the main xgotchi file. Put all of
// your application logic in there.
requirejs(['xgotchi/main']);
