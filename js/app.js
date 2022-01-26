/*
Cuando el usuario hace click en el cuadro de la raza se debe desplegar 
la lista de unidades de la misma 
*/

const terrans = [
  {
    name: "Marine",
    countersTerran: ["Thor", "Viking"],
    countersZerg: [
      "Mutalisk",
      "Corruptor",
      "Zergling(with upgrades and Medivacs only)",
    ],
    countersProtoss: ["Void Ray"],
  },
  {
    name: "Marauder",
    countersTerran: ["Hellion", "Reaper"],
    countersZerg: ["Roach", "Ultralisk(soft)"],
    countersProtoss: ["Stalker"],
  },
  {
    name: "Reaper",
    countersTerran: ["Marine", "SVC"],
    countersZerg: ["Zergling(early)", "Drone"],
    countersProtoss: ["Zealot", "Probe"],
  },
  {
    name: "Ghost",
    countersTerran: ["Medivac", "Raven", "Marine"],
    countersZerg: ["Infestor", "Viper", "Zergling"],
    countersProtoss: ["High Templar", "Archon", "Immortal", "All Units(EMP)!"],
  },
  {
    name: "Hellion",
    countersTerran: ["Marine"],
    countersZerg: ["Zergling", "Hydralisk"],
    countersProtoss: ["Zealot", "Sentry"],
  },
  {
    name: "SiegeTank",
    countersTerran: ["Marine", "Hellion", "Thor"],
    countersZerg: ["Hydralisk", "Roach", "Baneling"],
    countersProtoss: ["Stalker", "Sentry", "Colossus"],
  },
  {
    name: "Thor",
    countersTerran: ["Viking", "Bunshee"],
    countersZerg: ["Mutalisk", "Corruptor", "Roach(requires 3/3 upgrades)"],
    countersProtoss: ["Phoenix", "Sentry", "Zealot", "Stalker", "Archon"],
  },
  {
    name: "Banshee",
    countersTerran: ["Siege Tank", "Marauder"],
    countersZerg: ["Roach", "Zergling", "Swarm Host"],
    countersProtoss: ["Immortal", "Colossus", "Zealot"],
  },
  {
    name: "Viking",
    countersTerran: ["Banshee", "Raven", "Battlecruiser"],
    countersZerg: ["Brood Lord", "Corruptor"],
    countersProtoss: [
      "Colossus",
      "Void Ray(with micro)",
      "Carrier",
      "Tempest(in large number)",
    ],
  },
  {
    name: "Raven",
    countersTerran: ["Viking(PDD)", "Siege Tank(Turret)"],
    countersZerg: ["Corruptor(PDD)", "Massed Units"],
    countersProtoss: ["Tempest(PDD)", "Stalker(PDD)", "Massed Units"],
  },
  {
    name: "Medivac",
    countersTerran: ["n/a"],
    countersZerg: ["n/a"],
    countersProtoss: ["n/a"],
  },
  {
    name: "Battlecruiser",
    countersTerran: [
      "Marine",
      "Marauder",
      "Ghost",
      "Siege Tank",
      "Hellbat",
      "Thor",
      "Hellion",
    ],
    countersZerg: ["Zergling", "Roach", "Mutalisk", "Brood Lord", "Swarm Host"],
    countersProtoss: [
      "Zealot",
      "Immortal",
      "Colossus",
      "Stalker(soft)",
      "Void Ray(soft)",
      "Phoenix",
      "Archon",
    ],
  },
  {
    name: "Hellbat",
    countersTerran: ["Marine", "Marauder(soft)", "Hellbats"],
    countersZerg: [
      "Zergling",
      "Roach(soft)",
      "Hydralisk(Small numbers)",
      "Baneling(cost efficiency)",
    ],
    countersProtoss: ["Zealot", "Sentry", "Stalker(soft)", "Immortal(soft)"],
  },

  {
    name: "Widow Mine",
    countersTerran: ["Medivac", "Banshee"],
    countersZerg: ["Baneling", "Mutalisk"],
    countersProtoss: ["Oracle", "Stalker*", "Immortal*"],
  },
];

const counterTerran = {
  Marine: ["Thor", "Viking", "Banshee"],
  Marauder: ["Hellion", "Reaper"],
};

