document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    var seleccionados = Array.from(document.getElementById('seleccion-multiple').selectedOptions).map(option => option.value);
    var resultados = document.getElementById('resultados');
    resultados.innerHTML = 'IDs seleccionados: ' + seleccionados.join(', ');
});
