
const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < 16; i++) {

    const row = document.createElement('div');
    row.classList.add('row');
    gridContainer.appendChild(row);

  for (let j = 0; j < 16; j++) {
   
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    row.appendChild(gridItem);
  }
}

const button = document.querySelector('button');
button.addEventListener('click', ()=> {

let size = prompt("Enter grid size:");

if (size > 100) {
alert("Enter a value that is less than or equal to 100");
size = 0;
let size = prompt("Enter grid size:");
}

gridContainer.replaceChildren();

for (let i = 0; i < size; i++) {

    const row = document.createElement('div');
    row.classList.add('row');
    gridContainer.appendChild(row);

  for (let j = 0; j < size; j++) {
   
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    row.appendChild(gridItem);
  }
}
});