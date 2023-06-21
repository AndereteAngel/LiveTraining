

let profesionales = [
    { nombre: "Angel", categoria: "D", zona: "Liniers", actividad: "Activo", TipoDeEntrenamiento: "futfuncional", dias: "L y Mi", turno: "Mañana" },
    { nombre: "Macarena", categoria: "B", zona: "Liniers", actividad: "Activo", TipoDeEntrenamiento: "funcional", dias: "Ma y J", turno: "Mañana" },
    { nombre: "Natalia", categoria: "C", zona: "Liniers", actividad: "Activo", TipoDeEntrenamiento: "Yoga", dias: "L y Vi", turno: "Tarde" },
    { nombre: "Enzo", categoria: "A", zona: "Liniers", actividad: "Activo", TipoDeEntrenamiento: "General", dias: "Ma y Vi", turno: "Noche" },
    { nombre: "Gabriel", categoria: "C", zona: "Liniers", actividad: "Activo", TipoDeEntrenamiento: "Boxeo", dias: "L y Mi", turno: "Noche" },
]
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