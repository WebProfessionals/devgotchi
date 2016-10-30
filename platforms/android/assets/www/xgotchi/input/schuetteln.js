define(['pubsub'], function (pubsub) {


  window.addEventListener("devicemotion", function (data) {

    if( (data.acceleration.x > 9) || (data.acceleration.y > 9) ){
      document.getElementById('debug').innerHTML = data.acceleration.x;
      pubsub.publish('uebelkeit', 1);
      pubsub.publish('shake',1);
    }

  });


  return {};
});