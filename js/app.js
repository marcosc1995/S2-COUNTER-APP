// cuando el usuario hace click en la raza
// se debe desplegar todas las unidades de la misma

document.getElementById("terran").addEventListener("click", showUnits);

// const terrans = ["marine", "marauder", "tank", "widowmine"];
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
    name: "Siege Tank",
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
    countersZerg: ["Zergling","Roach(soft)","Hydralisk(Small numbers)","Baneling(cost efficiency)"],
    countersProtoss: ["Zealot", "Sentry", "Stalker(soft)", "Immortal(soft)"],
  },

  {
    name: "Widow Mine",
    countersTerran: ["Medivac", "Banshee"],
    countersZerg: ["Baneling","Mutalisk"],
    countersProtoss: ["Oracle", "Stalker*", "Immortal*"],
  },
];

const zergs = [
  {
    name: "Zergling",
    counters: ["Hellion", "Hellbat", "Planetary Fortress"],
  },
  {
    name: "Roach",
    counters: ["Seige Tank", "Marauder", "Thor(with +3 weapons)"],
  },
];
// funcion para mostrar todas las unidades

let unitsList = "";

function showUnits() {
  for (let i = 0; i < terrans.length; i++) {
    unitsList += "<div>" + terrans[i].name + "</div>";
  }
  document.getElementById("units").innerHTML = unitsList;
}
