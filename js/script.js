function searchRecords() {
    const searchInput = document.getElementById("searchInput");
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Limpiar resultados anteriores

    // Obtener IDs ingresados y dividirlos por comas
    const ids = searchInput.value.split(",");

    for (const id of ids) {
        // Simular la búsqueda de registros por ID (puedes reemplazar esto con tus propios datos)
        const record = findRecordById(id.trim()); // Aquí deberías implementar tu lógica de búsqueda

        if (record) {
            // Si se encuentra el registro, mostrarlo
            const resultItem = document.createElement("div");
            resultItem.innerText = `ID: ${id.trim()}, Registro: ${record}`;
            resultsDiv.appendChild(resultItem);
        } else {
            // Si no se encuentra el registro, mostrar un mensaje de error
            const errorItem = document.createElement("div");
            errorItem.innerText = `ID: ${id.trim()} no encontrado`;
            errorItem.classList.add("error");
            resultsDiv.appendChild(errorItem);
        }
    }
}

// Función de ejemplo para buscar registros por ID (debes implementar la tuya)
function findRecordById(id) {
    // Aquí puedes agregar tu lógica de búsqueda de registros
    // Por ejemplo, podrías tener un objeto o array de registros y buscar por ID en ese objeto/array.
    // Retornar el registro si se encuentra, o null si no se encuentra.
    // En este ejemplo, estamos usando una función de búsqueda simulada.
    const records = {
        "1": "Registro 1",
        "2": "Registro 2",
        "3": "Registro 3",
    };

    return records[id] || null;
}
