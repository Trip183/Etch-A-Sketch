
const container = document.querySelector(".container");

const button = document.createElement("button");
button.classList.add("button");
button.textContent = "Number";
container.appendChild(button);

// Create initial grid container
const grid = document.createElement("div");
grid.classList.add("grid");
container.appendChild(grid);

function loadGrid(size){
    grid.innerHTML = "";
    const squareSize = 640 / size;
    
    for (let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        // Set the size dynamically
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        grid.appendChild(square);
    }
}

loadGrid(16);


// Popup function to get input and reload grid
function popup() {
    let answer = prompt("Enter number of squares per side (1–100):");
    let size = parseInt(answer);
  
    if (isNaN(size) || size < 1 || size > 100) {
      alert("Please enter a valid number between 1 and 100.");
      return;
    }
  
    loadGrid(size);
  }
  
  // Add event listener
  button.addEventListener("click", popup);
