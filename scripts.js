/*
Imaginense aca una funcion que valide ambos forms de manera independiente
*/

function totalCalc() {
    const valor = 200;
    const cantidad = document.getElementById("form_compra").elements.namedItem("cantidad").value;
    const discountChoice = document.getElementById("form_compra").elements.namedItem("categoria").value;
    let discount = 0;
    let total = 0;

    switch (discountChoice) {
        case "estudiante": discount = 0.80;
            break;
        case "trainee": discount = 0.50;
            break;
        case "junior": discount = 0.15;
            break;
        case "senior": discount = 0.25;
            break;
        default: discount = 0;
    }

    total = cantidad * (valor - (valor*discount));
    return total;
}

const espacioPrecio = document.getElementById('results'); // span con el valor
const cargarPrecio = (valor) => {
    espacioPrecio.textContent = valor; // cambiamos el valor
};

const resetearPrecio = document.getElementById('botonReset'); // boton de reseteo
if (resetearPrecio) {
    resetearPrecio.addEventListener('click', () => {
        cargarPrecio(0);  // volvemos el valor a 0
    })
}

const calcularPrecio = document.getElementById('botonCalcular'); // boton de calculo
if (calcularPrecio) {
    calcularPrecio.addEventListener('click', () => {
        cargarPrecio(totalCalc());  // activamos la funcion de cambio de valor
    })
}
