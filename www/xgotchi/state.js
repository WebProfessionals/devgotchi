define(function () {
  var _callback;
  var x = 1;

  var gotchi =  {
    sanity: 0.5,
    fear:0,
    love:0,
    food:0.5,
    horizont:0.5
  };

  setInterval(function () {
    _callback('gewechselt', gotchi);
    gotchi.sanity = (gotchi.sanity*1) + 0.001;
    localStorage.setItem('sanity', gotchi.sanity);
  }, 2000);


  var state = {
    /**
     *
     * @param callback
     */
    registerCallback: function registerCallback(callback) {
      _callback = callback;
    },
    getSanity: function () {
      return gotchi.sanity;
    }
  };

  return state;
});