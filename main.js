class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre.toUpperCase();
        this.precio = Number(precio);
        this.stock = stock;
    }
    sumarStock() {
        this.stock += 1;
    }
    restarStock() {
        this.stock -= 1;
        this.stock <= 0 && this.stock == 0
    }

    reseteoStock() {
        this.stock = 0
    }
}

let producto1 = new Producto("Yerba", 420, 0);
let producto2 = new Producto("Cafe", 590, 0);
let producto3 = new Producto("Harina", 100, 0);
let producto4 = new Producto("Palmitos", 135, 0);
let producto5 = new Producto("Mermelada", 237, 0);


/**********************************************FETCH******************************************************/
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),

}).then((response) => {
    return response.json()
}).then((json) => {
    console.log("Se realizó un fetch");
});
fetch('productos.json')
    .then((resp) => resp.json)
    .then((data) => {
        console.log(data)
    })


////////////////////////////////////////////////////////////// array del mercado*////////////////////////////

let Mercado = [];


Mercado.push(producto1, producto2, producto3, producto4, producto5);
console.log(Mercado);

/**********************************************ASYNC y PROMESAS***************************************************************/
setTimeout(() => alert("¡Bienvenido al mercado!"), 1500)

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Mercado)
        }, 3000)
    })
}
let productos = [];
pedirProductos()
    .then((res) => {
        productos = res
    })
    .catch((error) => {
        console.log("No se pudo cargar los productos.")
    })
    .finally(() => {
        console.log("Fin de la promesa")
    })

/**************************************almaceno los productos en localStorage******************************/
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
if (localStorage.length !== 0) {
    for (let i = 0; i < localStorage.length; i++) {
        const enLocal = localStorage.key(i)
        let almacenado = localStorage.getItem(enLocal)

        let parseados = JSON.parse(almacenado)
        productos.push(parseados);


    }
    console.clear();
    productos.forEach(object => {
        if (object.stock > 0) {
            let unidad = object.stock
            let queEs = object.nombre
            for (var i = 0; i < Mercado.length; i++) {
                if (Mercado[i].nombre == queEs) {
                    Mercado[i].stock = unidad
                }
            }

        }
    })
    console.log(Mercado)
}

else {
    for (const producto of Mercado) {
        guardarLocal(producto.nombre, JSON.stringify(producto))
    }
}

/************************************************ BOTONES yerba************************************* */
const agregarYerba = document.getElementById("agregarYerba");

let pidoYerba = localStorage.getItem(producto1.nombre);
let stockYerba = JSON.parse(pidoYerba)
agregarYerba.addEventListener("click", () => {
    producto1.sumarStock();


    stockYerba !== producto1 && localStorage.setItem(producto1.nombre, JSON.stringify(producto1))

    Toastify({
        text: "Agregaste 1 Yerba",
        duration: 3000,
        gravity: 'bottom',
        stopOnFocus: true,
        style: {
            background: "#50593E",
        },
    }).showToast();
    agregarYerba.style.background = "green";
    setTimeout(() => { agregarYerba.style.background = "#0d6efd" }, 1000)

})

const quitarYerba = document.getElementById("quitarYerba")
quitarYerba.addEventListener("click", () => {


    if (producto1.stock == 0) return;
    producto1.restarStock();
    stockYerba !== producto1 && localStorage.setItem(producto1.nombre, JSON.stringify(producto1));

    Toastify({
        text: "Elimiaste 1 Yerba",
        duration: 3000,
        gravity: 'bottom',
        stopOnFocus: true,
        style: {
            background: "#F24141",
        },
    }).showToast();
    quitarYerba.style.background = "red";
    setTimeout(() => { quitarYerba.style.background = "#0d6efd" }, 1000)
})

/***********************************************BOTONES cafe*****************************************************/
const agregarCafe = document.getElementById("agregarCafe");

