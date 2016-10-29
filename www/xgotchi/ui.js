define(['./messages','./state'],function (message,state) {



  var element = document.getElementById('x');

  element.addEventListener('click', function () {
    console.dir(state.getSanity());
  });

  var ready = function () {
    console.dir(message.getHello());
  };
  return {ready: ready};
});