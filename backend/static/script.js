// Datos de productos ...
const productos = {
  entradas: [
    {
      nombre: "Ensalada César",
      precio: 1200,
      descripcion: "ensalada clásica que combina lechuga romana, croûtons (trozos de pan tostado), queso parmesano, jugo de limón, aceite de oliva, huevo, salsa Worcestershire, anchoas, ajo, mostaza de Dijon (opcional) y pimienta negra",
      imagen: "https://masonrecipes.com/wp-content/webp-express/webp-images/uploads/2025/02/Image_3-140.png.webp",
    },
    {
      nombre: "Bruschetta",
      precio: 800,
      descripcion: "rebanadas de pan tostado frotadas con ajo y cubiertas con aceite de oliva, sal y otros ingredientes como tomate, albahaca, queso o vegetales",
      imagen: "https://i.pinimg.com/736x/07/10/55/071055249e27852a2e9341ed25fe239d.jpg",
    },
    {
      nombre: "Rollitos de primavera",
      precio: 950,
      descripcion: "envolturas crujientes rellenas de verduras salteadas y fideos",
      imagen: "https://cdn2.cocinadelirante.com/sites/default/files/images/2018/04/receta-rollitos-primavera-con-tortilla-de-harina.jpg",
    },
    {
      nombre: "Dip de espinaca y alcachofa",
      precio: 1100,
      descripcion: "crema de espinacas con corazones de alcachofa, queso y especias",
      imagen: "https://th.bing.com/th/id/R.44293e3e21ff70868927d4ac490a374c?rik=SM2GAzCkWvseqg&riu=http%3a%2f%2fwww.vitamixespana.com%2frecetas%2fwp-content%2fuploads%2f2019%2f01%2fdip-de-espinacas.jpg&ehk=SX9CwoNr1MQqKWdi9kVxUxUEUIi32Z3a4v7hXiUmqT8%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      nombre: "Calamares fritos",
      precio: 1300,
      descripcion: "aros de calamar empanizados, servidos con alioli",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvnygUbzQmAh1ohTYLTZPf0ZIAB-TSt5mag&s",
    },
    
    {
      nombre: "Empanadas de carne",
      precio: 700,
      descripcion: "masa rellena de carne picada, cebolla y especias, horneadas o fritas",
      imagen: "https://th.bing.com/th/id/OIP.etFI5GeYrcCehme5yExidAHaE8?r=0&rs=1&pid=ImgDetMain",
    },
    {
      nombre: "Pinchos de pollo",
      precio: 850,
      descripcion: "trocitos de pollo marinado en brocheta, grillados",
      imagen: "https://th.bing.com/th/id/OIP.0RoEyNC3y8L7BZP-vRcGBAHaEK?r=0&rs=1&pid=ImgDetMain",
    },
    {
      nombre: "Tablas de quesos",
      precio: 1500,
      descripcion: "selección de quesos artesanales, nueces y mermeladas",
      imagen: "https://th.bing.com/th/id/OIP.aS9Fh6qPSFrYjDT49vDxoAHaHx?r=0&rs=1&pid=ImgDetMain",
    },
    {
      nombre: "Tostadas de aguacate",
      precio: 950,
      descripcion: "pan integral con puré de aguacate, limón, sal y pimienta",
      imagen: "https://th.bing.com/th/id/OIP.NXHzYf7DJRZRQ8C2w1FnbAHaE8?r=0&rs=1&pid=ImgDetMain",
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
    {
      nombre: "Filete de salmón",
      precio: 2200,
      descripcion: "salmón a la plancha, con salsa de limón y eneldo",
      imagen: "https://th.bing.com/th/id/OIP.RMFPihAup19edTMeWqrGkgHaE8?r=0&rs=1&pid=ImgDetMain",
    },
    {
      nombre: "Risotto de champiñones",
      precio: 1750,
      descripcion: "arroz cremoso con setas salteadas y parmesano",
      imagen: "https://th.bing.com/th/id/OIP.2bRYYGJY_U-u8QvHBgU_lgHaEo?r=0&rs=1&pid=ImgDetMain",
    },
    {
      nombre: "Lomo a la pimienta",
      precio: 2400,
      descripcion: "medallones de lomo en salsa cremosa de pimienta",
      imagen: "https://misrecetasdecocina.net/wp-content/uploads/2019/01/incre%C3%ADble-lomo-a-la-pimienta.jpg",
    },
    {
      nombre: "Lasagna de carne",
      precio: 1800,
      descripcion: "capas de pasta con carne, salsa bechamel y queso gratinado",
      imagen: "https://th.bing.com/th/id/OIP.6GW-V2ucpnI-VjxYi6gbUwHaEK?r=0&rs=1&pid=ImgDetMain",
    },
    {
      nombre: "Tacos de carnita",
      precio: 1450,
      descripcion: "tortillas rellenas de cerdo adobado, cebolla y cilantro",
      imagen: "https://cielitorosado.com/wp-content/uploads/2022/11/CARNITAS-sm.jpg",
    },
    {
      nombre: "Curry de vegetales",
      precio: 1650,
      descripcion: "mezcla de vegetales en salsa de curry suave, con arroz",
      imagen: "https://th.bing.com/th/id/OIP.XFjCVzQuQ2WhXsZZTub5bQHaE6?r=0&rs=1&pid=ImgDetMain",
    },
    {
      nombre: "Hamburguesa clásica",
      precio: 1500,
      descripcion: "pan brioche con carne de res, queso cheddar, lechuga y tomate",
      imagen: "https://i.pinimg.com/originals/89/94/3e/89943eddc9dba2d33ba320d0f961db0b.jpg",
    },
    {
      nombre: "Paella mixta",
      precio: 2600,
      descripcion: "arroz con mariscos, pollo y chorizo, al azafrán",
      imagen: "https://th.bing.com/th/id/R.653a1b527cbcbc038a4f7befe56c014a?rik=PGnZMO3l7HRs1Q&riu=http%3a%2f%2f2.bp.blogspot.com%2f_E9gfBDmEIws%2fS-CNZb3yTKI%2fAAAAAAAAAY8%2fp9Bs8b6KA_s%2fs1600%2fIMG_0182.JPG&ehk=9uW3LpPgANP5Vmx6tqf4oZ7IHh9V9Js1tbtkN9Xn7Yw%3d&risl=&pid=ImgRaw&r=0",
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
    {
      nombre: "Brownie de chocolate",
      precio: 850,
      descripcion: "brownie húmedo con nueces y salsa de caramelo",
      imagen: "https://th.bing.com/th/id/OIP.o3Wd3dK0MwKmW1TOEvV3YgHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain",
    },
    {
      nombre: "Cheesecake de frutos rojos",
      precio: 950,
      descripcion: "tarta de queso suave con coulis de frutos rojos",
      imagen: "https://cdn0.recetasgratis.net/es/posts/1/4/9/cheesecake_de_frutos_rojos_73941_paso_6_orig.jpg",
    },
    {
      nombre: "Crème brûlée",
      precio: 1000,
      descripcion: "crema de vainilla con cobertura de azúcar caramelizado",
      imagen: "https://th.bing.com/th/id/R.d577397055559c863a6feac00aa1aa79?rik=6T5NLFphiSh7Zg&riu=http%3a%2f%2fimg.food.com%2ffood%2fCreme-Brulee%2b1.JPG&ehk=RrUDieygMwoLvuCUI2fGWF5jB8hjzlCm1v2fywOzRxA%3d&risl=1&pid=ImgRaw&r=0",
    },
    {
      nombre: "Mousse de chocolate",
      precio: 900,
      descripcion: "espuma ligera de chocolate negro",
      imagen: "https://d1uz88p17r663j.cloudfront.net/original/405e0bb344ede9f3e2384ac9cf8e41ee_mousse-classica-chocolate-receitas-nestle.jpg",
    },
    {
      nombre: "Panna cotta",
      precio: 850,
      descripcion: "postre italiano de crema cuajada con salsa de frutos",
      imagen: "https://th.bing.com/th/id/R.99025fc18e2c242b696e818a09bd3bf2?rik=huiTVFYy7cLH5g&pid=ImgRaw&r=0",
    },
    {
      nombre: "Tarta de manzana",
      precio: 800,
      descripcion: "manzana horneada con canela y masa hojaldrada",
      imagen: "https://th.bing.com/th/id/OIP.g0bP8AMMM0Cxe_Okl2tPOQHaE8?r=0&rs=1&pid=ImgDetMain",
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
    {
      nombre: "Jugo de naranja",
      precio: 600,
      descripcion: "jugo exprimido de naranjas naturales",
      imagen: "https://www.fmdos.cl/wp-content/uploads/2017/06/jugo2.jpg",
    },
    {
      nombre: "Cerveza artesana",
      precio: 950,
      descripcion: "botella de 330ml de cerveza local elaborada artesanalmente",
      imagen: "https://th.bing.com/th/id/OIP.xeze-HKegXwuHMuxPERItwHaE8?r=0&rs=1&pid=ImgDetMain",
    },
    {
      nombre: "Mojito",
      precio: 1200,
      descripcion: "ron blanco, hierbabuena, lima, azúcar y soda",
      imagen: "https://ik.imagekit.io/bhug69xts/mojito.png",
    },

    {
      nombre: "Limonada casera",
      precio: 550,
      descripcion: "limón, azúcar, agua y hielo",
      imagen: "https://www.recetasderechupete.com/wp-content/uploads/2022/06/Limonada-casera-en-jarra-1200x828.jpg",
    },

    {
      nombre: "Vino tinto (copa)",
      precio: 700,
      descripcion: "copa de vino tinto reserva",
      imagen: "https://www.sinembargo.mx/wp-content/uploads/2017/08/copa-vino-tinto.jpg",
    },
  ],
};


// Variables globales
let carrito = [];

// Mostrar mensaje flotante con diferentes tipos
function mostrarMensajeFlotante(mensaje, tipo = 'exito') {
  const mensajeFlotante = document.getElementById("mensaje-flotante");
  mensajeFlotante.textContent = mensaje;

  // Limpiar clases previas
  mensajeFlotante.className = '';

  // Agregar clase según el tipo
  if (tipo === 'info') {
    mensajeFlotante.classList.add('mensaje-info');
  } else {
    mensajeFlotante.classList.add('mensaje-exito');
  }

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
    mostrarMensajeFlotante("El carrito está vacío.", 'info');
    return;
  }

  // Mostrar modal correctamente
  const modal = document.getElementById("paymentModal");
  modal.style.display = "flex";
  modal.classList.add("abierta");
}

// Función para cerrar el modal de pago
function cerrarModalPago() {
  const modal = document.getElementById("paymentModal");
  modal.style.display = "none";
  modal.classList.remove("abierta");
}

// FUNCIÓN QR MEJORADA - Usando QRCode.js
function mostrarQR(url) {
  const qrModal = document.getElementById("qrModal");
  const qrcodeDiv = document.getElementById("qrcode");
  
  // Limpiar contenido anterior
  qrcodeDiv.innerHTML = "";
  
  console.log("🔄 Generando QR para URL:", url);
  
  // Verificar que QRCode esté disponible
  if (typeof QRCode === 'undefined') {
    console.error("❌ QRCode.js no está cargado");
    mostrarQRFallback(url, qrcodeDiv);
    qrModal.style.display = "flex";
    return;
  }
  
  try {
    // Crear contenedor para el QR
    const qrContainer = document.createElement('div');
    qrContainer.style.textAlign = 'center';
    qrContainer.style.padding = '20px';
    
    // Agregar mensaje arriba del QR
    const mensaje = document.createElement('p');
    mensaje.textContent = 'Redireccionando a Mercado Pago';
    mensaje.style.marginBottom = '15px';
    mensaje.style.fontSize = '16px';
    mensaje.style.color = '#333';
    qrContainer.appendChild(mensaje);
    
    // Crear div para el QR
    const qrDiv = document.createElement('div');
    qrDiv.id = 'qr-container';
    qrDiv.style.display = 'inline-block';
    qrDiv.style.margin = '0 auto';
    qrContainer.appendChild(qrDiv);
    
    // Agregar enlace de respaldo
    const enlaceRespaldo = document.createElement('div');
    enlaceRespaldo.style.marginTop = '15px';
    enlaceRespaldo.innerHTML = `
      <p style="font-size: 14px; color: #666; margin-bottom: 10px;">
        ¿No funciona el QR?
      </p>
      <a href="${url}" target="_blank" 
         style="display: inline-block; padding: 10px 20px; background: #00a650; 
                color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
        Abrir Mercado Pago
      </a>
    `;
    qrContainer.appendChild(enlaceRespaldo);
    
    qrcodeDiv.appendChild(qrContainer);
    
    // Generar QR con QRCode.js
    new QRCode(qrDiv, {
      text: url,
      width: 280,
      height: 280,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
    
    console.log("✅ QR generado exitosamente");
    qrModal.style.display = "flex";
    
  } catch (error) {
    console.error("❌ Error generando QR con QRCode.js:", error);
    mostrarQRFallback(url, qrcodeDiv);
    qrModal.style.display = "flex";
  }
}

// Función de respaldo cuando falla QRCode.js
function mostrarQRFallback(url, contenedor) {
  console.log("🔄 Usando método de respaldo para QR");
  
  contenedor.innerHTML = `
    <div style="text-align: center; padding: 20px;">
      <h3 style="color: #333; margin-bottom: 15px;">Pagar con Mercado Pago</h3>
      <div style="border: 2px dashed #00a650; border-radius: 10px; padding: 20px; margin: 15px 0;">
        <p style="margin-bottom: 15px; color: #666;">
          Haz clic en el enlace para completar tu pago:
        </p>
        <a href="${url}" target="_blank" 
           style="display: inline-block; padding: 15px 30px; background: #00a650; 
                  color: white; text-decoration: none; border-radius: 8px; 
                  font-weight: bold; font-size: 16px;">
          🔗 Ir a Mercado Pago
        </a>
      </div>
      <p style="font-size: 12px; color: #999; margin-top: 10px;">
        Se abrirá en una nueva ventana
      </p>
    </div>
  `;
}

// Eventos al cargar
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Inicializando aplicación...");
  
  // Verificar si QRCode.js está disponible
  if (typeof QRCode !== 'undefined') {
    console.log("✅ QRCode.js cargado correctamente");
  } else {
    console.warn("⚠️ QRCode.js no detectado, se usará método de respaldo");
  }
  
  mostrarSeccion("entradas");

  // Click en Finalizar Compra
  document.getElementById("finalizar-compra").addEventListener("click", finalizarCompra);

  // Cerrar modal de pago
  document.querySelector(".close-modal").addEventListener("click", cerrarModalPago);

  // Opciones de pago
  document.querySelectorAll(".payment-option").forEach(btn => {
    btn.addEventListener("click", async e => {
      const metodo = e.target.dataset.method;
      console.log("💳 Método de pago seleccionado:", metodo);

      if (metodo === "Mercado Pago") {
        try {
          // Mostrar loading
          mostrarMensajeFlotante("Generando enlace de pago...", 'info');
          
          // Prepara los items para el backend
          const items = carrito.map(prod => ({
            title: prod.nombre,
            quantity: prod.cantidad,
            unit_price: prod.precio
          }));
          
          console.log("📦 Items enviados al backend:", items);

          // Llama al backend para crear la preferencia
          const res = await fetch("/create_preference", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items })
          });
          
          const data = await res.json();
          console.log("🔄 Respuesta del backend:", data);

          if (data.init_point) {
            console.log("✅ Init point recibido:", data.init_point);
            mostrarQR(data.init_point);
          } else {
            console.error("❌ No se recibió init_point:", data);
            mostrarMensajeFlotante("Error: No se pudo generar el enlace de pago", 'info');
          }
        } catch (error) {
          console.error("💥 Error en el proceso de pago:", error);
          mostrarMensajeFlotante("Error de conexión. Intenta nuevamente.", 'info');
        }
        
        cerrarModalPago();
        return;
      }

      // Otros métodos de pago
      cerrarModalPago();
      mostrarMensajeFlotante(`Su método de pago "${metodo}" ha sido cargado exitosamente`, 'info');
      setTimeout(() => {
        mostrarMensajeFlotante(`Compra finalizada con ${metodo}. ¡Gracias por su pedido!`, 'exito');
        carrito = [];
        actualizarCarrito();
        cerrarCarrito();
      }, 2000);
    });
  });

  // Cerrar modal al hacer click fuera de él
  document.getElementById("paymentModal").addEventListener("click", function(e) {
    if (e.target === this) {
      cerrarModalPago();
    }
  });

  // Cerrar QR modal
  document.querySelector(".close-qr").addEventListener("click", function() {
    document.getElementById("qrModal").style.display = "none";
  });
  
  // Cerrar QR modal al hacer click fuera
  document.getElementById("qrModal").addEventListener("click", function(e) {
    if (e.target === this) {
      this.style.display = "none";
    }
  });
});