
let profesionales = [
    { nombre: "Angel", categoria: "D", zona: "Liniers", actividad: "Activo", TipoDeEntrenamiento: "futfuncional", dias: "L y Mi", turno: "Mañana" },
    { nombre: "Macarena", categoria: "B", zona: "Liniers", actividad: "Activo", TipoDeEntrenamiento: "funcional", dias: "Ma y J", turno: "Mañana" },
    { nombre: "Natalia", categoria: "C", zona: "Liniers", actividad: "Activo", TipoDeEntrenamiento: "Yoga", dias: "L y Vi", turno: "Tarde" },
    { nombre: "Enzo", categoria: "A", zona: "Liniers", actividad: "Activo", TipoDeEntrenamiento: "General", dias: "Ma y Vi", turno: "Noche" },
    { nombre: "Gabriel", categoria: "C", zona: "Liniers", actividad: "Activo", TipoDeEntrenamiento: "Boxeo", dias: "L y Mi", turno: "Noche" },
];

// Array con las credenciales válidas
const usuarios = [
    { usuario: "Angel", contraseña: "angel28" },
    { usuario: "Macarena", contraseña: "macarena26" },
    { usuario: "Bautista", contraseña: "bauti24" }
];

// Pasar de un string a un objeto con JSON
localStorage.setItem("list", JSON.stringify(profesionales));
console.log(profesionales);

let mensajeAlert = "";
const datos = []

//--------------------nombre y apellido--------------//
/*
const nombre = document.getElementById("nombreForm")
nombre.addEventListener("input", () => {
    const nombreYApellido = nombre.value
    datos.push(nombreYApellido)
    console.log(nombreYApellido)
});

//--------------------Mail---------------------------//
const mail = document.getElementById("mailForm")
mail.addEventListener("input", () => {
    const mailConfir = mail.value
    datos.push(mailConfir)
    console.log(mailConfir)
})

//--------------------celular-------------------------//
const celular = document.getElementById("telForm");
celular.addEventListener("input", () => {
    const tel = celular.value;
    const numeroFinal = tel.replace(/\D/g, '');
    datos[0] = numeroFinal;
    console.log(numeroFinal)
});


//--------------------Pofesional---------------------//
const prof = document.getElementById("profesionalForm")
prof.addEventListener("input", () => {
    const profe = prof.value
    datos.push(profe)
    console.log(profe)
})

//--------------------Plan---------------------------//
const plan = document.getElementById("seleccionPlan")
plan.addEventListener("input", () => {
    const profesor = plan.value
    datos.push(profesor)
    console.log(profesor)
})

//--------------------Boton de confimacion-----------//
const botonForm = document.getElementById("botonForm");
botonForm.addEventListener("click", () => {
    Swal.fire({
        title: '¡Buenisimo!',
        text: 'La operación se realizó con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
    });
});

*/



//---------Maps y plazas----------//

//---------Plaza Larrazabal-------//

//---------Item-------------------//

const itemns = [
    { nombre: "Clases Extras", valor: 1800 },
    { nombre: "Invitado", valor: 1000 },
    { nombre: "Clase particular", valor: 2000 },
    { nombre: "Fin de semana", valor: 2000 },
    { nombre: "Doble turno", valor: 3000 },
    { nombre: "Acuaticas", valor: 2500 },
    { nombre: "Para niños/as", valor: 1900 },
    { nombre: "Plan nutricional", valor: 5000 }
];

const tarjetasItem = document.getElementsByClassName("tarjetasItem");
const carrito = [];

// Recorremos la colección de elementos y agregamos el evento click a cada uno
for (let i = 0; i < tarjetasItem.length; i++) {
    tarjetasItem[i].addEventListener("click", () => {
        const itemSeleccionado = itemns[i];
        carrito.push(itemSeleccionado);
        console.log("Ítem seleccionado:", itemSeleccionado.nombre);
        console.log("Carrito:", carrito);

        actualizarCarritoInterfaz(); // Actualizar la interfaz del carrito
    });
}

function actualizarCarritoInterfaz() {
    const carritoList = document.getElementById("carrito-list");
    const totalCompraSpan = document.getElementById("total-compra");

    // Limpiamos el contenido anterior
    carritoList.innerHTML = "";

    // Recorremos el carrito y creamos un <li> para cada ítem
    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.valor}`;

        agregarBotonEliminar(li, index); // Agregar botón "Eliminar" para cada ítem
        carritoList.appendChild(li);
    });

    // Actualizamos el total de compra
    totalCompraSpan.textContent = calcularTotalCompra();
}

function agregarBotonEliminar(li, itemIndex) {
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
        eliminarItemCarrito(itemIndex);
    });
    li.appendChild(btnEliminar);
}

function eliminarItemCarrito(itemIndex) {
    carrito.splice(itemIndex, 1);
    actualizarCarritoInterfaz();
}

function calcularTotalCompra() {
    let total = 0;
    carrito.forEach((item) => {
        total += item.valor;
    });
    return total;
}


document.addEventListener('DOMContentLoaded', () => {
    const confirmacion = document.getElementById("confirm");
    confirmacion.addEventListener("click", () => {

        Swal.fire({
            title: 'Confirmar compra',
            text: '¿Deseas confirmar tu compra?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                realizarCompra();
            } else {
                console.log("Compra cancelada.");
            }
        });
    });

    function realizarCompra() {
        Swal.fire({
            title: '¡Compra realizada!',
            text: '¡Gracias por tu compra!',
            icon: 'success',
        }).then(() => {

            carrito.length = 0;

            const carritoList = document.getElementById("carrito-list");
            carritoList.innerHTML = "";

            actualizarCarritoInterfaz();
        });
    }
});


    const apiKey = 'AIzaSyAix9UDfmAPvMdEqPCnk6GhMORD1PdmZbE';
    const apiUrl = 'https://livetraining.netlify.app';

    fetch(`${apiUrl}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
        })
        .catch(error => {
        });
























