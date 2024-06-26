window.onload = function() {
    enviarBtn.onclick = function() {
        var cantidadEstudiantes = parseInt(cantidadEstudiantesInput.value);

        // Limpiar cualquier contenido previo
        notasContainer.innerHTML = '';
        resultadosDiv.innerHTML = '';

        // Verificar si la cantidad ingresada es un número válido
        if (isNaN(cantidadEstudiantes) || cantidadEstudiantes <= 0) {
            swal("Por favor, ingrese un número válido mayor que cero.");
        } else {
            // Crear campos de entrada para los nombres y las notas
            for (var i = 0; i < cantidadEstudiantes; i++) {
                var notaDiv = document.createElement("div");
                notaDiv.className = "form-group row";
                notaDiv.innerHTML = `
                    <div class="col-md-6">
                        <label for="nombre${i}">Nombre del estudiante ${i + 1}</label>
                        <input type="text" class="form-control nombre" id="nombre${i}" required>
                    </div>
                    <div class="col-md-6">
                        <label for="nota${i}">Nota</label>
                        <input type="number" min="0" max="100" class="form-control nota" id="nota${i}" required>
                    </div>
                `;
                notasContainer.appendChild(notaDiv);
            }

            // Agregar botón para calcular resultados
            var calcularBtn = document.createElement("button");
            calcularBtn.className = "btn btn-success btn-block mt-3";
            calcularBtn.textContent = "Calcular Resultados";
            notasContainer.appendChild(calcularBtn);

            calcularBtn.onclick = function() {
                // Obtener todas las notas y nombres ingresados
                var notasInputs = document.getElementsByClassName("nota");
                var nombresInputs = document.getElementsByClassName("nombre");
                var estudiantes = [];

                for (var i = 0; i < notasInputs.length; i++) {
                    var nombre = nombresInputs[i].value;
                    var nota = parseFloat(notasInputs[i].value);

                    if (!nombre) {
                        swal("Por favor, ingrese un nombre para el estudiante " + (i + 1));
                        return;
                    }

                    if (isNaN(nota) || nota < 0 || nota > 100) {
                        swal("Por favor, ingrese una nota válida entre 0 y 100 para el estudiante " + (i + 1));
                        return;
                    }

                    estudiantes.push({ nombre: nombre, nota: nota });
                }

                // Procesar las notas
                var calificacionMasAlta = Math.max(...estudiantes.map(e => e.nota));
                var calificacionMasBaja = Math.min(...estudiantes.map(e => e.nota));
                var aprobados = estudiantes.filter(e => e.nota >= 60).length;
                var reprobados = cantidadEstudiantes - aprobados;
                var sumaNotas = estudiantes.reduce((sum, e) => sum + e.nota, 0);
                var promedio = sumaNotas / cantidadEstudiantes;

                // Mostrar nota de cada estudiante
                estudiantes.forEach(est => {
                    var estado = est.nota >= 60 ? "Aprobado" : "Reprobado";
                    var estudianteDiv = document.createElement("div");
                    estudianteDiv.className = "row";
                    estudianteDiv.innerHTML = `
                        <div class="col-md-4">
                            <p>${est.nombre}</p>
                        </div>
                        <div class="col-md-4">
                            <p>${est.nota}</p>
                        </div>
                        <div class="col-md-4">
                            <p>${estado}</p>
                        </div>
                    `;
                    resultadosDiv.appendChild(estudianteDiv);
                });
            };
        }
    };
};