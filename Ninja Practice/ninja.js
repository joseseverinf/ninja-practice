// clase principal de Vehicle
class Ninja {
  constructor(nombre) {
    this.nombre = nombre;
    this.velocidad = 0;
    this.fuerza = 0;
    this.vida = 0;
  }
  speed() {
    //Atributo de velocidad, valor inicial es 0 y luego acá le sumo 3
    this.velocidad += 3;
  }
  strong() {
    //Atributo de fuerza, valor inicial es 0 y luego acá le sumo 3
    this.fuerza += 3;
  }
  vidas() {
    this.vida = 0;
  }
  drinkSake() {
    //Atributo de Salud, valor inicial es 0 y luego acá le sumo 3
    this.vida += 3;
  }
}
//MÉTODO PARA AGREGAR EL NOMBRE Y MOSTRARLO POR CONSOLA
//variables para cada método
let dato0 = new Ninja("Hanamichi");
let dato1 = new Ninja();
let dato2 = new Ninja();
let dato3 = new Ninja();
let dato4 = new Ninja();

//Datos Invocados de la clase, atributos y sus métodos
dato1.speed(); //Este llama al valor velocidad y le suma 3
dato2.strong(); //Este llama al valor fuerza y le suma 3
dato3.drinkSake(); //Este llama al valor salud y le suma 10
dato4.vidas(); //Este muestra el valor Salud = 0;

//Resultados por Output:
console.log("Este es el nombre del Ninja:" + dato0.nombre); //Este llama el Nombre
console.log(
  "Nombre: " + dato0.nombre,
  ",Velocidad: " + dato1.velocidad,
  ",Fuerza: " + dato2.fuerza,
  ",Vidas: " + dato4.vida
);
console.log("Vidas: " + dato3.vida);
