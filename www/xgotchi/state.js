define(function () {
  var _callback = [];
  var x = 1;

  var gotchi = {
    health: 0.1,
    fear: 0,
    sickness:0,
    love: 0,
    food: 0.5,
    horizont: 0.5,
    mood:'neutral'
  };


  var state = {
    /**
     *
     * @param callback
     */
    registerStateChangeCallback: function registerStateChangeCallback(callback) {
      var index = _callback.push(callback) - 1;

      return {
        unRegister: function () {
          console.dir(index);
          _callback[index] = function () {
            return;
          }
        }

      }
    },
    gethealth: function () {
      return gotchi.health;
    }
    , gotchi: gotchi
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