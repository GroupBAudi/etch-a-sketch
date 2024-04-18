// Initial setup
let div = ""; 
let divRow = "";
for (let j = 1; j <= 16; j++) {
    div += `<div class="box"></div>`
} 
for (let i = 1; i <= 16; i++) {
    divRow += `<div class="grid-row">${div}</div>`  
}

const container = document.querySelector(".container");
container.innerHTML = divRow;

/* Apparently each time innerHTML is set, it's parsed repeatedly.
    Essentially, if we modify innerHTML in a loop, DOM is discarded and markup
    is re-parsed for every iteration. Therefore, we build the entire markup as a 
    string first and set innerHTML once
*/

let random = (number) => {
    return Math.floor(Math.random() * (number + 1))
}

const boxHover = document.querySelectorAll(".box");
boxHover.forEach((element) => {
    element.addEventListener("mouseenter", (event) => {
        const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        element.style.backgroundColor = randomColor;
    })
})

const newGrid = document.querySelector(".newGrid"); // selects the button
newGrid.addEventListener("click", (event) => {  // adds function for creating new x by x grid, x is represented by newGrid
        let newGrid = parseInt(prompt("How many grid? (Maximum of 100 blin)"));
        if (newGrid > 100) {
            console.error("Can't. Muh pc can't handle this 😭")
        } else {
            let div = ""; 
            let divRow = "";
            for (let j = 1; j <= newGrid; j++) {
                div += `<div class="box"></div>`
            }
            for (let i = 1; i <= newGrid; i++) {
                divRow += `<div class="grid-row">${div}</div>` 
            }
            container.innerHTML = divRow;
        }       
})


