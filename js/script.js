document.addEventListener('DOMContentLoaded', () => {
    populateSelector();
});

const data = {
    'ID1': 'Registro asociado a ID1',
    'ID2': 'Registro asociado a ID2',
    // Agrega más registros según sea necesario
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
    const selectedIDs = Array.from(document.getElementById('idSelector').selectedOptions).map(opt => opt.value);
    const results = document.getElementById('results');
    results.innerHTML = '';

    selectedIDs.forEach(id => {
        let para = document.createElement('p');
        para.textContent = `${id}: ${data[id]}`;
        results.appendChild(para);
    });
}
