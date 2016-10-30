define(['pubsub'], function (pubsub) {


  window.addEventListener("devicemotion", function (data) {

    if(data.acceleration.x >1){
      pubsub.publish('uebelkeit', 1);
      pubsub.publish('shake',1);
    }

  });


  return {};
});