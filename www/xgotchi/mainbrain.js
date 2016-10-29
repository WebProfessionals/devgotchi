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
  },650);


  var uiEvents = pubsub.subscribe('angst', eventCode);
  //pubsub.unsubscribe(uiEvents);


  var reset = function () {

  };
  return {reset: reset};
});