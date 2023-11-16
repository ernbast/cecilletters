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
            resultItem.innerText = `${id.trim()}: ${record}`;
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
    const records = {
        "1": "Your sexy body has me drooling - Tu cuerpo sexy me tiene babeando",
        "2": "I share with you unselfishly - Comparto contigo desinteresadament",
        "3": "I acknowledge my mistakes with you - Reconozco mis errores contigo",
        "4": "Life is a gift, and you are the most beautiful thing in it. - La vida es un regalo, y tú eres lo más lindo en él",
        "5": "I have fantasies about what I want to do with you - Tengo fantasías acerca de lo que quiero hacer contigo",
        "6": "I know in my heart that we'll be together again - Yo sé en mi corazón que volveremos a estar juntos de nuevo",
        "7": "I thought I would surprise you with a quote - He pensado en sorprenderte con una cita",
        "8": "I can't understand why I still feel a connection with you. - No puedo entender porque aún me siento en conexión contigo",
        "9": "I ran away from you because I felt overwhelmed - Hui de ti porque me sentí abrumada",
        "10": "I want to commit to you when I feel ready for you. - Me quiero comprometer contigo cuando me sienta lista/o para ti",
        "11": "I need your time and commitment - Necesito tu tiempo y compromiso",
        "12": "You need to let go so I can grow up - Necesitas soltarme para que yo pueda crecer",
        "13": "Give me a couple of days please - Dame un par de días por favor",
        "14": "I have acted very childish and I don't know how to approach it now. - He actuado muy infantil y no sé cómo acercarme ahora",
        "15": "I am letting go of everything that no longer serves me - Estoy soltando todo lo que ya no me sirve",
        "16": "I keep hoping this will work out between us - Sigo esperando que esto funcione entre nosotros",


    };

    return records[id] || null;
}
