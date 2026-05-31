const perfumes = [
    // --- LATTAFA / ASAD / KHAMRAH ---
    { id: 1, nombre: "Khamrah", marca: "Lattafa", precio: 120000, categoria: "Unisex", tipo: "original", promocion: false, imagen: "https://perfumartevip.com/wp-content/uploads/2023/06/Khamrah-de-Lattafa-100ml-scaled.webp" },
    { id: 2, nombre: "Honor and Glory", marca: "Lattafa", precio: 120000, categoria: "Hombre", tipo: "original", promocion: true, precioAnterior: 160000, imagen: "https://lorens.com.co/wp-content/uploads/Badee-Al-Oud-Honor-Glory-de-Lattafa-unisex-edp-flyer.jpg" },
    { id: 3, nombre: "Yara Rose", marca: "Lattafa", precio: 140000, categoria: "Mujer", tipo: "1.1", promocion: false, imagen: "https://static.wixstatic.com/media/7e4077_71f6c61a68cd4645a7501123645c25b6~mv2.jpg/v1/fill/w_520,h_578,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7e4077_71f6c61a68cd4645a7501123645c25b6~mv2.jpg" },
    { id: 4, nombre: "Asad", marca: "Lattafa", precio: 135000, categoria: "Hombre", tipo: "original", promocion: false, imagen: "https://media.falabella.com/falabellaCO/128762344_01/w=1500,h=1500,fit=cover   " },
    
];

let carrito = [];
let filtroActual = { tipoFiltro: "categoria", valor: "todos" }; 

function formatearPrecio(numero) {
    return '$' + numero.toLocaleString('es-CO');
}

