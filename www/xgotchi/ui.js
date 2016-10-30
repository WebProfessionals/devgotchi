define([
    'pubsub', './state', './animation'
], function(pubsub, state, animation) {
    var frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = 4,
        numberOfFrames = 2,
        currentEvent = 'idle';

    var animationLoop = function() {
        window.requestAnimationFrame(animationLoop);

        update();
        render();
    };

    var update = function() {
        tickCount += 1;

        if (tickCount > animation[state.gotchi.mood][currentEvent].speed) {
            tickCount = 0;

            if (frameIndex < animation[state.gotchi.mood][currentEvent].frames.length - 1) {
                frameIndex += 1;
            } else {
                frameIndex = 0;
            }
        }
    };

    var render = function(string) {
        var saveArray = animation[state.gotchi.mood][currentEvent].frames[frameIndex].split(','),
            pixels = document.querySelectorAll('.pixel'),
            progressBar = document.querySelectorAll('[data-y="15"]');

        // reset screen
        for (var i = 0, len = pixels.length; i < len; i++) {
            pixels[i].setAttribute('data-state', 0);
        }

        // draw pixels
        for(var i= 0, len = saveArray.length; i < len; i++) {
            var pixel = saveArray[i].split('|');
            document.querySelectorAll('[data-x="' + pixel[0] + '"][data-y="' + pixel[1] + '"]')[0].setAttribute('data-state', pixel[2]);
        }

        // draw progress bar
        for(var i= 0, len = progressBar.length; i < len; i++) {
            progressBar[i].setAttribute('data-state', 3);
        }

        for(var i= 0, len = progressBar.length; i < Math.ceil(state.gotchi.health * 16); i++) {
            progressBar[i].setAttribute('data-state', 1);
        }
    };

    //pubsub.unsubscribe(uiEvents);

    pubsub.subscribe('angst', function() {
        currentEvent = 'press';
    });

    pubsub.subscribe('shake', function() {
        currentEvent = 'shake';
        setTimeout(function () {
            currentEvent = 'idle';
        },250);
    });

    pubsub.subscribe('idle', function() {
        currentEvent = 'idle';
    });

    // Stateveränderung
    var stateChangeHandle = state.registerStateChangeCallback(function(e, d) {
        console.log(d);
    });
    // stateChangeHandle.unRegister();

    var reset = function() {};

    return {
        reset: reset,
        animationLoop: animationLoop
    };
});
