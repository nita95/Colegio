
// Solicitar al usuario ingresar la cantidad de estudiantes
var cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes:"));

// Verificar si la cantidad ingresada es un número válido
if (isNaN(cantidadEstudiantes) || cantidadEstudiantes <= 0) {
   alert("Por favor, ingrese un número válido mayor que cero.");
    
} else {
    // Creo un array para almacenar las notas de los estudiantes
    var calificacion = [];
    var calificacionMasAlta = -1;
    var calificacionMasBaja = 101;
    var aprobados = 0;
    var reprobados = 0;
    var sumaNotas = 0;

    // para poder que me pida que ingrese nota a cada estudiante 
    for (var i = 0; i < cantidadEstudiantes; i++) {
        var nota = parseFloat(prompt("Ingrese la nota del estudiante " + (i + 1) + ":"));
        
        // Verificar si la nota ingresada es un número válido
        if (isNaN(nota) || nota < 10 || nota > 100) {
            alert("Por favor, ingrese una nota válida entre 10 y 100.");
            i--; // Disminuir i para repetir la solicitud de nota para el mismo estudiante
        } else {
             // calificación más alta y más baja
             if (nota > calificacionMasAlta) {
                calificacionMasAlta = nota;
            }
            if (nota < calificacionMasBaja) {
                calificacionMasBaja = nota;
            }
            //determinar cuantos aprobaron o reprobaron
            if (nota >= 60) {
                aprobados++;
            } else {
                reprobados++;
            }
            sumaNotas += nota;
        }
    }
    // Promedio

    var promedio = sumaNotas / cantidadEstudiantes;

    //mostrar resultados en pantalla 
        document.write('la calificación mas alta es: ',calificacionMasAlta);
        document.write('<br>');
        document.write('la calificación mas baja es: ',calificacionMasBaja);
        document.write('<br>');
        document.write('Aprobados : ',aprobados);
        document.write('<br>');
        document.write('Reprobados: ',reprobados);
        document.write('<br>');
        document.write('Promedio de notas es: ',promedio.toFixed(2));
        document.write('<br>');
        document.write('Promedio de notas es: ',promedio.toFixed(2))
    } 



