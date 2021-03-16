/* 
JavaScript / jQuery
web o pagina: Proyecto Integrador
autor: Christian García 
fecha: Marzo 2021
resumen: Código JQuery para el contador de clicks en al página
*/

$('#nVeces').text(
    'Has hecho click ' + sessionStorage.contador + ' veces en esta sesión.'
  );
  
  function contador() {
    if (sessionStorage.contador) {
      sessionStorage.contador = Number(sessionStorage.contador) + 1;
    } else {
      sessionStorage.setItem('contador', 1);
    }
  
    $('#nVeces').text(
      'Has hecho click ' + sessionStorage.contador + ' veces en esta sesión.'
    );
  }
  
  $("#bc").text("Inicio");
  $("#bc2").text("Actualidad");