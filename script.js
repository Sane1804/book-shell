const SUBMIT = document.querySelector("#submit");
const FORM = document.querySelector(".form")
const BOOKS_CONTAINER = document.querySelector(".books-container");

let myLibrary = [{title: "The happy death", author: "Sane", pages: 250, read: true}];


const createBookCard = () => {

}

const displayBooks = (books) => {
    BOOKS_CONTAINER.innerHTML = "";
    let library = books;
    for(let i = 0; i < library.length; i++){
        let card = document.createElement("div");
        card.className = "book-card"
        let title = document.createElement("h3");
        let author = document.createElement("p");
        let pages = document.createElement("p");
        let read = document.createElement("p");    
        for(let key in library[i]){
            
            if (key == "title"){
                let textContent = document.createTextNode(`${library[i][key]}`);
                title.appendChild(textContent)
            } else if (key == "author") {
                let textContent = document.createTextNode(`${library[i][key]}`)
                author.appendChild(textContent);
            } else if (key === "pages"){
                let textContent = document.createTextNode(`${library[i][key]}`)
                pages.appendChild(textContent);
            } else {
                let textContent = document.createTextNode(`${library[i][key]}`)
                read.appendChild(textContent);
            }

        }
        card.append(title, author, pages, read);
        BOOKS_CONTAINER.appendChild(card);
        console.log(card)
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
       if (FORM.elements[i].type === "checkbox"){
        if (FORM.elements[i].checked){
            FORM.elements[i].value = true;
        } else {
            FORM.elements[i].value = false;
        }
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