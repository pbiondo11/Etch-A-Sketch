const gridContainer = document.getElementById('grid-container');
const button = document.querySelector('button');


function createGrid(size) {
  
  gridContainer.innerHTML = '';

  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    gridContainer.appendChild(row);

    for (let j = 0; j < size; j++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
    
      gridItem.dataset.opacity = 0;
      row.appendChild(gridItem);

     
      gridItem.addEventListener('mouseover', () => {
        setBgColor(gridItem);
      });
    }
  }
}


function setBgColor(gridItem) {

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  gridItem.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;


  let opacity = parseFloat(gridItem.dataset.opacity);


  opacity = Math.min(opacity + 0.1, 1);

  
  gridItem.style.opacity = opacity;
  gridItem.dataset.opacity = opacity;
}


createGrid(16);


button.addEventListener('click', () => {
  let size = prompt("Enter grid size:");

  if (size > 100) {
    alert("Enter a value that is less than or equal to 100");
    size = prompt("Enter grid size:");
  }


  createGrid(parseInt(size));
});
