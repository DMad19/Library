let myLibrary = [];
const container = document.querySelector('.container')
const addbtn = document.querySelector('.add')
const delbtns = document.querySelectorAll('.delbtn')
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.isRead = isRead
    }
}
function addBookToLibrary(book) {
    myLibrary.push(book)
}
function display(){
    container.textContent = ''
    myLibrary.forEach(book => {
        const contdiv = document.createElement('div') 
        const titlediv = document.createElement('div')
        titlediv.textContent = `${book.title}`
        const authordiv = document.createElement('div')
        authordiv.textContent = `${book.author}`
        const pagesdiv = document.createElement('div')
        pagesdiv.textContent = `${book.pages}`
        const isReaddiv = document.createElement('div')
        isReaddiv.textContent = `${book.isRead}`
        const readstatus = document.createElement('button')
        readstatus.textContent = 'change status'
        readstatus.setAttribute('data-attribute',myLibrary.length-1)
        const del = document.createElement('button')
        del.textContent = 'DELETE'
        del.classList = 'delbtn'
        del.setAttribute('data-attribute',myLibrary.length-1)
        container.appendChild(contdiv)
        contdiv.appendChild(titlediv)
        contdiv.appendChild(authordiv)
        contdiv.appendChild(pagesdiv)
        contdiv.appendChild(isReaddiv)
        contdiv.appendChild(readstatus)
        contdiv.appendChild(del)
        readstatus.addEventListener('click',()=>{
            if(isReaddiv.textContent == 'read'){
                isReaddiv.textContent = 'not read'
            }
            else{
                isReaddiv.textContent = 'read'
            }
        })
        del.addEventListener('click',()=>{
            myLibrary.splice(del.getAttribute('data-attribute'),1)
            display()
        })
    });
}
addbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let newbook = new Book()
    newbook.title = document.querySelector('#title').value
    newbook.author = document.querySelector('#author').value
    newbook.pages = document.querySelector('#pages').value
    newbook.isRead = document.querySelector('#isRead').value
    addBookToLibrary(newbook)
    display()
}) 
