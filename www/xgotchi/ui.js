define(['./messages','./state'],function (message,state) {



  var stateChangeHandle = state.registerStateChangeCallback(function (e, d) {
    console.log(e, d);
  });

  stateChangeHandle.unRegister();




  var element = document.getElementById('x');

  element.addEventListener('click', function () {
    console.dir(state.getSanity());
  });

  var ready = function () {
    console.dir(message.getHello());
  };
  return {ready: ready};
});