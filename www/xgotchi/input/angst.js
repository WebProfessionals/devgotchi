define(['pubsub'], function (pubsub) {


  document.addEventListener('click', function () {
    pubsub.publish('angst', 0.1);

  });



  var angst ={};

  return angst;
});