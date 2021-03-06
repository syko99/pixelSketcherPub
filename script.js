
const DEFAULTSIZE = 16;
const DEFAULTCOLOR = "#000000";

let activeSize = DEFAULTSIZE;
let activeColor = DEFAULTCOLOR;
let selectedColor = DEFAULTCOLOR;

let colorPicker = document.querySelector("#colorPicker");
let penBtn = document.querySelector("#penBtn");
let eraserBtn = document.querySelector("#eraserBtn");
let clearBtn = document.querySelector("#clearBtn");
let sketchGrid = document.querySelector(".sketch__grid");
let gridSize = document.querySelector("#gridSize");

let mousedown = false;
document.body.onmousedown = ()=> (mousedown = true);
document.body.onmouseup = ()=> (mousedown = false);

colorPicker.addEventListener("input", (e)=>{
    selectedColor = e.target.value;
    activeColor = e.target.value;
});
penBtn.addEventListener("click", (e)=>{
    activeColor = selectedColor; 
    activatePen(penBtn);
});
eraserBtn.addEventListener("click", ()=>{
    activeColor = "transparent";
    activatePen(eraserBtn);
});
clearBtn.addEventListener("click", ()=>{
    activeColor = selectedColor;
    if (confirm("Are you sure you would like to clear the board?")){
        createGrid(activeSize);
    };
});

gridSize.onchange = (e) => {
    activeSize = e.target.value;
    gridSize.labels[0].textContent = `Grid Size: ${activeSize} x ${activeSize}`;
    createGrid(activeSize);
};

function createGrid(size) {
    sketchGrid.textContent = "";
    sketchGrid.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
    for (let i = 0; i < size*size; i++){
        let panel = document.createElement("div");
        panel.classList.add("panels");
        panel.addEventListener("mouseover", color);
        panel.addEventListener("mousedown", color);
        sketchGrid.appendChild(panel);
    }
    activatePen(penBtn);
}

function color(e){
    if (e.type === "mouseover" && mousedown){
        e.target.style.backgroundColor = activeColor;
    }
    if(e.type === "mousedown"){
        e.target.style.backgroundColor = activeColor;
    }else{
        return;
    }
}

function activatePen(btn){
    document.querySelectorAll(".options__button").forEach(button => {
        button.style.backgroundColor = "transparent";
        button.style.color = "whitesmoke";
    });
    btn.style.backgroundColor = "whitesmoke";
    btn.style.color = "black";
}


createGrid(DEFAULTSIZE);


