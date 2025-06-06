// Enviar formulario (solo muestra una alerta por ahora)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.formulario form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Gracias por solicitar presupuesto. Te contactaremos pronto.');
    form.reset();
  });

  // Ejemplo: botón de añadir al carrito
  const botones = document.querySelectorAll('.producto button');
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      alert('Producto añadido al carrito.');
    });
  });
});