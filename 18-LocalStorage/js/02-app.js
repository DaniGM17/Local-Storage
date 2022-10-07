const nombre =localStorage.getItem('nombre');
console.log(nombre);

//Obtener los valores
const libroJSON = localStorage.getItem('libro');
//De un String a Objeto/Array
console.log(JSON.parse(libroJSON));

const mesesJSON = localStorage.getItem('meses');
console.log(JSON.parse(mesesJSON));