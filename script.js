let item = document.querySelector('#item');
let button = document.querySelector('button');
let ul = document.querySelector('ul');

button.onclick = function() {
    let newItem = item.value;
    item.value = '';
    let li = document.createElement('li');
    let span = document.createElement('span');
    let button = document.createElement('button');
    li.appendChild(span);
    li.appendChild(button);
    span.textContent = newItem;
    button.textContent = 'Supprimer'
    ul.appendChild(li);
    button.onclick = function() { li.parentNode.removeChild(li) }
    item.focus();

}