function mostrarPerfumes(lista) {
    const contenedor = document.getElementById("catalogo");
    const contadorResultados = document.getElementById("contador-resultados");
    contenedor.innerHTML = ""; 

    contadorResultados.innerText = `${lista.length} ${lista.length === 1 ? 'fragancia encontrada' : 'fragancias encontradas'}`;

    if(lista.length === 0) {
        contenedor.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #888;">No encontramos perfumes que coincidan con tu búsqueda.</div>`;
        return;
    }

    lista.forEach((perfume, index) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-perfume");
        tarjeta.style.animationDelay = `${index * 0.02}s`; 

        let badgePromo = perfume.promocion ? `<div class="badge-promo">Oferta</div>` : "";
        let precioHTML = perfume.promocion 
            ? `<p class="precio"><span style="text-decoration: line-through; color: #a0a0a0; font-size: 13px; font-weight: 400;">${formatearPrecio(perfume.precioAnterior)}</span> ${formatearPrecio(perfume.precio)}</p>`
            : `<p class="precio">${formatearPrecio(perfume.precio)}</p>`;

        let textoTipo = perfume.tipo === "original" ? "Original de Fábrica" : "Calidad 1.1 (Espejo)";

        tarjeta.innerHTML = `
            ${badgePromo}
            <div class="img-contenedor">
                <img src="${perfume.imagen}" alt="${perfume.nombre}" loading="lazy">
            </div>
            <div class="info-perfume">
                <div>
                    <h3>${perfume.nombre}</h3>
                    <p class="marca">${perfume.marca}</p>
                    <span class="tipo-producto">${textoTipo}</span>
                </div>
                <div>
                    ${precioHTML}
                    <button class="btn-agregar" onclick="agregarAlCarrito(${perfume.id})">Agregar</button>
                </div>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}

function cambiarBotonActivo(botonElemento) {
    document.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('activo'));
    if(botonElemento) botonElemento.classList.add('activo');
}

function filtrarCategoria(categoria, elemento) {
    filtroActual = { tipoFiltro: "categoria", valor: categoria };
    cambiarBotonActivo(elemento);
    ejecutarFiltroCombinado();
    
    // Cierra el menú desplegable automáticamente en celulares tras elegir una opción
    document.getElementById("barra-filtros").classList.remove("open-menu");
    document.getElementById("btn-hamburguesa").innerText = "☰ Mostrar Categorías";
}

function filtrarTipo(tipo, elemento) {
    filtroActual = { tipoFiltro: "tipo", valor: tipo };
    cambiarBotonActivo(elemento);
    ejecutarFiltroCombinado();
    
    // Cierra el menú desplegable automáticamente en celulares tras elegir una opción
    document.getElementById("barra-filtros").classList.remove("open-menu");
    document.getElementById("btn-hamburguesa").innerText = "☰ Mostrar Categorías";
}

function buscarProductos() {
    ejecutarFiltroCombinado();
}

function ejecutarFiltroCombinado() {
    const textoBusqueda = document.getElementById("input-busqueda").value.toLowerCase().trim();
    const titulo = document.getElementById("titulo-seccion");
    
    let listaFiltrada = perfumes;

    if (filtroActual.tipoFiltro === "categoria") {
        if (filtroActual.valor === "promocion") {
            listaFiltrada = listaFiltrada.filter(p => p.promocion);
            titulo.innerText = "Promociones Especiales";
        } else if (filtroActual.valor !== "todos") {
            listaFiltrada = listaFiltrada.filter(p => 
                p.categoria.toLowerCase() === filtroActual.valor.toLowerCase() || 
                p.categoria.toLowerCase() === "unisex"
            );
            titulo.innerText = `Perfumes para ${filtroActual.valor}`;
        } else {
            titulo.innerText = "Todos los Perfumes";
        }
    } else if (filtroActual.tipoFiltro === "tipo") {
        listaFiltrada = listaFiltrada.filter(p => p.tipo === filtroActual.valor);
        titulo.innerText = filtroActual.valor === "original" ? "Fragancias Originales" : "Perfumes Calidad 1.1";
    }

    if (textoBusqueda !== "") {
        listaFiltrada = listaFiltrada.filter(p => 
            p.nombre.toLowerCase().includes(textoBusqueda) || 
            p.marca.toLowerCase().includes(textoBusqueda)
        );
        titulo.innerText = `Resultados para: "${textoBusqueda}"`;
    }

    mostrarPerfumes(listaFiltrada);
}

// --- SECCIÓN CANASTA ---
function toggleCarrito() {
    document.getElementById("carrito-sidebar").classList.toggle("open");
}

function agregarAlCarrito(id) {
    const productoExistente = carrito.find(item => item.id === id);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        const productoOriginal = perfumes.find(p => p.id === id);
        carrito.push({ ...productoOriginal, cantidad: 1 });
    }
    actualizarInterfazCarrito();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarInterfazCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarInterfazCarrito();
}

function actualizarInterfazCarrito() {
    const contenedorItems = document.getElementById("carrito-items");
    const contador = document.getElementById("contador-carrito");
    const totalPrecio = document.getElementById("total-precio");

    contenedorItems.innerHTML = "";

    if (carrito.length === 0) {
        contenedorItems.innerHTML = `<p class="carrito-vacio">Tu canasta está vacía.</p>`;
        contador.innerText = "0";
        totalPrecio.innerText = "$0";
        return;
    }

    let totalCalculado = 0;
    let cantidadProductos = 0;

    carrito.forEach(item => {
        totalCalculado += item.precio * item.cantidad;
        cantidadProductos += item.cantidad;

        const divItem = document.createElement("div");
        divItem.classList.add("item-carrito");
        divItem.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <div class="item-detalles">
                <h4>${item.nombre}</h4>
                <p>${item.cantidad} x ${formatearPrecio(item.precio)}</p>
            </div>
            <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.id})">Quitar</button>
        `;
        contenedorItems.appendChild(divItem);
    });

    contador.innerText = cantidadProductos;
    totalPrecio.innerText = formatearPrecio(totalCalculado);
}

function enviarWhatsApp() {
    if(carrito.length === 0) return alert("Tu canasta está vacía.");
    
    let mensaje = "Hola, me gustaría encargar las siguientes fragancias:\n\n";
    let total = 0;
    
    carrito.forEach(item => {
        mensaje += `• ${item.cantidad}x ${item.nombre} (${item.tipo.toUpperCase()}) - ${formatearPrecio(item.precio * item.cantidad)}\n`;
        total += item.precio * item.cantidad;
    });
    
    mensaje += `\n*Total a pagar:* ${formatearPrecio(total)}`;
    
    const url = `https://wa.me/573012503546?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// --- NUEVA FUNCIÓN INTERACTIVA: CONTROL DEL MENÚ PARA CELULARES ---
function toggleMenuMobile() {
    const barraFiltros = document.getElementById("barra-filtros");
    const btnHamburguesa = document.getElementById("btn-hamburguesa");
    
    barraFiltros.classList.toggle("open-menu");
    
    if (barraFiltros.classList.contains("open-menu")) {
        btnHamburguesa.innerText = "✕ Cerrar Categorías";
    } else {
        btnHamburguesa.innerText = "☰ Mostrar Categorías";
    }
}

window.onload = () => {
    mostrarPerfumes(perfumes);
};