// clase principal de Ninja
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
    this.vida += 10;
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
console.log("Este es el nombre del Ninja: " + dato0.nombre); //Este llama el Nombre
console.log( //este console arroja los datos de nombre, fuerza, velocidad y vida(valor inicial cero).
  "Nombre: " + dato0.nombre,
  ",Velocidad: " + dato1.velocidad,
  ",Fuerza: " + dato2.fuerza,
  ",Vidas: " + dato4.vida
);
console.log("Vidas: " + dato3.vida); // este arroja la suma de vidas.

//Acá empieza la extension de la clase ninja a Sensei
class Sensei extends Ninja { //extensión de la clase ninja para la nueva Sensei
  constructor(nombre) {
    super("Master Splinter");
    this.velocidad = 10;
    this.fuerza = 10;
    this.vida = 200;
  }
  knowledge() { //nuevo atributo, sabiduria
    this.sabiduria = 10; 
  }
  speakWisdom() { //mensaje del Sensei 
    this.speak =
      "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.";
  }
}
let dato5 = new Sensei(); // llamado al valor nuevo que corresponde a la sabiduría
dato5.knowledge(); //Este muestra el valor Sabiduria = 10;

const superSensei = new Sensei();
superSensei.speakWisdom();

console.log("Este es el nombre del nuevo Sensei: " + superSensei.nombre); //Este llama el Nombre del nuevo elemento
console.log(", Sabiduria: " + dato5.sabiduria, superSensei.speak); //valor de sabiduría y el sabio mensaje
console.log(
  "Nombre: " + superSensei.nombre, //siguiendo la estructura del ninja, se llaman los mismos valores ahora específicos del sensei
  ",Velocidad: " + superSensei.velocidad,
  ",Fuerza: " + superSensei.fuerza,
  ",Vidas: " + (superSensei.vida + dato3.vida) //este ultimo suma el valor de vida 0 y lo agrega al del sensei 200 mas la suma 10
);

