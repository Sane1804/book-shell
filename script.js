const SUBMIT = document.querySelector("#submit");
const FORM = document.querySelector(".form")
const BOOKS_CONTAINER = document.querySelector(".books-container");


let myLibrary = [];


const displayBooks = (books) => {
    BOOKS_CONTAINER.innerHTML = "";
    let library = books;
    for(let i = 0; i < library.length; i++){
        // Create card and its children
        let card = document.createElement("div");
        let title = document.createElement("h3");
        let author = document.createElement("p");
        let pages = document.createElement("p");
        let read = document.createElement("p");
        
        read.addEventListener("click", (e) => {
            let target = e.target;
            if (target.textContent === "read") {
                target.textContent = "not read";
            } else {
                target.textContent = "read";
            }
        })
        read.className = "read-book";
        card.className = "book-card";

        //Assign text content to each children's card elem
        for(let key in library[i]){
            
            if (key == "title"){
                let textContent = document.createTextNode(`${library[i][key]}`);
                title.appendChild(textContent)
            } else if (key == "author") {
                let textContent = document.createTextNode(`by ${library[i][key]}`)
                author.appendChild(textContent);
            } else if (key === "pages"){
                let textContent = document.createTextNode(`pages: ${library[i][key]}`)
                pages.appendChild(textContent);
            } else {
                let text = library[i][key] == "true" ? "read" : "not read";
                let textContent = document.createTextNode(text)
                read.appendChild(textContent);
            }
        }
        // Appending children to card
        card.append(title, author, pages, read);
        //Displaying card
        BOOKS_CONTAINER.appendChild(card);
    }
}
displayBooks(myLibrary)


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addBookToLibrary = () => {
    let arr = [];
    for (let i = 0; i < FORM.elements.length-1; i++){
        //Making checkbox value to be true/false base on if checked or not
        if (FORM.elements[i].type == "checkbox"){
            FORM.elements[i].value = FORM.elements[i].checked;
        }
        arr.push(FORM.elements[i].value)
    }

    let newBook = new Book(...arr);
    myLibrary.push(newBook);
}


SUBMIT.addEventListener("click", (e) => {
    e.preventDefault()
    addBookToLibrary()
    displayBooks(myLibrary)
})