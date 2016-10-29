define(['pubsub', './state'], function (pubsub, state) {

  // Events
  var eventCode = function (event, data) {
    console.log(event);
  };

  var uiEvents = pubsub.subscribe('ui', eventCode);
  //pubsub.unsubscribe(uiEvents);


  // Stateveränderung
  var stateChangeHandle = state.registerStateChangeCallback(function (e, d) {
    console.log(e, d);
  });
  // stateChangeHandle.unRegister();


  var reset = function () {

  };
  return {reset: reset};
});