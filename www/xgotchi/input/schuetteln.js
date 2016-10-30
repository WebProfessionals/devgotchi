define(['pubsub'], function (pubsub) {


  window.addEventListener("devicemotion", function (data) {

    if( (data.acceleration.x > 9) || (data.acceleration.y > 9) ){
      pubsub.publish('uebelkeit', 1);
      pubsub.publish('shake',1);
    }

  });


  return {};
});