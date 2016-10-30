define(function (require) {


  var uebelkeit = {
    'trigger': function (state, input) {
      if (state.gotchi.sickness < 1) {
        state.gotchi.sickness += (input  * uebelkeit.empfindilichkeit);
        if (state.gotchi.sickness > 1) {
          state.gotchi.sickness = 1;
        }
        if (state.gotchi.sickness > 0.02) {
          navigator.vibrate(200);
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