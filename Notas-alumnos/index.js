
//PUNTO A

document.querySelectorAll("button")[0].addEventListener("click", function (){

  var nota1 = prompt("Ingrese la primer nota: ");
  var nota2 = prompt("Ingrese la segunda nota: ");
  var nota3 = prompt("Ingrese la tercer nota: ");
  var nota4 = prompt("Ingrese la cuarta nota: ");
  var nota5 = prompt("Ingrese la quinta nota: ");

var promedio=(parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)+parseFloat(nota5))/5;

alert("El promedio de las notas es: "+promedio);

});

//Punto B

document.querySelectorAll("button")[1].addEventListener("click", function (){

var curso = ["f","m","f","m","f","m","f","m","f","f"];
var contF=0;
var contM=0;
var cantAlumnos=curso.length;

for (var i = 0; i < curso.length; i++) {
  if (curso[i]==="f") {
    contF++;
  }
  else {
    contM++;
  }

}
alert("Los porcentaje de hombres y mujeres son: "+"H: %"+(contM*100)/curso.length+"  M: %"+(contF*100)/curso.length);
alert("La cantidad total de alumnos inscriptos: "+curso.length);
  console.log("Los porcentaje de hombres y mujeres son: "+"H: %"+(contM*100)/curso.length+"  M: %"+(contF*100)/curso.length);
  console.log("La cantidad total de alumnos inscriptos: "+curso.length);

});
