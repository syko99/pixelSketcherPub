
const DEFAULTSIZE = 16;


let sketchGrid = document.querySelector(".sketch__grid");



let mousedown = false;
document.body.onmousedown = ()=> (mousedown = true);
document.body.onmouseup = ()=> (mousedown = false);





createGrid(DEFAULTSIZE);

function createGrid(DEFAULTSIZE) {
    sketchGrid.setAttribute("style", `grid-template-columns: repeat(${DEFAULTSIZE}, 1fr); grid-template-rows: repeat(${DEFAULTSIZE}, 1fr);`);
    for (let i = 0; i < DEFAULTSIZE*DEFAULTSIZE; i++){
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


