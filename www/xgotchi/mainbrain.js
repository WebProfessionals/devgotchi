define(['pubsub', './state'], function (pubsub, state) {


  // Events
  var eventCode = function (event, data) {
    console.log(event, data);

  };

  var uiEvents = pubsub.subscribe('angst', eventCode);
  //pubsub.unsubscribe(uiEvents);


  var reset = function () {

  };
  return {reset: reset};
});