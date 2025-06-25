function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const contenedor = document.getElementById('carrito-container');
  const totalSpan = document.getElementById('total');
  const btnWhatsapp = document.getElementById('btn-whatsapp');
  let total = 0;

  if (carrito.length === 0) {
    contenedor.innerHTML = `<p>No hay productos en el carrito.</p>`;
    totalSpan.innerText = `₡0`;
    if (btnWhatsapp) btnWhatsapp.style.display = 'none'; // Ocultar botón si carrito vacío
    return;
  }

  contenedor.innerHTML = ''; // Limpiar contenido antes de insertar
  if (btnWhatsapp) btnWhatsapp.style.display = 'inline-block'; // Mostrar botón

  carrito.forEach((item, i) => {
    // Convertir precio a número para sumar total
    const precioNumerico = parseInt(item.precio.toString().replace(/[₡,.]/g, '')) || 0;
    total += precioNumerico;

    contenedor.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
          <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">${item.descripcion}</p>
            <p><strong>Precio:</strong> ${item.precio}</p>
            <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${i})">Eliminar</button>
          </div>
        </div>
      </div>
    `;
  });

  totalSpan.innerText = `₡${total.toLocaleString()}`;

  // Preparar mensaje para WhatsApp
  if (btnWhatsapp) {
    let mensaje = "¡Hola! Me gustaría hacer un pedido:\n\n";
    carrito.forEach(item => {
      mensaje += `• ${item.nombre} - ${item.precio}\n`;
    });
    mensaje += `\nTotal: ₡${total.toLocaleString()}`;

    const numero = "50688078076"; 
    btnWhatsapp.href = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  }
}

function eliminarDelCarrito(index) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
  actualizarContador();
}

function actualizarContador() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const contador = document.getElementById('cart-count');
  if (contador) {
    contador.textContent = carrito.length;
  }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  mostrarCarrito();
  actualizarContador();
});
