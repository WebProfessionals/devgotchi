define(function (require) {


  var uebelkeit = {
    'trigger': function (state, input) {
      navigator.vibrate(1000);
      if (state.gotchi.sickness < 1) {
        state.gotchi.sickness += (input  * uebelkeit.aengstlichkeit);
        if (state.gotchi.sickness > 1) {
          state.gotchi.sickness = 1;
        }
        if (state.gotchi.sickness > 0.02) {
          navigator.vibrate(1000);
        }
      }
    },
    'zeitdelta': function (state) {
      if (state.gotchi.sickness > 0) {
        state.gotchi.sickness -= uebelkeit.abbaurate;
        if(state.gotchi.sickness < 0){
          state.gotchi.sickness = 0;
        }
      }
      state.gotchi.health = state.gotchi.health - (state.gotchi.sickness * 0.005);
    },
    abbaurate: 0.01,
    empfindilichkeit: 0.2
  };

  return uebelkeit;
});