let pidoCafe = localStorage.getItem(producto2.nombre);
let stockCafe = JSON.parse(pidoCafe);
agregarCafe.addEventListener("click", () => {
    producto2.sumarStock();
    stockCafe !== producto2 && localStorage.setItem(producto2.nombre, JSON.stringify(producto2));
    Toastify({
        text: "Agregaste 1 Café",
        duration: 3000,
        gravity: 'bottom',
        stopOnFocus: true,
        style: {
            background: "#50593E",
        },
    }).showToast();
    agregarCafe.style.background = "green";
    setTimeout(() => { agregarCafe.style.background = "#0d6efd" }, 1000)
})

const quitarCafe = document.getElementById("quitarCafe")

quitarCafe.addEventListener("click", () => {

    if (producto2.stock == 0) return;
    producto2.restarStock();
    stockCafe !== producto2 && localStorage.setItem(producto2.nombre, JSON.stringify(producto2));

    Toastify({
        text: "Elimiaste 1 Café",
        duration: 3000,
        gravity: 'bottom',
        stopOnFocus: true,
        style: {
            background: "#F24141",
        },
    }).showToast();
    quitarCafe.style.background = "red";
    setTimeout(() => { quitarCafe.style.background = "#0d6efd" }, 1000)
})

/***********************************************BOTONES harina************************************************************/
const agregarHarina = document.getElementById("agregarHarina");

let pidoHarina = localStorage.getItem(producto3.nombre);
let stockHarina = JSON.parse(pidoHarina);
agregarHarina.addEventListener("click", () => {
    producto3.sumarStock();
    stockHarina !== producto3 && localStorage.setItem(producto3.nombre, JSON.stringify(producto3))

    Toastify({
        text: "Agregaste 1 Harina",
        duration: 3000,
        gravity: 'bottom',
        stopOnFocus: true,
        style: {
            background: "#50593E",
        },
    }).showToast();
    agregarHarina.style.background = "green";
    setTimeout(() => { agregarHarina.style.background = "#0d6efd" }, 1000)
})

const quitarHarina = document.getElementById("quitarHarina")
quitarHarina.addEventListener("click", () => {

    if (producto3.stock == 0) return;
    producto3.restarStock();
    stockHarina !== producto1 && localStorage.setItem(producto3.nombre, JSON.stringify(producto3))

    Toastify({
        text: "Elimiaste 1 Harina",
        duration: 3000,
        gravity: 'bottom',
        stopOnFocus: true,
        style: {
            background: "#F24141",
        },
    }).showToast();
    quitarHarina.style.background = "red";
    setTimeout(() => { quitarHarina.style.background = "#0d6efd" }, 1000)

})

/***************************************BOTONES Palmitos***********************************************************/
const agregarPalmitos = document.getElementById("agregarPalmitos");

let pidoPalmitos = localStorage.getItem(producto4.nombre);
let stockPalmitos = JSON.parse(pidoPalmitos);
agregarPalmitos.addEventListener("click", () => {
    producto4.sumarStock();
    stockPalmitos !== producto4 && localStorage.setItem(producto4.nombre, JSON.stringify(producto4))
    Toastify({
        text: "Agregaste 1 Palmitos",
        duration: 3000,
        gravity: 'bottom',
        stopOnFocus: true,
        style: {
            background: "#50593E",
        },
    }).showToast();
    agregarPalmitos.style.background = "green";
    setTimeout(() => { agregarPalmitos.style.background = "#0d6efd" }, 1000)
})

const quitarPalmitos = document.getElementById("quitarPalmitos")
quitarPalmitos.addEventListener("click", () => {
    if (producto4.stock == 0) return;
    producto4.restarStock();
    stockPalmitos !== producto4 && localStorage.setItem(producto4.nombre, JSON.stringify(producto4))
    Toastify({
        text: "Elimiaste 1 Palmitos",
        duration: 3000,
        gravity: 'bottom',
        stopOnFocus: true,
        style: {
            background: "#F24141",
        },
    }).showToast();
    quitarPalmitos.style.background = "red";
    setTimeout(() => { quitarPalmitos.style.background = "#0d6efd" }, 1000)
})

/***********************************************BOTONES Mermelada*******************************************************/
const agregarMermelada = document.getElementById("agregarMermelada");

