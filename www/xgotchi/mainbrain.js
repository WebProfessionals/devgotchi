define(['pubsub', './state','./sensorik/angst'], function (pubsub, state, angstverarbeitung) {




  // Sensorik
  var sensorik = {'angst':angstverarbeitung};


  // Events
  var eventCode = function (event, data) {
    sensorik[event].trigger(state, data);
  };

  // Abbauen
  setInterval(function () {
    for(sensor in sensorik){
      sensorik[sensor].zeitdelta(state)
    }

    // mood berechnen
    var gotchiStates = ['dead', 'sad', 'neutral','happy', 'imortal'];

    state.gotchi.mood = gotchiStates[1];

  },650);


  var uiEvents = pubsub.subscribe('angst', eventCode);
  //pubsub.unsubscribe(uiEvents);


  var reset = function () {

  };
  return {reset: reset};
});