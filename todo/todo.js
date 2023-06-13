// const item = document.getElementById('items') 
// const temp = document.getElementById('temp')
// const addB = document.getElementById('add')

// let itemm = getItems();
// function getItems(){
//     const value = localStorage.getItem('item') || '[]';
//     return JSON.parse(value);
// }

// function setItems(itemm){
//     const itemj = JSON.stringify(itemm)
// }
 
// console.log(itemm)



let lis = document.getElementById('list');
function tod(){
    let valu = document.getElementById('t-do').value;
    let li = document.createElement('li');
    let node =document.createTextNode(valu);
    li.appendChild(node)
    lis.appendChild(li);
}
// lis.addEventListener('click', function(ev){
//     if(ev.target.tagName ==="li"){
//         ev.target.classList.toggle("checked")
//     }
// }, false)