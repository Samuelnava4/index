const perfumes = [
    // --- LATTAFA / ASAD / KHAMRAH ---
    { id: 1, nombre: "Khamrah", marca: "Lattafa", precio: 120000, categoria: "Unisex", tipo: "original", promocion: false, imagen: "https://perfumartevip.com/wp-content/uploads/2023/06/Khamrah-de-Lattafa-100ml-scaled.webp" },
    { id: 2, nombre: "Honor and Glory", marca: "Lattafa", precio: 120000, categoria: "Hombre", tipo: "original", promocion: true, precioAnterior: 160000, imagen: "https://lorens.com.co/wp-content/uploads/Badee-Al-Oud-Honor-Glory-de-Lattafa-unisex-edp-flyer.jpg" },
    { id: 3, nombre: "Yara Rose", marca: "Lattafa", precio: 140000, categoria: "Mujer", tipo: "1.1", promocion: false, imagen: "https://static.wixstatic.com/media/7e4077_71f6c61a68cd4645a7501123645c25b6~mv2.jpg/v1/fill/w_520,h_578,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7e4077_71f6c61a68cd4645a7501123645c25b6~mv2.jpg" },
    { id: 4, nombre: "Asad", marca: "Lattafa", precio: 135000, categoria: "Hombre", tipo: "original", promocion: false, imagen: "https://perfumesreal.com/cdn/shop/files/LattafaAsad.png?v=1707925576&width=500" },
    { id: 5, nombre: "Yara Tous (Mango)", marca: "Lattafa", precio: 125000, categoria: "Mujer", tipo: "original", promocion: true, precioAnterior: 155000, imagen: "https://www.duchy.co/cdn/shop/files/YaraTousLattafa.png?v=1711726055&width=500" },
    { id: 6, nombre: "Yara Moi (Blanco)", marca: "Lattafa", precio: 125000, categoria: "Mujer", tipo: "original", promocion: false, imagen: "https://perfumeriaimportada.com.co/wp-content/uploads/2023/09/Yara-Moi-Lattafa.jpg" },
    { id: 7, nombre: "Khamrah Qahwa", marca: "Lattafa", precio: 165000, categoria: "Unisex", tipo: "original", promocion: false, imagen: "https://perfumesreal.com/cdn/shop/files/LattafaKhamrahQahwa.png?v=1707927237&width=500" },
    { id: 8, nombre: "Amethyst Bade'e Al Oud", marca: "Lattafa", precio: 140000, categoria: "Unisex", tipo: "original", promocion: false, imagen: "https://perfumartevip.com/wp-content/uploads/2022/10/Bade_e-Al-Oud-Amethyst-100ml.webp" },
    { id: 9, nombre: "Oud For Glory", marca: "Lattafa", precio: 145000, categoria: "Unisex", tipo: "original", promocion: true, precioAnterior: 180000, imagen: "https://perfumesreal.com/cdn/shop/files/LattafaBadeeAlOudOudforGlory.png?v=1707925695&width=500" },
    { id: 10, nombre: "Fakar Gold", marca: "Lattafa", precio: 130000, categoria: "Hombre", tipo: "original", promocion: false, imagen: "https://perfumesreal.com/cdn/shop/files/LattafaFakharLattafaMen.png?v=1707926219&width=500" },

    // --- ORIENTICA ---
    { id: 11, nombre: "Orientica Royal Amber", marca: "Orientica", precio: 120000, categoria: "Unisex", tipo: "1.1", promocion: true, precioAnterior: 160000, imagen: "https://madeira.com.co/cdn/shop/products/6291106811568_1.jpg?v=1653521131" },
    { id: 12, nombre: "Orientica Amber Rouge", marca: "Orientica", precio: 590000, categoria: "Unisex", tipo: "original", promocion: true, precioAnterior: 680000, imagen: "https://perfumesreal.com/cdn/shop/files/OrienticaAmberRouge_1.png?v=1706910012&width=1200" },
    { id: 13, nombre: "Orientica Velvet Gold", marca: "Orientica", precio: 480000, categoria: "Mujer", tipo: "original", promocion: false, imagen: "https://perfumesreal.com/cdn/shop/files/OrienticaVelvetGold.png?v=1706911674&width=500" },
    { id: 14, nombre: "Orientica Royal Bleu", marca: "Orientica", precio: 460000, categoria: "Hombre", tipo: "original", promocion: false, imagen: "https://perfumesreal.com/cdn/shop/files/OrienticaLuxuryCollectionRoyalBleu.png?v=1706911293&width=500" },

    // --- CLUB DE NUIT (ARMAF) ---
    { id: 15, nombre: "Club De Nuit Intense Man", marca: "Armaf", precio: 195000, categoria: "Hombre", tipo: "original", promocion: false, imagen: "https://perfumesreal.com/cdn/shop/files/ArmafClubdeNuitIntenseManEDT.png?v=1707914945&width=500" },
    { id: 16, nombre: "Club De Nuit Woman", marca: "Armaf", precio: 160000, categoria: "Mujer", tipo: "original", promocion: false, imagen: "https://perfumesreal.com/cdn/shop/files/ArmafClubdeNuitWoman.png?v=1707916493&width=500" },
    { id: 17, nombre: "Club De Nuit Iconic", marca: "Armaf", precio: 240000, categoria: "Hombre", tipo: "original", promocion: true, precioAnterior: 290000, imagen: "https://perfumesreal.com/cdn/shop/files/ArmafClubdeNuitIconic.png?v=1707914841&width=500" },
    { id: 18, nombre: "Club De Nuit Untold", marca: "Armaf", precio: 260000, categoria: "Unisex", tipo: "original", promocion: false, imagen: "https://perfumesreal.com/cdn/shop/files/ArmafClubdeNuitUntold.png?v=1707916365&width=500" },
    { id: 19, nombre: "Club De Nuit Imperiale", marca: "Armaf", precio: 250000, categoria: "Mujer", tipo: "original", promocion: false, imagen: "https://perfumesreal.com/cdn/shop/files/ArmafClubdeNuitWhiteImperiale.png?v=1707916447&width=500" },

    // --- BHARARA ---
    { id: 20, nombre: "Bharara King", marca: "Bharara", precio: 135000, categoria: "Hombre", tipo: "1.1", promocion: false, imagen: "https://perfumartevip.com/wp-content/uploads/2022/06/Bharara-King-100ml-scaled.webp" },
    { id: 21, nombre: "Bharara King Original", marca: "Bharara", precio: 490000, categoria: "Hombre", tipo: "original", promocion: true, precioAnterior: 550000, imagen: "https://perfumesreal.com/cdn/shop/files/BhararaKing_697b0996-03c7-4df3-8472-fbda2f63889a.png?v=1706904677&width=500" },
    { id: 22, nombre: "Bharara Queen", marca: "Bharara", precio: 450000, categoria: "Mujer", tipo: "original", promocion: false, imagen: "https://perfumesreal.com/cdn/shop/files/BhararaQueen.png?v=1706905001&width=500" },
    { id: 23, nombre: "Bharara Onyx", marca: "Bharara", precio: 460000, categoria: "Hombre", tipo: "original", promocion: false, imagen: "https://perfumesreal.com/cdn/shop/files/BhararaOnyx.png?v=1706904899&width=500" },

    // --- MAISON ALHAMBRA ---
    { id: 24, nombre: "Kismet Moscow", marca: "Maison Alhambra", precio: 115000, categoria: "Hombre", tipo: "original", promocion: false, imagen: "https://lorens.com.co/wp-content/uploads/Kismet-Moscow-Maison-Alhambra-edp-100ml-hombre.jpg" },
    { id: 25, nombre: "Lovely Cherie", marca: "Maison Alhambra", precio: 120000, categoria: "Unisex", tipo: "original", promocion: true, precioAnterior: 150000, imagen: "https://lorens.com.co/wp-content/uploads/Lovely-Cherie-Maison-Alhambra-edp-80ml-unisex-flyer.jpg" },
    { id: 26, nombre: "Porto Neroli", marca: "Maison Alhambra", precio: 110000, categoria: "Unisex", tipo: "original", promocion: false, imagen: "https://lorens.com.co/wp-content/uploads/Porto-Neroli-Maison-Alhambra-edp-80ml-unisex-flyer.jpg" },
    { id: 27, nombre: "Baroque Rouge 540", marca: "Maison Alhambra", precio: 115000, categoria: "Unisex", tipo: "original", promocion: false, imagen: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80" },
    { id: 28, nombre: "Salvo Intense (Clone Sauvage)", marca: "Maison Alhambra", precio: 120000, categoria: "Hombre", tipo: "original", promocion: false, imagen: "https://lorens.com.co/wp-content/uploads/Salvo-Intense-Maison-Alhambra-edp-100ml-hombre-flyer.jpg" },

    // --- AL HARAMAIN ---
    { id: 29, nombre: "Amber Oud Gold Edition", marca: "Al Haramain", precio: 320000, categoria: "Unisex", tipo: "original", promocion: false, imagen: "https://perfumesreal.com/cdn/shop/files/AlHaramainAmberOudGoldEdition_1.png?v=1707913318&width=500" },
    { id: 30, nombre: "Amber Oud Ruby Edition", marca: "Al Haramain", precio: 340000, categoria: "Unisex", tipo: "original", promocion: true, precioAnterior: 410000, imagen: "https://perfumesreal.com/cdn/shop/files/AlHaramainAmberOudRubyEdition.png?v=1707913506&width=500" },
    { id: 31, nombre: "Amber Oud Carbon Edition", marca: "Al Haramain", precio: 290000, categoria: "Hombre", tipo: "original", promocion: false, imagen: "https://perfumesreal.com/cdn/shop/files/AlHaramainAmberOudCarbonEdition.png?v=1707913217&width=500" },

    // --- PERFUMES DE DISEÑADOR COMUNES (CALIDAD 1.1) ---
    { id: 32, nombre: "Sauvage Dior (Espejo)", marca: "Dior", precio: 135000, categoria: "Hombre", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=500&q=80" },
    { id: 33, nombre: "Bleu de Chanel (Espejo)", marca: "Chanel", precio: 140000, categoria: "Hombre", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80" },
    { id: 34, nombre: "One Million Gold", marca: "Paco Rabanne", precio: 125000, categoria: "Hombre", tipo: "1.1", promocion: true, precioAnterior: 160000, imagen: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80" },
    { id: 35, nombre: "Good Girl Tradicional", marca: "Carolina Herrera", precio: 130000, categoria: "Mujer", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=500&q=80" },
    { id: 36, nombre: "212 VIP Black", marca: "Carolina Herrera", precio: 130000, categoria: "Hombre", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80" },
    { id: 37, nombre: "212 VIP Rose", marca: "Carolina Herrera", precio: 130000, categoria: "Mujer", tipo: "1.1", promocion: true, precioAnterior: 170000, imagen: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80" },
    { id: 38, nombre: "Acqua Di Gio (Espejo)", marca: "Giorgio Armani", precio: 125000, categoria: "Hombre", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80" },
    { id: 39, nombre: "Eros", marca: "Versace", precio: 130000, categoria: "Hombre", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80" },
    { id: 40, nombre: "Light Blue", marca: "Dolce & Gabbana", precio: 125000, categoria: "Mujer", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80" },
    { id: 41, nombre: "Scandal", marca: "Jean Paul Gaultier", precio: 135000, categoria: "Mujer", tipo: "1.1", promocion: true, precioAnterior: 180000, imagen: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=500&q=80" },
    { id: 42, nombre: "Le Male", marca: "Jean Paul Gaultier", precio: 135000, categoria: "Hombre", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80" },
    { id: 43, nombre: "Invictus", marca: "Paco Rabanne", precio: 125000, categoria: "Hombre", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80" },
    { id: 44, nombre: "La Vie Est Belle", marca: "Lancôme", precio: 135000, categoria: "Mujer", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80" },
    { id: 45, nombre: "Black Opium", marca: "Yves Saint Laurent", precio: 130000, categoria: "Mujer", tipo: "1.1", promocion: true, precioAnterior: 165000, imagen: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=500&q=80" },
    { id: 46, nombre: "CH Pasión", marca: "Carolina Herrera", precio: 135000, categoria: "Mujer", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80" },
    { id: 47, nombre: "Stronger With You", marca: "Giorgio Armani", precio: 135000, categoria: "Hombre", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80" },
    { id: 48, nombre: "Bad Boy", marca: "Carolina Herrera", precio: 130000, categoria: "Hombre", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80" },
    { id: 49, nombre: "Phantom", marca: "Paco Rabanne", precio: 135000, categoria: "Hombre", tipo: "1.1", promocion: true, precioAnterior: 175000, imagen: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80" },
    { id: 50, nombre: "Meow", marca: "Katy Perry", precio: 115000, categoria: "Mujer", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80" },
    { id: 51, nombre: "Can Can", marca: "Paris Hilton", precio: 115000, categoria: "Mujer", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80" },
    { id: 52, nombre: "Toy Boy Moschino", marca: "Moschino", precio: 130000, categoria: "Hombre", tipo: "1.1", promocion: false, imagen: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80" }
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