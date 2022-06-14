let sketchGrid = document.querySelector(".sketch__grid");
let gridMaxWidth = 760;

function createGrid(pixels) {
    for (let i = 0; i < pixels; i++){
        for (let j = 0; j < pixels; j++){
            let panel = document.createElement("div");
            panel.classList.add("panels");
            let widthHeight = gridMaxWidth/pixels;
            panel.setAttribute("style", `width: ${widthHeight}px; height: ${widthHeight}px;`);
            panel.addEventListener("mousedown", ()=>{
                let randomRGB = Math.floor(Math.random()*256);
                let randomRGB2 = Math.floor(Math.random()*256);
                let randomRGB3 = Math.floor(Math.random()*256);
                panel.style.backgroundColor = `rgb(${randomRGB}, ${randomRGB2}, ${randomRGB3})`;
            })
            panel.addEventListener("click", ()=>{
                panel.style.backgroundColor = "white";
            })
            sketchGrid.appendChild(panel);
        }
    }
}


let newGridBtn = document.querySelector("#newGridBtn");
newGridBtn.addEventListener("click", function gridPrompt(){
    let pixels = prompt("What size grid would you like? Min: 2  Max: 50");
    sketchGrid.setAttribute("style", `grid-template-columns:  repeat(${pixels}, 1fr); grid-template-rows: repeat(${pixels}, 1fr);`);
    if (pixels >= 2 && pixels <= 50){
        createGrid(pixels);
    } else {
        gridPrompt();
    }
});