let pidoMermelada = localStorage.getItem(producto5.nombre);
let stockMermelada = JSON.parse(pidoMermelada);
agregarMermelada.addEventListener("click", () => {
    producto5.sumarStock();
    stockMermelada !== producto5 && localStorage.setItem(producto5.nombre, JSON.stringify(producto5))
    Toastify({
        text: "Agregaste 1 Mermelada",
        duration: 3000,
        gravity: 'bottom',
        stopOnFocus: true,
        style: {
            background: "#50593E",
        },
    }).showToast();
    agregarMermelada.style.background = "green";
    setTimeout(() => { agregarMermelada.style.background = "#0d6efd" }, 1000)
})

const quitarMermelada = document.getElementById("quitarMermelada")
quitarMermelada.addEventListener("click", () => {
    if (producto5.stock == 0) return;
    producto5.restarStock();
    stockMermelada !== producto5 && localStorage.setItem(producto5.nombre, JSON.stringify(producto5))
    Toastify({
        text: "Quitaste 1 Mermelada",
        duration: 3000,
        gravity: 'bottom',
        style: {
            background: "#F24141",
        },
        stopOnFocus: true,
    }).showToast();
    quitarMermelada.style.background = "red";
    setTimeout(() => { quitarMermelada.style.background = "#0d6efd" }, 1000)
})

/********************************************CALCULAR PRECIO FINAL***************************************************/
let totalPrecio = 0; // Defino la variable para que me guarde el precio total, como variable global.
let nStock = 0;
function precioTotal() {
    // sacar precio almacenado en LocalStorage
    for (const producto of Mercado) {
        localStorage.getItem(producto.nombre, producto.stock)
        nStock += producto.stock
    }
    //creo una funcion para el proceso.
    for (const productos of Mercado) {
        // Creo un ciclo para que me lea toda la informacion del Array de Mercado
        totalPrecio = totalPrecio + productos.precio * productos.stock; //Operacion para calcular el precio.
        //nStock = nStock + productos.stock;
    }

}
let listaCompras = document.getElementById("listaCompras");
let queCompre = document.getElementById("queCompre")
let calculoPrecio = document.getElementById("precioTotal");
calculoPrecio.addEventListener("click", () => {

    nStock = 0
    totalPrecio = 0
    precioTotal();
    queCompre.setAttribute("visibility", "visible")


    let mensajeConStock = document.createElement("div")
    mensajeConStock.setAttribute("id", 'mensajeStock')
    mensajeConStock.innerHTML = `<p>Usted compro ${nStock} producto/os</p>`;
    listaCompras.append(mensajeConStock);

    let mensajeConPrecio = document.createElement("div")
    mensajeConPrecio.setAttribute("id", 'mensajePrecio')
    mensajeConPrecio.innerHTML = `<p>Precio total de la compra es: $  ${totalPrecio} </p>`;
    listaCompras.appendChild(mensajeConPrecio);

    if (nStock <= 0) {
        mensajeConStock.innerHTML = `<p>No realizó ninguna compra</p>`;
        mensajeConPrecio.innerHTML = `<p></p>`
    }
    console.log(Mercado)
    Toastify({
        text: "¡Gracias por tu compra!",
        duration: 3000,
        gravity: 'bottom',
        style: {
            background: "linear-gradient(#BF913B,#D9A648)"
        }
    }).showToast();
})
/***********************************************BOTON LIMPIAR CARRITO**********************************************/
let limpioCarrito = document.getElementById("limpiarCarrito");
limpioCarrito.addEventListener("click", () => {
    document.getElementById("mensajeStock").remove();
    document.getElementById("mensajePrecio").remove();
    Mercado.forEach(producto => {
        producto.reseteoStock();
    });
    console.clear();
    console.log(Mercado);
    for (const producto of Mercado) {
        guardarLocal(producto.nombre, JSON.stringify(producto))
    }
})

/**********************************************OTROS botones*********************************************************/

let botonMostrar = document.getElementById("mostrar")
botonMostrar.addEventListener("click", () => {
    let muestrate = document.getElementById("lista1")
    muestrate.setAttribute("style", "display: contents")
})

let botonOcultar = document.getElementById("ocultar")
botonOcultar.addEventListener("click", () => {
    let ocultate = document.getElementById("lista1")
    ocultate.setAttribute("style", "display: none")
}
)












