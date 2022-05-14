//Traigo los datos de HTML y los guardo en variables
let altura = document.getElementById("datoAltura");
let button = document.getElementById("button");
//Cuando el usuario le de click al boton va a realizar las siguientes acciones
button.addEventListener("click", () => {
  //guardo el valor permitido y obtengo el valor guardado en la variable que ingreso el usuario
  let alturaPermitida: number = 1.5;
  let alturaIngresada: number = Number(altura.value);
  //realizo una comparacion logica
  if (alturaIngresada <= alturaPermitida) {
    console.log(
      "No puede subir al juego, ya que la altura es menor a lo permitido; altura ingresada:" +
        alturaIngresada
    );
  } else {
    console.log("Cumple con la altura permitida, puede subir al juego");
  }
});
