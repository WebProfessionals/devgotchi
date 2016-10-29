define(function (require) {


  var angst = {
    'trigger': function (state, input) {
      if (state.gotchi.fear < 1) {
        state.gotchi.fear += (input  * angst.aengstlichkeit);
        if (state.gotchi.fear > 1) {
          state.gotchi.fear = 1;
        }
      }
    },
    'zeitdelta': function (state) {
      if (state.gotchi.fear > 0) {
        state.gotchi.fear -= angst.abbaurate;
        if(state.gotchi.fear < 0){
          state.gotchi.fear = 0;
        }

      }
    },
    abbaurate: 0.03,
    aengstlichkeit: 0.3
  };

  return angst
});