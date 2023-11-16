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

