let edad = parseInt(prompt("Introduce tu edad:"));

if (edad < 0) {
  console.log("Edad no válida");
} else if (edad <= 12) {
  console.log("Niño");
} else if (edad <= 17) {
  console.log("Adolescente");
} else if (edad <= 59) {
  console.log("Adulto");
} else {
  console.log("Adulto mayor");
}