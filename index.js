

let profesionales = [
    { nombre: "Angel", categoria: "D", zona: "Liniers", actividad: "Activo", TipoDeEntrenamiento: "futfuncional", dias: "L y Mi", turno: "Mañana" },
    { nombre: "Macarena", categoria: "B", zona: "Liniers", actividad: "Activo", TipoDeEntrenamiento: "funcional", dias: "Ma y J", turno: "Mañana" },
    { nombre: "Natalia", categoria: "C", zona: "Liniers", actividad: "Activo", TipoDeEntrenamiento: "Yoga", dias: "L y Vi", turno: "Tarde" },
    { nombre: "Enzo", categoria: "A", zona: "Liniers", actividad: "Activo", TipoDeEntrenamiento: "General", dias: "Ma y Vi", turno: "Noche" },
    { nombre: "Gabriel", categoria: "C", zona: "Liniers", actividad: "Activo", TipoDeEntrenamiento: "Boxeo", dias: "L y Mi", turno: "Noche" },
]

//--------- pasar de un string a un objeto con JSON-----------//
localStorage.setItem("list", JSON.stringify(profesionales));
profesionales = JSON.parse(localStorage.getItem("list"));
console.log(profesionales);

//---------------------------------------------------------//
const nombreForm = document.getElementById("nombreForm")
const mailForm = document.getElementById("mailForm")
const celular = document.getElementById("telForm")
const botonForm = document.getElementById("botonForm")
const nombreProfesional = document.getElementById("profesionalForm")
const planSeleccionado = document.getElementById("sleccionPlan")

const participantes = [
    { nombre: "Ana" }
]
//------nombre en el local storege----------------//
nombreForm.addEventListener("input", () => {
    const valorInput = nombreForm;
    participantes.push(valorInput);
    localStorage.setItem("valorNombre", valorInput);
}); console.log(participantes)






window.addEventListener("load", () => {
    const valorGuardado = localStorage.getItem("valorNombre");
    if (valorGuardado) {
        nombreForm.value = valorGuardado;
    }
});

botonForm.addEventListener("click", () => {
    const valorInput = nombreForm.value;
    localStorage.setItem("valorNombre", valorInput);
});

//----------mail en el local storage----------//
mailForm.addEventListener("input", () => {
    const valorInput = mailForm.value;
    localStorage.setItem("valorMail", valorInput);
});

window.addEventListener("load", () => {
    const valorGuardadoMail = localStorage.getItem("valorMail");
    if (valorGuardadoMail) {
        mailForm.value = valorGuardadoMail;
    }
});

botonForm.addEventListener("click", () => {
    const valorInput = mailForm.value;
    localStorage.setItem("valorMail", valorInput);
});
//----------numero en el local storage----------//
celular.addEventListener("input", () => {
    const valorInputCelular = celular.value;
    localStorage.setItem("valorCelular", valorInputCelular);
});

window.addEventListener("load", () => {
    const valorGuardadoCelular = localStorage.getItem("valorCelular");
    if (valorGuardadoCelular) {
        celular.value = valorGuardadoCelular;
    }
});

botonForm.addEventListener("click", () => {
    const valorInputBoton = celular.value;
    localStorage.setItem("valorCelular", valorInputBoton);
});

//------------Nombre del profesional--------//
nombreProfesional.addEventListener("input", () => {
    const valorInputProf = nombreProfesional.value;
    localStorage.setItem("valorProfesional", valorInputProf);
});

window.addEventListener("load", () => {
    const valorInputProf = localStorage.getItem("valorProfesional");
    if (valorInputProf) {
        nombreProfesional.value = valorInputProf;
    }
});

botonForm.addEventListener("click", () => {
    const valorBoton = nombreProfesional.value;
    localStorage.setItem("valorProfesional", valorBoton);
});

//------------Seleccion Plan--------//
planSeleccionado.addEventListener("input", () => {
    const valorInputPlan = valorInputPlan.value;
    localStorage.setItem("valorProfesional", valorInputPlan);
});

window.addEventListener("load", () => {
    const valorInputPlan = localStorage.getItem("valorPlan");
    if (valorInputPlan) {
        planSeleccionado.value = valorInputPlan;
    }
});

botonForm.addEventListener("click", () => {
    const valorBoton = planSeleccionado.value;
    localStorage.setItem("valorPlan", valorBoton);
    alert(nombreForm.value + " Felicitaciones un cordinador se contactara con usted")
});


/*
const botonContratacionForm = document.getElementById("botonContratacion");
botonContratacionForm.addEventListener("click", () => {
    window.location.href = "fomulario.html";
});
*/

/*
profesionales.forEach((Element) => console.log(Element));
//console.log(profesionales)//imprime la lista de los elemento

const participantes = [
    { nombre: "Ana", prof: "Angel" }
]

const resultadoProfeAngel = profesionales.filter((el) => {
    return profesionales.nombre = "Angel";
})
console.log(resultadoProfeAngel)

const agregarParticipanteAlArray = () => {//Futura base de datos
    const nombre = prompt("Nombre y apellido");
    console.log(nombre);
    const prof = prompt("Marca el profe que desea contactar: Angel, Macarena, Natalia, Enzo, Gabriel o Salir");
    switch (prof) {
        case "Angel":
            alert("Nombre: Angel, Categoria: D, Zona: Liniers, Tipo De Entrenamiento: futfuncional, Dias: L y Mi, Turno: Mañana")
            break;
        case "Macarena":
            alert("Nombre: Macarena, Categoria: C, Zona: Liniers, Tipo De Entrenamiento: Boxeo, Dias: Ma y J, Turno: Tarde")
            break;
        case "Natalia":
            alert("Nombre: Natalia, Categoria: B, Zona: Liniers, Tipo De Entrenamiento: funcional, Dias: Ma y J, Turno: Tarde")
            break;
        case "Enzo":
            alert("Nombre: Enzo, Categoria: C, Zona: Liniers, Tipo De Entrenamiento: Yoga, Dias: Ma y J, Turno: Tarde")
            break;
        case "Gabriel":
            alert("Nombre: Gabriel, Categoria: A, Zona: Liniers, Tipo De Entrenamiento: General, Dias: Ma y J, Turno: Tarde")
            break;
        default: "Salir"
            alert(nombre + " Gracias por tu visita")
            break;
    }
    console.log(prof);
    participantes.push({ nombre, prof: prof });
}
agregarParticipanteAlArray();//proximamente base de datos

participantes.forEach((Element) => console.log(Element));

alert("A continuacion selecciona el plan requerido")

const planes = [
    { plan: "oro" },
    { plan: "plata" } 
]

*/


















