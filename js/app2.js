// const counnterTerran = {
//     Marine: [Thor,Viking,Banshee],
//     Marauder:[Hellion, Reaper],    
// };

// const counterZerg = {
//     Marine: [Mutalisk,Corruptor,Zergling],
//     Marauder: [Roach, Ultralisk]

// };

console.log(prueba);

// cuando el usuario hace click en la raza
// se debe desplegar todas las unidades de la misma

document.querySelector("#terran").addEventListener("click", showUnits);

// funcion para mostrar todas las unidades

let unitsList = "";

function showUnits() {
  for (let i = 0; i < terrans.length; i++) {
    unitsList += "<div class='unit'>" + terrans[i].name + "</div>";
  }
  document.getElementById("units").innerHTML = unitsList;
  
  // let counterList = "";

  // for (let i = 0; i < terrans.length; i++) {

    
  //   counterList += "<div>"+ terrans[i].countersZerg +"</div>";      
  // }

  // document.querySelector(".unit").addEventListener("click", showCounters);


  // function showCounters() {
  //   document.querySelector(".counters").innerHTML= counterList;
  // }

}
let test = document.getElementById('units')

if (test.classList.contains('units')) {
  console.log("Prueba funciona")
  
}else{
  console.log("Prueba no funciona")
}

console.log("no se que mierda pasa")