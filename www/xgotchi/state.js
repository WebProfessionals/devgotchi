define(function () {
  var _callback = [];
  var x = 1;

  var gotchi = {
    sanity: 0.5,
    fear: 0,
    love: 0,
    food: 0.5,
    horizont: 0.5
  };

  setInterval(function () {
    var event = 'gewechselt';
    _callback.forEach(function (cb) {
      cb(event, gotchi);
    });

    gotchi.sanity = (gotchi.sanity * 1) + 0.001;
    localStorage.setItem('sanity', gotchi.sanity);
  }, 2000);


  var state = {
    /**
     *
     * @param callback
     */
    registerStateChangeCallback: function registerStateChangeCallback(callback) {
      var index = _callback.push(callback) -1;

      return {
        unRegister: function () {
          console.dir(index);
          _callback[index] = function () {
            return;
          }
        }

      }
    },
    getSanity: function () {
      return gotchi.sanity;
    }
  };


  /**
   * vom stateChange abmelden
   *
   * @param handle
   */
  var unRegisterStateChangeCallback = function (handle) {

  };

  return state;
});