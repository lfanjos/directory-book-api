const updateFields = (fields, isEditing) => {
    fields.forEach((field, index) => {
        if (isEditing) {
            const input = document.createElement('input');
            input.type = 'text';
            input.name = ['newTitulo', 'newAutor', 'newGenre'][index];
            input.id = input.name;
            input.value = field.textContent;
            field.textContent = '';
            field.appendChild(input);
        } else {
            const newValue = field.firstChild.value;
            field.removeChild(field.firstChild);
            field.textContent = newValue;
        }
    });
};

const createButton = (text, className, onClick) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add(className);
    button.addEventListener('click', onClick);
    return button;
};

function displayMessage(message) {
    messageField.textContent = message;
}

const createRow = (book) => {
    const row = table.insertRow();
    row.id = 'ID' + book._id;
    [book.title, book.author, book.genre].forEach((text) => {
        row.insertCell().textContent = text;
    });
    row.insertCell().appendChild(
        createButton('Remover', 'delete-button', () => removeBook(row.id))
    );
    row.insertCell().appendChild(
        createButton('Editar', 'edit-button', () => editBook(row.id))
    );
};

const submitForm = async (form) => {
    const formData = new FormData(form);
    const book = {
        title: formData.get('titulo'),
        author: formData.get('autor'),
        genre: formData.get('desc'),
    };

    const response = await fetch(base_api, {
        method: 'POST',
        headers: { 'content-type': 'Application/JSON' },
        body: JSON.stringify(book),
    });
    const data = await response.json();
    form.reset();
    displayMessage(data.message);
    getBooks();
};
