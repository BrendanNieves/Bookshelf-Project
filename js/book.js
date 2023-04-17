
class Book {
  constructor(author, language, subject, title) {
    // Constructor function for the Book class. 
    // This function takes in four parameters - author, language, subject, and title - and initializes instance variables.
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    this.comments = []; // An empty array to store comments for the book
  }

  // Method to add a new comment to the book
  addComment(comment) {
    this.comments.push(comment);
  }

  // Method to remove a comment from the book
  removeComment(index) {
    this.comments.splice(index, 1);
  }

  // Method to render the book
  render() {
    const bookWrapper = document.createElement("li");
    bookWrapper.classList.add("book-item");

    const h1 = document.createElement("h1");
    h1.innerHTML = this.title;

    const h2 = document.createElement("h2");
    h2.innerHTML = `Author: ${this.author}`;

    const h3 = document.createElement("h3");
    h3.innerHTML = `Subject: ${this.subject}`;

    const commentList = document.createElement("ul");
    commentList.classList.add("comment-list");

    const commentInput = document.createElement("div");
    commentInput.classList.add("comment-input");

    const commentLabel = document.createElement("label");
    commentLabel.setAttribute("for", "comment");
    commentLabel.innerText = "Comment: ";

    const commentField = document.createElement("input");
    commentField.setAttribute("type", "text");
    commentField.setAttribute("id", "comment");
    commentField.setAttribute("name", "comment");

    const commentButton = document.createElement("button");
    commentButton.innerText = "Add Comment";

    // Event listener to validate comment field input
    commentField.addEventListener("input", () => {
      const comment = commentField.value.trim();
      if(comment.length === 0 || comment.length >= 280) {
        commentButton.disabled = true
        alert("Comments must be less than 280 characters")
      } else {
        commentButton.disabled = false
      }
    });

    // Event listener to add a new comment
    commentButton.addEventListener("click", () => {
      const comment = commentField.value.trim();
      if (comment !== "") {
        this.addComment(comment);
        commentField.value = "";
        this.renderComments(commentList);
      }
    });

    const bookInfo = document.createElement("div");
    bookInfo.classList.add("book-info");

    bookInfo.append(h2, h3);

    commentInput.append(commentLabel, commentField, commentButton);

    this.renderComments(commentList);

    bookWrapper.append(h1, bookInfo, commentList, commentInput);

    return bookWrapper;
  }

  // Method to render comments for the book
  renderComments(commentList) {
    commentList.innerHTML = "";

    this.comments.forEach((comment, index) => {
      const commentItem = document.createElement("li");
      commentItem.classList.add("comment-item");

      const commentContent = document.createElement("span");
      commentContent.innerText = comment;

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", () => {
        this.removeComment(index);
        this.renderComments(commentList);
      });

      commentItem.append(commentContent, deleteButton);

      commentList.append(commentItem);
    });
  }
}
