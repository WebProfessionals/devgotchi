define(['pubsub'], function (pubsub) {


  window.addEventListener("devicemotion", function (data) {
    alert('shake');
    if(data.acceleration.x >1){
      pubsub.publish('uebelkeit', 1);
      alert('shake');
    }

  });


  return {};
});