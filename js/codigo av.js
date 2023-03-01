iniciar()
function iniciar(){
    let zonaDeAtaque = document.getElementById("seleciona-ataque")
    zonaDeAtaque.style.display = "none"
    let zonaDereiniciar = document.getElementById("reiniciar")
    zonaDereiniciar.style.display = "none"
}
//variables de botones
let botonMaestro = document.getElementById ('boton-maestro')
let botonAire = document.getElementById ("botonAire")
let botonAgua = document.getElementById ("botonAgua")
let botonFuego = document.getElementById ("botonFuego")
let botonTierra = document.getElementById ("botonTierra")
let botonReiniciar = document.getElementById ('reiniciar-boton')

// escuchador de los botones
botonMaestro.addEventListener('click', selecionarMaestro)
botonAire.addEventListener ('click', ataqueAire)
botonAgua.addEventListener ('click', ataqueAgua)
botonTierra.addEventListener ('click', ataqueTierra)
botonFuego.addEventListener ('click', ataquefuego,)
botonReiniciar.addEventListener ('click', restart)

//variables a utilizar
let ataqueJugador
let maestroEnemigo 
let ataqueEnemigoResultado
let vidasJugador = 3
let vidasEnemigo = 3
let inputKatara = document.getElementById("katara")
let inputAang = document.getElementById("aang")
let inputBumi = document.getElementById("bumi")
let inputZuko = document.getElementById("zuko")
let spanMaestroJugador = document.getElementById ("maestro-Jugador")
let spanMaestroEnemigo = document.getElementById ("maestro-Enemigo")

// seleccion enemiga
function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccionMaestroEnemigo(){
    let seleccionAleatoria = aleatorio (1,4)
    if (seleccionAleatoria == 1){
        spanMaestroEnemigo.innerHTML = "Katara"
       maestroEnemigo = "Katara"
    } else if (seleccionAleatoria == 2){
        spanMaestroEnemigo.innerHTML = "Aang"
        maestroEnemigo = " Aang"
    } else if (seleccionAleatoria == 3){
        spanMaestroEnemigo.innerHTML = "Bumi"
        maestroEnemigo= "Bumi"
    } else if (seleccionAleatoria == 4){
        spanMaestroEnemigo.innerHTML = "Zuko"
       maestroEnemigo = "Zuko"
    }
}
function ataqueEnemigo(){
    let ataque = aleatorio(1,4)
    if (ataque == 1){
        ataqueEnemigoResultado = "Aire"
    } else if ( ataque == 2){
        ataqueEnemigoResultado = "Agua"
    } else if ( ataque == 3){
        ataqueEnemigoResultado = "Tierra"
    } else if ( ataque == 4){
        ataqueEnemigoResultado = "Fuego"
    } combate()
}
// eleccion jugador
function selecionarMaestro(){
    alert("Selecionaste a tu maestro control: " + elecionDeMaestro())
    let zonaDeMaestros = document.getElementById ("seleccionDeMaestro")
    zonaDeMaestros.style.display = "none"
    let zonaDeAtaque = document.getElementById("seleciona-ataque")
    zonaDeAtaque.style.display = "flex"
} 
function elecionDeMaestro(){
    if ( inputKatara.checked){
        resultado = "Katara"
     spanMaestroJugador.innerHTML = "Katara"
    } else if (inputAang.checked){
        resultado ="Aang"
        spanMaestroJugador.innerHTML ="Aang"
    } else if (inputBumi.checked){
        resultado ="Bumi"
        spanMaestroJugador.innerHTML = "Bumi"
    } else if (inputZuko.checked){
        resultado ="Zuko"
        spanMaestroJugador.innerHTML ="Zuko"

    } else {
        resultado = "Escoge un Maestro"
        botonAire.disabled = true
        botonAgua.disabled = true
        botonTierra.disabled = true
        botonFuego.disabled = true
        let zonaDereiniciar = document.getElementById("reiniciar")
    zonaDereiniciar.style.display = "block"
        
    }  eleccionMaestroEnemigo()
    return resultado
} 
// funciones de ataque
function ataqueAire(){
    ataqueJugador = "Aire"
    ataqueEnemigo()
}
function ataqueAgua (){
    ataqueJugador = "Agua"
    ataqueEnemigo()
}
function ataqueTierra(){
    ataqueJugador = "Tierra"
    ataqueEnemigo()
}
function ataquefuego(){
    ataqueJugador = "Fuego"
    ataqueEnemigo()
}
//combate
function combate() {
    let sMaestroEnemigo = document.getElementById('vidasEnemigo')
    let sMaestroJugador = document.getElementById('vidasJugador')
 
    if (ataqueJugador == ataqueEnemigoResultado){
        mensajeCombate("Empate")
    } else if (ataqueJugador == "Agua" && ataqueEnemigoResultado == "Fuego" || (ataqueJugador == "Aire" && ataqueEnemigoResultado == "Tierra") || (ataqueJugador == "Tierra" && ataqueEnemigoResultado == "Agua") || (ataqueJugador == "Fuego" && ataqueEnemigoResultado == "Aire")){
       mensajeCombate("GANASTE")
       vidasEnemigo--
        sMaestroEnemigo.innerHTML = vidasEnemigo
    } else {
        mensajeCombate("PERDISTE")
        vidasJugador--
        sMaestroJugador.innerHTML = vidasJugador
    }
     vidasFinal()
}
// contador de vidas
function vidasFinal(){
    if (vidasJugador == 0){
        crearMensajeFinal("PERDISTE")
    }  else if (vidasEnemigo == 0){
        crearMensajeFinal("GANASTE")
    }
}

function restart(){
    location.reload()
}
function mensajeCombate (combateResultado){
    let mensaje = document.getElementById("resultado")
    let mensajeJugador = document.getElementById("ataque-jugador")
    let mensajeEnemigo = document.getElementById("ataque-enemigo")

    // let notifacion = document.createElement ('p')
    let eleccionJugador = document.createElement ('p')
    let eleccionEnemigo = document.createElement ('p')

    mensaje.innerHTML = combateResultado
    eleccionJugador.innerHTML = ataqueJugador
    eleccionEnemigo.innerHTML = ataqueEnemigoResultado

    // mensaje.appendChild (notifacion)
    mensajeJugador.appendChild (eleccionJugador)
    mensajeEnemigo.appendChild (eleccionEnemigo)
}
// resultado de combate
function crearMensajeFinal(resultadoFinal){
    let seccionMensaje = document.getElementById ('mensajes')
    let parrafo = document.createElement ('p')
    parrafo.innerHTML = resultadoFinal
    seccionMensaje.appendChild (parrafo)
    //reaparicon del boton de reiniciar
    let zonaDereiniciar = document.getElementById("reiniciar")
    zonaDereiniciar.style.display = "block"
    //desbilitando botones
    botonAire.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    botonFuego.disabled = true
}