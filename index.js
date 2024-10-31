function filterGlossary() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const glossaryList = document.getElementById('glossary');
    const terms = glossaryList.querySelectorAll('li');
    let found = false;

    // Elimina cualquier mensaje de "No se encontraron resultados" antes de comenzar
    const existingMessage = document.getElementById('noResultsMessage');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Itera sobre cada término del glosario y muestra solo aquellos que coinciden
    terms.forEach(term => {
        const word = term.textContent.toLowerCase();
        
        if (word.includes(searchTerm) && searchTerm !== "") {
            term.style.display = 'flex';
            found = true;
        } else {
            term.style.display = 'none';
        }
    });

    // Si no se encuentra ningún término, agrega el mensaje de "No se encontraron resultados"
    if (!found && searchTerm !== "") {
        const message = document.createElement('li');
        message.id = 'noResultsMessage';
        message.textContent = 'No se encontraron resultados.';
        message.style.color = '#f44336'; // Color rojo para el mensaje
        message.style.fontWeight = 'bold';
        message.style.listStyleType = 'none'; // Para evitar el punto de lista
        glossaryList.appendChild(message);
    }
}

// Agrega el evento al input para que filtre en tiempo real
document.getElementById('searchInput').addEventListener('input', filterGlossary);
