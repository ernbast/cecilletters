const data = {
    'ID1': 'Registro asociado a ID1',
    'ID2': 'Registro asociado a ID2',
    'ID3': 'Registro asociado a ID3',
    // Agrega más registros según sea necesario
};

window.onload = function() {
    populateSelector();
};

function populateSelector() {
    const selector = document.getElementById('idSelector');
    for (let id in data) {
        let option = document.createElement('option');
        option.value = id;
        option.text = id;
        selector.appendChild(option);
    }
}

function searchIDs() {
    let searchValue = document.getElementById('searchBox').value.toUpperCase();
    let results = document.getElementById('results');
    results.innerHTML = '';

    for (let id in data) {
        if (id.toUpperCase().includes(searchValue)) {
            let para = document.createElement('p');
            para.textContent = `${id}: ${data[id]}`;
            results.appendChild(para);
        }
    }
}

function searchIDs() {
    let searchValue = document.getElementById('searchBox').value.toUpperCase();
    let results = document.getElementById('results');
    results.innerHTML = '';

    let found = false;
    for (let id in data) {
        if (id.toUpperCase().includes(searchValue)) {
            let para = document.createElement('p');
            para.textContent = `${id}: ${data[id]}`;
            results.appendChild(para);
            found = true;
        }
    }

    if (!found) {
        results.innerHTML = '<p>No se encontraron resultados para su búsqueda.</p>';
    }
}