const counterZerg = {
  Marine: ["Mutalisk", "Corruptor", "Zergling"],
  Marauder: ["Roach", "Ultralisk (soft)"],
};

const counterProtoss = {
  Marine: ["Void Ray Immortal"],
  Marauder: ["Stalker"],
};

// SELECCIONA EL ELEMMENTO CON LA ID terran
// AGREGA UNA FUNCION DE ESCUCHA PARA EL CLICK
// EJECUTA LA FUNCION showUnits
// FUNCION showRaceUnits  DEBE IMPRIMIR EN
// PANTALLA LAS UNIDADES DE LA RAZA ELEGIDA

document.querySelector("#terran").addEventListener("click", showRaceUnits);

const terranUnits = [];

for (let i = 0; i < 10; i++) {
  terranUnits.push(terrans[i].name);
}

function showRaceUnits() {
  for (let i = 0; i < terranUnits.length; i++) {
    const units = document.createElement("div");
    units.classList = "unit";
    units.id = terranUnits[i].toLowerCase();
    units.textContent = terranUnits[i];

    document.querySelector("#units").appendChild(units);
  }
}

// AGREGAR UNA FUNCION DE ESCUCHA PARA CADA UNIDAD MOSTRADA
// MOSTRAR LOS COUNTERS DE LA UNIDAD SELECCIONADA

const countersMarine = [];
const countersMarauder = [];

for (let i = 0; i < 3; i++) {
  countersMarine.push(counterTerran.Marine[i]);
  countersMarine.push(counterZerg.Marine[i]);
  countersMarine.push(counterProtoss.Marine[i]);
}
for (let i = 0; i < 3; i++) {
  countersMarauder.push(counterTerran.Marauder[i]);
  countersMarauder.push(counterZerg.Marauder[i]);
  countersMarauder.push(counterProtoss.Marauder[i]);
}

// for (let i = 0; i < 5; i++) {
//   document.querySelector("#units").addEventListener('click',function (e) {
//     if (e.target && e.target.matches()) {

//     }

//   })

// }

const marineTest = terranUnits[0];
// var element = document.getElementsByTagName("p")[0];
// var id = element.id;

for (let i = 0; i < terranUnits.length; i++) {
  document.querySelector("#units").addEventListener("click", function (e) {
    if (e.target && e.target.matches("div#" + terranUnits[i].toLowerCase())) {
      console.log("otra prueba exitosa");
      for (let i = 0; i < 10; i++) {
        document.querySelector("#" + terranUnits[i].toLowerCase()),
          addEventListener("click", function (e) {
            if (e.target && e.target.matches("div#"+ terranUnits[i].toLowerCase())) {
              console.log("prueba exitosa en el segundo nivel")
              for (let i = 0; i < 5 ; i++) {
                const counterList = [];
                counterList.push(terrans[i].countersZerg)
                counterList.push(terrans[i].countersTerran)
                const counter = document.createElement('div')
                counter.textContent = counterList

                document.querySelector('#counters').appendChild(counter)
                
                
              }
              
            }
          });
      }
    }
  });
}

//-------------------------------------------------------------------------------------------------

// FALTA CONSEGUIR QUE ME IMPRIMA LOS COUNTERS SOLO DE LA UNIDAD SELECCIONADA
// LO SIGUIENTE ES HACER UNA FUNCION QUE PERMITA ESCUCHAR CADA UNO DE LOS DIV DE UNIDADES
// Y CREE UN ARRAY CON LOS RESPECTIVOS COUNTERS DE LAS 3 RAZAS 

//--------------------------------------------------------------------------------------------------

// POSIBLES SOLUCIONES 
// guardar en una variable la seleccion hecha por el click
// crear un array vacio y llenarlo con un ciclo for que 
// recorra los tres array de counters deferentes  
// puedo usar botones para que de esta manera cuando le doy al boton terran solo 
// se muestren los counters de esa raza 





// document.querySelector("#units").addEventListener("click", function (e) {
//   if (e.target && e.target.matches("div#marine")) {
//     console.log("prueba exitosa");
//     for (let i = 0; i < countersMarine.length; i++) {
//       const counters = document.createElement("div");
//       counters.textContent = countersMarine[i];
//       counters.id = countersMarine[i];

//       // Esto lo agrega al documento

//       document.querySelector("#counters").appendChild(counters);
//     }
//   }
// });
