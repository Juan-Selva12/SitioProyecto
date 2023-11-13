//Codigo msj bienvenida
document.addEventListener("DOMContentLoaded", function() {
    // Verifica si el mensaje ya se ha mostrado en la sesión actual
    var mensajeMostrado = sessionStorage.getItem('mensajeMostrado');

    // Si el mensaje no se ha mostrado, muestra el mensaje y almacena en sessionStorage
    if (!mensajeMostrado) {
        alert("¡Bienvenido a Plato Lleno!");
        sessionStorage.setItem('mensajeMostrado', 'true');
    }
});

// Espera a que el DOM se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    // Encuentra el botón por su ID
    var formularioButton = document.getElementById('formulario');

    // Agrega un evento de clic al botón
    formularioButton.addEventListener('click', function() {
        // Llama a la función Fmensaje al hacer clic en el botón
        Fmensaje();
    });
});

// Tu función Fmensaje
function Fmensaje() {
    let mensaje = "Gracias por tu ayuda! En breve te estaremos contactando";
    alert(mensaje);
}

//Codigo para agrandar el logo
function agrandarImg() {
    var imgLogo = document.getElementById('imgLogo');
    //carga el valor actual de la imagen
    var currentSize = imgLogo.getAttribute('data-size');

    // Verifica el tamaño actual y ajusta al tamaño deseado
    if (currentSize === 'small') {
        imgLogo.style.width = '40%';
        imgLogo.style.height = '40%';
        imgLogo.setAttribute('data-size', 'large');
    } else {
        imgLogo.style.width = '15%';
        imgLogo.style.height = '20%';
        imgLogo.setAttribute('data-size', 'small');
    }
}

//funcion para iniciar mapa
function iniciarMap(){
    //ubicacion carlos mujica
    var coord = {lat:-34.5790442 ,lng: -58.3856661};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    //ubicacion liniers solidario
    var coord1 = {lat:-34.6340483 ,lng: -58.5217647};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord1
    });
    //ubicacion nuevos horizontes
    var coord2 = {lat:-34.5845727 ,lng: -58.3769342};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord2
    });

    //marcador 
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
    //marcador 1
    var marker1 = new google.maps.Marker({
        position: coord1,
        map: map
    });
    //marcador 2
    var marker2 = new google.maps.Marker({
        position: coord2,
        map: map
    });
}