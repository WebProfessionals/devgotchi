define(function (require) {


  var angst = {
    'trigger': function (state, input) {
      if (state.gotchi.fear < 1) {
        state.gotchi.fear += (input  * angst.aengstlichkeit);
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
    abbaurate: 0.04,
    aengstlichkeit: 0.5
  };

  return angst
});