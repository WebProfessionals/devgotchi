define([
    'pubsub', './state', './animation'
], function(pubsub, state, animation) {
    var frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = 4,
        numberOfFrames = 2,
        currentState = 'neutral',
        currentEvent = 'idle';

    var animationLoop = function() {
        window.requestAnimationFrame(animationLoop);

        update();
        render();
    };

    var update = function() {
        tickCount += 1;

        if (tickCount > animation[currentState][currentEvent].speed) {
            tickCount = 0;

            if (frameIndex < animation[currentState][currentEvent].frames.length - 1) {
                frameIndex += 1;
            } else {
                frameIndex = 0;
            }
        }
    };

    var render = function(string) {
        var saveArray = animation[currentState][currentEvent].frames[frameIndex].split(','),
            pixels = document.querySelectorAll('.pixel');

        for (var i = 0, len = pixels.length; i < len; i++) {
            pixels[i].setAttribute('data-state', 0);
        }

        for(var i= 0, len = saveArray.length; i < len; i++) {
            var pixel = saveArray[i].split('|');
            document.querySelectorAll('[data-x="' + pixel[0] + '"][data-y="' + pixel[1] + '"]')[0].setAttribute('data-state', pixel[2]);
        }
    };

    //pubsub.unsubscribe(uiEvents);

    pubsub.subscribe('angst', function() {
        currentEvent = 'press';
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
