
class Bookshelf {
    constructor() {
        // Constructor function for the Bookshelf class
        this.books = [];
        this.addBookForm = document.getElementById("addBookForm");
        this.addBookForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addBook();
        });
    }

    addBook() {
        // Method to add a new book to the bookshelf
        const title = this.addBookForm.title.value;
        const author = this.addBookForm.author.value;
        const language = this.addBookForm.language.value;
        const subject = this.addBookForm.subject.value;

        // Check if the book already exists in the bookshelf
        const bookExists = this.books.some(
            (book) =>
                book.title === title &&
                book.author === author &&
                book.language === language &&
                book.subject === subject
        );

        if (bookExists) {
            alert("This book already exists in the bookshelf.");
        } else {
            const newBook = new Book(author, language, subject, title);
            this.books.unshift(newBook);
            this.render();
        }
    }

    seed(bookData) {
        // Method to add seed data to the bookshelf
        // Takes in an array of book data, creates new Book objects for each item in the array, and adds them to the books array.
        for (const book of bookData) {
            const newBook = new Book(
                book.author,
                book.language,
                book.subject,
                book.title
            );
            this.books.push(newBook);
        }
        this.render();
    }

    render() {
        // Method to render the bookshelf
        // This method creates a new unordered list to display the books, renders each book in the books array, and appends it to the bookshelf wrapper element
        const bookShelfWrapper = document.getElementById("bookContainer");
        bookShelfWrapper.innerHTML = ""; // Clear the previous content
        const bookList = document.createElement("ul");

        const books = this.books;
        for (const book of books) {
            const bookListItem = book.render();
            bookList.append(bookListItem);
        }
        bookShelfWrapper.append(bookList);
    }
}
