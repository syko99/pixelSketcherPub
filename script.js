
const DEFAULTSIZE = 16;
const DEFAULTCOLOR = "black";

let activeSize = DEFAULTSIZE;
let activeColor = DEFAULTCOLOR;

let colorPicker = document.querySelector("#colorPicker");
let clearBtn = document.querySelector("#clearBtn");
let sketchGrid = document.querySelector(".sketch__grid");
let gridSize = document.querySelector("#gridSize");

let mousedown = false;
document.body.onmousedown = ()=> (mousedown = true);
document.body.onmouseup = ()=> (mousedown = false);

colorPicker.addEventListener("input", ()=>{
    console.log(e);
})

clearBtn.addEventListener("click", ()=>{
    createGrid(activeSize)
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
        panel.addEventListener("mousedown", color)
        sketchGrid.appendChild(panel);
    }
}

function color(e){
    if (e.type === "mouseover" && mousedown){
        e.target.style.backgroundColor = "black";
    }
    if(e.type === "mousedown"){
        e.target.style.backgroundColor = "black";
    }else{
        return;
    }
}

createGrid(DEFAULTSIZE);


