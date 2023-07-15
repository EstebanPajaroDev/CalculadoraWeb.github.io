const pantalla = document.getElementById('pantalla');

function escribirPantalla(num) {
    pantalla.innerHTML += num;
    
    operaciones();
}
function limpiarPantalla() {pantalla.innerHTML = "";}


function operaciones(oper) {
    
    if (oper == '+' || oper == '-' || oper == 'x' || oper == '/') {
        limpiarPantalla()
    } 
}

function resultado() {
    num2 = num.textContent;
    switch (operaciones(oper)) {
        case "+":
            resultado = (parseInt(num1) + parseInt(num2));
            break;
        case "-":
            resultado = (parseInt(num1) - parseInt(num2));
            break;
        case "x":
            resultado = (parseInt(num1) * parseInt(num2));
            break;
        case "/":
            resultado = (parseInt(num1) / parseInt(num2));
            break;
        }
        pantalla.innerHTML = resultado;
    }
