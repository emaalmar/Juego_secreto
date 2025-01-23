let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    // console.log(typeof(numeroDeUsuario));
    // console.log(typeof(numeroSecreto));
    // console.log(numeroDeUsuario);
    // console.log(numeroDeUsuario === numeroSecreto );
    // console.log(intentos);

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "intento":"intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero es menor");
        } else {
            asignarTextoElemento("p","El numero es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    // let valorCaja = document.querySelector('#valorUsuario')
    // valorCaja.value = " ";
    document.querySelector('#valorUsuario').value = "";
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos toods los numeros
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon toods los numeros posilbes");
    }else{
        // SI el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales () {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1

}
function reiniciarJuego(){
    //limpiar Caja
    limpiarCaja();
    // //Indicar mensaje de intervalos
    // mensajesIniciales();
    // //generar el numero secreto
    // numeroSecreto = generarNumeroSecreto();
    // //Inicializar el numero de intentos
    // intentos = 1
    //Indicar mensaje de intervalos
    //generar el numero secreto
    //Inicializar el numero de intentos
    condicionesIniciales ();
    //Deshabilitat el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled", "true");

}


condicionesIniciales ();