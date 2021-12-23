//variables de los objetos
let tituloNota;
let textoNota;
let temaNota;
let agregarNota;
let notas = [];
let contenedor;

window.addEventListener('load', inicializar, true);

function inicializar() {
    tituloNota = document.getElementById('titulo-nota');
    textoNota = document.getElementById('texto-nota');
    temaNota = document.getElementById('tema-nota');
    agregarNota = document.getElementById('agregar-nota');
    contenedor = document.querySelector('.contenedor-notas');
    msj = document.querySelector('.msj');
    agregarNota.addEventListener('click', addNota, true);
}

function addNota() {
    if (tituloNota.value != "" && textoNota.value != "") {
        nuevaNota = {
            titulo: tituloNota.value,
            texto: textoNota.value,
            tema: temaNota.value,
        };
        notas.push(nuevaNota);
        contenedor.innerHTML += "<div class='nota " + nuevaNota.tema + "'>" +
            "<div class = 'eliminar' id = " + (notas.length - 1) + ">x</div>" +
            "<h2>" + nuevaNota.titulo + "</h2>" +
            "<p>" + nuevaNota.texto + "</p>" +
            "</div>"
    } else {
        msj.classList.add('mostrar');
        setTimeout(function() {
            msj.classList.remove('mostrar');
        }, 3000)
    }


    eliminar = document.querySelectorAll('.eliminar');
    for (let i = 0; i < notas.length; i++) {
        eliminar[i].addEventListener('click', eliminarNota, true);
    }
}

function eliminarNota() {
    console.log("CLICK", event.target.id)
    notas.splice(event.target.id, 1)
    document.getElementById(event.target.id).parentElement.remove();
}