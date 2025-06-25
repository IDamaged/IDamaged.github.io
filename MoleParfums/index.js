function actualizarContador() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contador = document.getElementById('cart-count');
    if (contador) {
      contador.textContent = carrito.length;
    }
  }

  document.addEventListener('DOMContentLoaded', actualizarContador);