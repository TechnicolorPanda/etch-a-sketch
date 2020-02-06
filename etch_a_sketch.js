grid(16);

function grid(v) {
  const container = document.querySelector("#grid-container");
  const content = document.createElement("div");
  content.classList.add("box");
  container.appendChild(content);
  for(var i = 0; i < v; i++){ 
    var row = document.createElement("div"); 
    row.className = "row"; 
    for(var j = 1; j <=v; j++){ 
      var cell = document.createElement("div"); 
      cell.className = "gridsquare"; 
      //cellNumber = (i * v) + j;
      //cell.innerText = cellNumber;
      cell.addEventListener("mouseover", changeColor);
      function changeColor(e) {
        const thisCell = e.target;
        color = randomColor();
        thisCell.style.backgroundColor = color;
        thisCell.style.borderColor = color;
      }
      row.appendChild(cell); 
    }
      content.appendChild(row); 
  }
}

function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
return bgColor;
}

function reset() {
  var cellNumber = prompt ("Select grid size", 16);
    if (cellNumber >=10 && cellNumber <= 100) {
      container.innerHTML = "";
      grid(cellNumber);
  } else {
    alert("Select a number between 10 and 100");
  }
  }
