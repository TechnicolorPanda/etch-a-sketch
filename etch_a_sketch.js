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
        thisCell.style.backgroundColor = "white";
        console.log(cell);
      }
      row.appendChild(cell); 
    }
      content.appendChild(row); 
  }
}
