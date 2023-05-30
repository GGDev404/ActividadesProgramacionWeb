mapboxgl.accessToken = 'pk.eyJ1IjoiZ2dkZXY0MDQiLCJhIjoiY2xodmh5Nmg0MDhoZzNscGl4enpxY3FpdCJ9.sqSeKDYIfI0NDw2A8uT62Q';
  
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11', // Estilo de mapa predeterminado
  center: [-89.6136941768833, 20.939871925526383], // Coordenadas de ejemplo (Nueva York)
  zoom: 15 // Nivel de zoom inicial
});

var marker = new mapboxgl.Marker()
  .setLngLat([-89.6136941768833, 20.939871925526383])
  .addTo(map);


  var datosFormulario = [];

  function guardarDatos(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
  
    // Captura los valores de los campos de entrada
    var apellidos = document.getElementById('apellidosAsistente').value;
    var nombre = document.getElementById('NombreAsistente').value;
  
    // Crea un objeto con los datos capturados
    var datos = {
      apellidos: apellidos,
      nombre: nombre
    };
  
    // Agrega el objeto al array de datos del formulario
    datosFormulario.push(datos);
  
    // Limpia los campos de entrada
    document.getElementById('apellidosAsistente').value = '';
    document.getElementById('NombreAsistente').value = '';
  
    // Vacía el contenido de la lista de asistentes
    document.getElementById('asistentesLista').innerHTML = '';
  
    // Agrega nuevamente los elementos a la lista
    for (var i = 0; i < datosFormulario.length; i++) {
      var asistente = datosFormulario[i];
      var li = document.createElement('li');
      li.classList.add('list-group-item');
      li.textContent = asistente.nombre + ' ' + asistente.apellidos;
      document.getElementById('asistentesLista').appendChild(li);
    }
  
    // Muestra los datos guardados en la consola
    console.log(datosFormulario);
  }

  var formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', guardarDatos);

  
  