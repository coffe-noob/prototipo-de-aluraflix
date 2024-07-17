// Función para mostrar el formulario al hacer clic en "Nuevo Video"
document.querySelector('.new-video').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('form-section').style.display = 'block';
});

// Función para limpiar el formulario al hacer clic en "Limpiar"
function limpiarFormulario() {
    document.getElementById('new-video-form').reset();
}
