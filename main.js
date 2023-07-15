const pantalla = document.querySelector('.pantalla');
let numero1, numero2, result, operador;

function limpiarPantalla() {pantalla.innerHTML = "";}

function escribirPantalla(numero) {  
    pantalla.innerHTML += numero;  
    numero = pantalla.textContent;
    
}

function operaciones(signo) {

    operador = signo;
    
    numero1 = parseInt(pantalla.textContent);
 
    limpiarPantalla();
}

function resultado() {

    if (operador == '+') {
        pantalla.innerHTML = (numero1 + numero2);
    } else if (operador == '-') {
        pantalla.innerHTML = (numero1 - numero2);
    } else if (operador == '*') {
        pantalla.innerHTML = (numero1 * numero2);
    } else if (operador == '/') {
        pantalla.innerHTML = (numero1 / numero2);
    } else if (operador == '%') {
        pantalla.innerHTML = (numero1 % numero2);
    } else if (operador == '✓') {
        pantalla.innerHTML = Math.sqrt(numero1);
    } else{
        console.log('Invalid');
    }
    
}

