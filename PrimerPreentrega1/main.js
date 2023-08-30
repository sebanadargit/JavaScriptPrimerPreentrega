
let nombre = "";

function inicio(validar) {
  nombre = prompt(
    "Bienvenido antes de comenzar a elegir, necesito que me indiques tu nombre."
  );

  validar = alert("Tu nombre es  " + nombre);
}

function encuesta(){
  alert("Te hare una breve encuesta, solo necesito eligas alguna de las siguientes opciones");
  let marcas = Number(prompt("Elige alguna de las 4 marcas: \n 1 McDonalds \n 2 Mostaza \n 3 BurguerKing \n 4  Wendys")
  )
  switch (marcas){
    case 1:
      alert(
        "Genial elegiste McDonalds! buena eleccion."
        );    
      break;
    case 2:
      alert(
        "Genial elegiste Mostaza! que buena eleccion."
        );
      break;
    case 3:
      alert(
        "Excelente elegiste BurguerKing! eres muy bueno eligiendo."
        );
      break;
    case 4:
      alert(
        "Buena eleccion, has elegido Wendys."
        );
    break;
  }
}
function elegir(){
  alert("Ahora que ya sabes la marca de tu restaurate favorito necesitas saber que combo elegir.")
  // let destino = 0
  // while(destino == 0){
  //   destino = Number(alert("No te olvides de elegir que combo quieres comer."))
  // }
  let combo = Number(prompt("Elige una de las 3 opciones para comer. \n 1 Combo Chico \n 2 Combo Mediano \n 3 Combo Grande."))
  switch (combo){
    case 1:
        alert("Elegiste Combo Chico! Excelente eleccion para disfrutar")
        break;
    case 2:
        alert("Elegiste Combo Mediano! Excelente eleccion para disfrutar")
        break;
    case 3:
        alert("Elegiste Combo Grande! Excelente eleccion para disfrutar")
        break;
    default:
          alert('No has seleccionado ninguna ruta asi que ahora no vamos a ir a ningun lado.')
          break;
  }
}


function final (){
  alert("Ya seleccionaste tu combo ideal, que lo disfrutes.")
}



inicio();
encuesta();
elegir();
final();