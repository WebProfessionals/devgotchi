define(function (require) {


  var uebelkeit = {
    'trigger': function (state, input) {
      if (state.gotchi.fear < 1) {
        state.gotchi.fear += (input  * uebelkeit.aengstlichkeit);
        if (state.gotchi.fear > 1) {
          state.gotchi.fear = 1;
        }
      }
    },
    'zeitdelta': function (state) {
      if (state.gotchi.fear > 0) {
        state.gotchi.fear -= uebelkeit.abbaurate;
        if(state.gotchi.fear < 0){
          state.gotchi.fear = 0;
        }
      }
      state.gotchi.health = state.gotchi.health - (state.gotchi.fear * 0.005);
    },
    abbaurate: 0.03,
    aengstlichkeit: 0.3
  };

  return uebelkeit;
});