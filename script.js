// Datos de productos ...
const productos = {
  entradas: [
    {
      nombre: "Ensalada César",
      precio: 1200,
      descripcion: "Lechuga, pollo, crutones y aderezo César.",
      imagen: "https://masonrecipes.com/wp-content/webp-express/webp-images/uploads/2025/02/Image_3-140.png.webp",
    },
    {
      nombre: "Bruschetta",
      precio: 800,
      descripcion: "Pan tostado con tomate, ajo y albahaca.",
      imagen: "https://i.pinimg.com/736x/07/10/55/071055249e27852a2e9341ed25fe239d.jpg",
    },
  ],
  principales: [
    {
      nombre: "Pollo a la plancha",
      precio: 1800,
      descripcion: "Pollo marinado con especias y verduras al vapor.",
      imagen: "https://i.pinimg.com/736x/e2/b7/59/e2b759254416c3e62f937e3eaa0cfaa8.jpg",
    },
    {
      nombre: "Pasta Boloñesa",
      precio: 1600,
      descripcion: "Pasta con salsa boloñesa tradicional.",
      imagen: "https://i.pinimg.com/736x/2b/e8/63/2be8631b54c8a0c48142f58099128f00.jpg",
    },
  ],
  postres: [
    {
      nombre: "Tiramisú",
      precio: 900,
      descripcion: "Postre italiano con café y queso mascarpone.",
      imagen: "https://i.pinimg.com/736x/3f/7e/40/3f7e409ae291934b4bd5925a2f6d412b.jpg",
    },
    {
      nombre: "Helado de vainilla",
      precio: 700,
      descripcion: "Helado cremoso de vainilla con chocolate.",
      imagen: "https://i.pinimg.com/736x/00/f1/82/00f182a249cb5f407f81785cf4cac798.jpg",
    },
  ],
  bebidas: [
    {
      nombre: "Agua mineral",
      precio: 400,
      descripcion: "Agua mineral natural sin gas.",
      imagen: "https://i.pinimg.com/736x/df/25/63/df2563fabfb1c51b6b16ca461bc662b8.jpg",
    },
    {
      nombre: "Coca-Cola 1L",
      precio: 3400,
      descripcion: "Refresco de cola clásico de un litro.",
      imagen: "https://i.pinimg.com/736x/33/38/71/333871f88e37d6be577be2b66e16afcf.jpg",
    },
  ],
};

// Variables globales
let carrito = [];

// Mostrar mensaje flotante
function mostrarMensajeFlotante(mensaje) {
  const mensajeFlotante = document.getElementById("mensaje-flotante");
  mensajeFlotante.textContent = mensaje;
  mensajeFlotante.style.display = "block";
  mensajeFlotante.style.animation = "none";
  void mensajeFlotante.offsetWidth;
  mensajeFlotante.style.animation = "fadeOut 3s ease-out forwards";

  setTimeout(() => {
    mensajeFlotante.style.display = "none";
  }, 3000);
}

// Mostrar productos por sección
function mostrarSeccion(seccion) {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  const items = productos[seccion];
  if (!items) {
    menu.innerHTML = "<p>Sección no encontrada.</p>";
    return;
  }

  let html = "";
  items.forEach((item, index) => {
    html += `
      <div class="producto" onclick="mostrarDetalle('${seccion}', ${index})">
        <img src="${item.imagen}" alt="${item.nombre}" />
        <h3>${item.nombre}</h3>
        <p>$${item.precio}</p>
      </div>
    `;
  });

  menu.innerHTML = html;
}

// Modal de detalle
const detalleProducto = document.getElementById("detalle-producto");
const detalleImg = document.getElementById("detalle-img");
const detalleNombre = document.getElementById("detalle-nombre");
const detalleDescripcion = document.getElementById("detalle-descripcion");
const detallePrecio = document.getElementById("detalle-precio");
const btnAgregar = document.getElementById("btn-agregar");
const btnCerrarDetalle = document.getElementById("btn-cerrar-detalle");

let productoActual = null;
let seccionActual = null;
let indexActual = null;

function mostrarDetalle(seccion, index) {
  const item = productos[seccion][index];
  productoActual = item;
  seccionActual = seccion;
  indexActual = index;

  detalleImg.src = item.imagen;
  detalleNombre.textContent = item.nombre;
  detalleDescripcion.textContent = item.descripcion;
  detallePrecio.textContent = `Precio: $${item.precio}`;
  detalleProducto.style.display = "flex";
}

btnCerrarDetalle.onclick = () => {
  detalleProducto.style.display = "none";
};

btnAgregar.onclick = () => {
  agregarAlCarrito(seccionActual, indexActual);
  detalleProducto.style.display = "none";
};

// Agregar al carrito
function agregarAlCarrito(seccion, index) {
  const item = productos[seccion][index];
  const pos = carrito.findIndex(producto => producto.nombre === item.nombre);
  if (pos >= 0) {
    carrito[pos].cantidad++;
  } else {
    carrito.push({ ...item, cantidad: 1 });
  }
  mostrarMensajeFlotante(`${item.nombre} agregado al carrito.`);

  if (document.getElementById("carrito").classList.contains("abierto")) {
    actualizarCarrito();
  }
}

// Ver carrito
function verCarrito() {
  document.getElementById("carrito").classList.add("abierto");
  actualizarCarrito();
}

// Cerrar carrito
function cerrarCarrito() {
  document.getElementById("carrito").classList.remove("abierto");
}

// Actualizar carrito
function actualizarCarrito() {
  const carritoItems = document.getElementById("carrito-items");
  carritoItems.innerHTML = "";

  if (carrito.length === 0) {
    carritoItems.innerHTML = "<p>Tu carrito está vacío.</p>";
  } else {
    carrito.forEach((producto, index) => {
      const item = document.createElement("div");
      item.style.marginBottom = "12px";
      item.innerHTML = `
        <p><strong>${producto.nombre}</strong> x${producto.cantidad}</p>
        <p>Precio unitario: $${producto.precio}</p>
        <p>Subtotal: $${producto.precio * producto.cantidad}</p>
        <button onclick="eliminarDelCarrito(${index})" class="cancelar-btn">Eliminar</button>
        <hr />
      `;
      carritoItems.appendChild(item);
    });
  }

  const total = carrito.reduce(
    (acc, prod) => acc + prod.precio * prod.cantidad,
    0
  );
  document.getElementById("carrito-total").textContent = `Total: $${total}`;
}

// Eliminar producto
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Finalizar compra
function finalizarCompra() {
  if (carrito.length === 0) {
    mostrarMensajeFlotante("El carrito está vacío.");
    return;
  }

  document.getElementById("paymentModal").style.display = "block";
}

// Eventos al cargar
document.addEventListener("DOMContentLoaded", () => {
  mostrarSeccion("entradas");

  // Click en Finalizar Compra
  document.getElementById("finalizar-compra").addEventListener("click", finalizarCompra);

  // Cerrar modal
  document.querySelector(".close-modal").addEventListener("click", () => {
    document.getElementById("paymentModal").style.display = "none";
  });

  // Opciones de pago
  document.querySelectorAll(".payment-option").forEach(btn => {
    btn.addEventListener("click", e => {
      const metodo = e.target.dataset.method;
      mostrarMensajeFlotante(`Compra finalizada con ${metodo}. ¡Gracias!`);
      carrito = [];
      actualizarCarrito();
      cerrarCarrito();
      document.getElementById("paymentModal").style.display = "none";
    });
  });
});

