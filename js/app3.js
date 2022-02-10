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

// const titulo = document.createElement("h2");
// titulo.textContent = "Starcraft 2 Counter App";

// document.body.append(titulo);

const razas = ["terrans", "zergs", "protoss"];

for (let i = 0; i < razas.length; i++) {
  const box = document.createElement("div");
  box.textContent = razas[i];
  box.id = razas[i];
  box.classList = "raza";
  document.querySelector("#selector").append(box);
  document.querySelector(`#${razas[i]}`).addEventListener("click", function () {
    console.log(`escuchando dentro de ${razas[i]}`);

    if (razas[i] == "terrans") {
      for (let i = 0; i < terrans.length; i++) {
        const unidad = document.createElement("div");
        unidad.textContent = terrans[i].name;
        unidad.classList = "unidad";
        document.querySelector("#unidades").appendChild(unidad);
        unidad.addEventListener("click", function () {
          document.body.removeChild(document.querySelector("#counters"));
          const counters = document.createElement("div");
          counters.id = "counters";
          counters.classList = "counters";
          document.body.appendChild(counters);

          const counterlist = terrans[i].countersProtoss
            .concat(terrans[i].countersTerran)
            .concat(terrans[i].countersZerg);

          for (let i = 0; i < counterlist.length; i++) {
            const counter = document.createElement("div");
            counter.textContent = counterlist[i];
            counter.classList = "counter";

            document.querySelector("#counters").append(counter);
          }
          console.log(counterlist);

          console.log(`Counter Protoss ${terrans[i].countersProtoss}`);
          console.log(`Counter Zerg ${terrans[i].countersZerg}`);
          console.log(`Counter Terran ${terrans[i].countersTerran}`);
        });
      }
    }
  });

  box.addEventListener("click", mostrarUnidades);
}

function mostrarUnidades() {
  console.log();
}

// document.querySelector("#titulo").addEventListener("click", function () {
//   console.log("escucho el titulo");

//   document.body.removeChild(document.querySelector("#counters"));
//   const counters = document.createElement("div");
//   counters.id = "counters";
//   counters.classList = "counters";
//   document.body.appendChild(counters);
// });
// document.querySelector("#terrans").addEventListener("click", function () {
//   console.log("estoy escuchando dentro de terrans");
// });
