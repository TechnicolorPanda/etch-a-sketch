const container = document.querySelector("#grid-container");

grid(16);
reset();
selectColor();

function grid(v) {
  const content = document.createElement("div");
  content.classList.add("box");
  container.appendChild(content);
  for(var i = 0; i < v; i++){ 
    var row = document.createElement("div"); 
    row.className = "row"; 
    for(var j = 1; j <=v; j++){ 
      var cell = document.createElement("div"); 
      cell.className = "gridsquare"; 
      cell.addEventListener("mouseover", changeColor);
      function changeColor(e) {
        const thisCell = e.target;
        color = "rgb(255,255,255)";
        thisCell.style.backgroundColor = color;
        thisCell.style.borderColor = color;
      }
      row.appendChild(cell); 
    }
      content.appendChild(row); 
  }
}

//resets grid size and draws in white when button is selected

function reset() {
  const reset = document.getElementById("reset");
  reset.addEventListener("click", resetGrid);

  function resetGrid() {
    container.innerHTML = "";
    var cellNumber = prompt ("Select grid size", 16);
    if (cellNumber >=10 && cellNumber <= 100) {
      grid(cellNumber);
      console.log("cellNumber");
    } else {
      alert("Select a number between 10 and 100");
    }
  }
}

//draws new grid and changes colors to random colors

function randomGrid(v) {
  const content = document.createElement("div");
  content.classList.add("box");
  container.appendChild(content);
  for(var i = 0; i < v; i++){ 
    var row = document.createElement("div"); 
    row.className = "row"; 
    for(var j = 1; j <=v; j++){ 
      var cell = document.createElement("div"); 
      cell.className = "gridsquare"; 
      cell.addEventListener("mouseover", changeColor);
      function changeColor(e) {
        const thisCell = e.target;
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var color = "rgb(" + x + "," + y + "," + z + ")";
        thisCell.style.backgroundColor = color;
        thisCell.style.borderColor = color;
      }
      row.appendChild(cell); 
    }
      content.appendChild(row); 
  }
}

//resets random color grid when button is selected

function selectColor() {
const selectColor = document.getElementById("rdmColor");
selectColor.addEventListener("click", resetRandom);

  function resetRandom() {
    container.innerHTML = "";
    var cellNumber = prompt ("Select grid size", 16);
    if (cellNumber >=10 && cellNumber <= 100) {
      randomGrid(cellNumber);
      console.log("random");
    } else {
      alert("Select a number between 10 and 100");
    }
  }
}
