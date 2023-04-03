class Book{
    constructor(author, language, subject, title){
    this.author = author
    this.language = language
    this.subject = subject
    this.title = title
    }
    
    render() {
        const bookWrapper = document.createElement("li")

        const h1 = document.createElement("h1")
        h1.innerHTML = this.title

        const h2 = document.createElement("h2")
        h2.innerHTML = `Author: ${this.author}`

        const h3 = document.createElement("h3")
        h3.innerHTML = `Subject: ${this.subject}`

        bookWrapper.append(h1, h2, h3)

        return bookWrapper
    }
}