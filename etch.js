const grid = document.querySelector("#container");
const body = document.querySelector("body");
let redRandom;
let greenRandom;
let blueRandom;

const gridButton = document.createElement("button");
gridButton.classList.add("btn");
gridButton.textContent = "New Grid";

body.insertBefore(gridButton, body.firstChild);

gridButton.addEventListener("click", () => {
    let userSize = prompt("Give me a number");

    if (userSize > 0 && userSize <= 100) {

        Array.from(grid.children).forEach(child => {
            child.remove();
        });

        for (let i = 0; i < userSize; i++) {
            const row = document.createElement("div");
            row.classList.add("row");

            for (let j = 0; j < userSize; j++) {
                const square = document.createElement("div");
                square.classList.add("square");
                square.style.opacity = 0;
                row.appendChild(square);

                square.addEventListener("mouseenter", () => {
                    redRandom = Math.floor(Math.random() * 255);
                    greenRandom = Math.floor(Math.random() * 255);
                    blueRandom = Math.floor(Math.random() * 255);

                    square.style.opacity = parseFloat(square.style.opacity) + .1;
                    square.style.background = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`;
                });
            }

            grid.appendChild(row);
        }
    } else {
        alert("Number must be between 1 and 100");
    }
});

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.opacity = 0;
        row.appendChild(square);

        square.addEventListener("pointermove", () => {
            redRandom = Math.floor(Math.random() * 255);
            greenRandom = Math.floor(Math.random() * 255);
            blueRandom = Math.floor(Math.random() * 255);

            square.style.opacity = parseFloat(square.style.opacity) + .1;
            square.style.background = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`;
        });

    }

    grid.appendChild(row);
}

