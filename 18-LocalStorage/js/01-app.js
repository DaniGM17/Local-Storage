localStorage.setItem('nombre', 'Dania');

const libro = {
    titulo: "Tardes de Otoño",
    precio: 500
}

const productoString = JSON.stringify(libro);
console.log(productoString);
console.log(typeof productoString);

localStorage.setItem('libro', productoString);

const meses = ['Enero','Febrero','Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);