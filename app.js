const wmf = document.querySelector('#book-list li:nth-child(2).name');
// console.log(wmf)

var books = document.querySelector('#book-list li.name');
// console.log(books)
var books = document.querySelectorAll('#book-list li .name');
// console.log(books);
Array.from(books).forEach(function(book){
    // console.log(book.textContent)
    // book.textContent = 'test'
    book.textContent +="(book title)";
});

const bookList = document.querySelector("#book-list");
// console.log(bookList.innerHTML)
// bookList.innerHTML = '<h2>Books and More Books.. </h2>';
// bookList.innerHTML += '<p>this is p.. </p>';

// var btns = document.querySelectorAll("#book-list .delete");

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li)
//     })
// })

const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
}) 

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
    
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span')
    
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    bookName.classList.add('name')
    deleteBtn.classList.add('delete')

    li.appendChild(bookName)
    li.appendChild(deleteBtn)
    list.appendChild(li)
})
