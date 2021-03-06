// reaktionen einhängen
define(['pubsub', './state', './reaktion/angst', './reaktion/uebelkeit'],
    function (pubsub, state, angstverarbeitung, uebelkeit) {


      // Sensorik registrieren
      var reaktion = {'angst': angstverarbeitung, 'uebelkeit': uebelkeit};


      // registrierte sensorik subscriben
      for(var emotion  in reaktion){
        pubsub.subscribe(emotion, function (event, intensitaet) {
          reaktion[event].trigger(state, intensitaet);
        });
      }



      var gameloop = function () {
        for (sensor in reaktion) {
          reaktion[sensor].zeitdelta(state)
        }

        // mood berechnen
        var gotchiStates = ['dead', 'sad', 'neutral', 'happy', 'immortal'];

        // state verbessern
        state.gotchi.health += 0.003;


        if (state.gotchi.health < 0) {
          state.gotchi.mood = gotchiStates[0];
          clearInterval(loop);
        }


        if (state.gotchi.health >= 0.05) {
          state.gotchi.mood = gotchiStates[1];

        }

        if (state.gotchi.health >= 0.35) {
          state.gotchi.mood = gotchiStates[2];

        }

        if (state.gotchi.health >= 0.55) {
          state.gotchi.mood = gotchiStates[3];

        }

        if (state.gotchi.health >= 0.99) {
          state.gotchi.mood = gotchiStates[4];
          clearInterval(loop);
        }

        localStorage.setItem('health', state.gotchi.health);
        console.log(state.gotchi.health)
      };


      // Starten
      var loop = setInterval(gameloop, 650);


      var reset = function () {

      };
      return {reset: reset};
    });