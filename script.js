//your JS code here. If required.
// Get form and book list
const form = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

// Function to add a book to the list
function addBook(title, author, isbn) {
    // Create new row
    const row = document.createElement('tr');
    // Insert columns
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;
    // Append row to book list
    bookList.appendChild(row);
}

// Function to remove a book from the list
function removeBook(target) {
    if (target.classList.contains('delete')) {
        target.parentElement.parentElement.remove();
    }
}

// Event: Add a book
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validate input
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Add book to list
    addBook(title, author, isbn);

    // Clear form fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});

// Event: Remove a book
bookList.addEventListener('click', function(e) {
    removeBook(e.target);
});

