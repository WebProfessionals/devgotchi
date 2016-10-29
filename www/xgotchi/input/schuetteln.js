define(['pubsub'], function (pubsub) {


  document.addEventListener("devicemotion", function (data) {

    if(data.acceleration.x >1){
      pubsub.publish('uebelkeit', 1);
    }



  });


  return {};
});