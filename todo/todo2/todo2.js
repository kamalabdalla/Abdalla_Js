const input = document.getElementById('item');
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const list = document.getElementById('list');

let isWhiteBackground = true; 

function addItem() {
  const itemText = input.value.trim();
  
  if (itemText !== '') {
    const words = itemText.split(' ');
    const li = document.createElement('li');
    
    li.style.backgroundColor = isWhiteBackground ? 'white' : 'yellow';
    isWhiteBackground = !isWhiteBackground; 
    
    words.forEach(word => {
      const textNode = document.createTextNode(word);
      li.appendChild(textNode);
    });
    
    list.appendChild(li);
  }
  
  input.value = '';
}

function removeItem() {
  const itemText = input.value.trim().toLowerCase();
  
  if (itemText !== '') {
    const items = list.getElementsByTagName('li');
    
    for (let i = 0; i < items.length; i++) {
      const text = items[i].textContent.toLowerCase();
      
      if (text === itemText) {
        list.removeChild(items[i]);
        break; 
      }
    }
  }
  
  input.value = '';
}

addButton.addEventListener('click', addItem);
removeButton.addEventListener('click', removeItem);
