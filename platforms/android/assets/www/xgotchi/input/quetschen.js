define(['pubsub'], function (pubsub) {


  document.addEventListener("touchstart", function () {
    pubsub.publish('angst', 1);
  });

  document.addEventListener("touchend", function() {
      pubsub.publish('idle');
  });

  var angst ={};
  return angst;
});