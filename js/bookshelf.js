class Bookshelf{
    constructor() {
        this.books = []
    }

    seed(bookData) {

        for(const book of bookData){
            const newBook = new Book(book.author, book.language, book.subject, book.title)
            this.books.push(newBook)
        }
        this.render()
    }


    render() {
        const bookShelfWrapper = document.getElementById("bookContainer")
        const bookList = document.createElement("ul")


        const books = this.books
        for (const book of books) {
            const bookListItem = book.render()
            bookList.append(bookListItem)
        }
        bookShelfWrapper.append(bookList)
    }
}