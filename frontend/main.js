const base_api = 'http://localhost:5001/api/livros/';
const table = document.querySelector('table');
const messageField = document.querySelector('.message');
const form = document.querySelector('form');

const getBooks = async () => {
    const books = await (await fetch(base_api)).json();
    for (const book of books) {
        if (document.querySelector(`#ID${book._id}`)) continue;
        createRow(book);
    }
};

window.addEventListener('load', (e) => {
    getBooks();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm(form);
});

const editBook = async (id) => {
    const row = document.getElementById(id);
    const fields = [...row.children].filter(
        (row) => !row.querySelector('button')
    );
    const editButton = row.querySelector('.edit-button');
    if (editButton.textContent === 'Salvar') {
        const newBook = {
            title: fields[0].firstChild.value,
            author: fields[1].firstChild.value,
            genre: fields[2].firstChild.value,
        };
        const response = await fetch(base_api + id.slice(2), {
            method: 'PUT',
            headers: { 'content-type': 'Application/JSON' },
            body: JSON.stringify(newBook),
        });
        const data = await response.json();
        updateFields(fields, false);
    } else {
        updateFields(fields, true);
    }
    editButton.textContent =
        editButton.textContent === 'Salvar' ? 'Editar' : 'Salvar';
};

const removeBook = async (id) => {
    const row = document.getElementById(id);
    row.parentElement.removeChild(row);
    await fetch(base_api + id.slice(2), {
        method: 'DELETE',
    });
};
