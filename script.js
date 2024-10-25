const SUBMIT = document.querySelector("#submit");
const FORM = document.querySelector(".form")

let myLibrary = [{title: "The happy death", author: "Sane", pages: 250, read: true}];


const createBookCard = () => {

}

const displayBooks = (books) => {
    let library = books;
    for(let i = 0; i < library.length; i++){
        for(let key in library[i]){
            console.log(library[i][key])
        }
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