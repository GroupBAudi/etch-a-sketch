// Initial setup
const container = document.querySelector(".container");

function grid (count) {
    for (let i = 0; i < count; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "grid-row");
        container.appendChild(row);
        for (let j = 0 ; j < count; j++) {
            const box = document.createElement("div");
            box.setAttribute("class", "box");
            row.appendChild(box);
        }
    }
}

grid(16);

// random color generator

let random = (number) => {
    return Math.floor(Math.random() * (number + 1))
}



const newGrid = document.querySelector(".newGrid"); // selects the button
newGrid.addEventListener("click", (event) => {  // adds function for creating new x by x grid, x is represented by newGrid
        let newGrid = parseInt(prompt("How many grid? (Maximum of 100 blin)"));
        container.querySelectorAll(".grid-row").forEach((element) => {
            element.remove();
        })
        if (newGrid > 100) {
            console.error("Can't. Muh pc can't handle this 😭")
        } else {
        for (let i = 0; i < newGrid; i++) {
            const row = document.createElement("div");
            row.setAttribute("class", "grid-row");
            container.appendChild(row);
            for (let j = 0 ; j < newGrid; j++) {
                const box = document.createElement("div");
                box.setAttribute("class", "box");
                row.appendChild(box);
            }
            
        }
        const boxHover = document.querySelectorAll(".box");
        boxHover.forEach((element) => {
            element.addEventListener("mouseover", (event) => {
                const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
                element.style.backgroundColor = randomColor;
            })
        })

    }       
})

const boxHover = document.querySelectorAll(".box");
boxHover.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
        const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        element.style.backgroundColor = randomColor;
    })
})
