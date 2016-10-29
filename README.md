# devgotchi

To start the "server" in dev mode run
 
    superstatic www


To optimize, run:

    node tools/r.js -o tools/build.js
    
To run optimized variant
    
    superstatic build
    
@rolf, Do not forgett to install superstatic
    
    npm install -g superstatic

This web project has the following setup:

* www/ - the web assets for the project
    * index.html - the entry point into the app.
    * xgotchi.js - the top-level config script used by index.html
    * xgotchi/ - the directory to store project-specific scripts.
    * lib/ - the directory to hold third party scripts.
* tools/ - the build tools to optimize the project.


That build command creates an optimized version of the project in a
**build** directory. The xgotchi.js file will be optimized to include
all of its dependencies.

For more information on the optimizer:
http://requirejs.org/docs/optimization.html

For more information on using requirejs:
http://requirejs.org/docs/api.html
