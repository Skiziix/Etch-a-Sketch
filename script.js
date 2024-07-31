let canvas = document.querySelector(".etchasketch");

let numSquares = Number(prompt("Enter the grid size (Max of 100): "));
let squareDimension = 300 / numSquares;

for (row=0; row<numSquares; row++) {
    for (square=0; square<numSquares; square++) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.width = `${squareDimension}px`;
        pixel.style.height = `${squareDimension}px`;

        pixel.addEventListener("mouseover", 
            (event) => {
                event.target.className = "activated-pixel";
            }
        );

        pixel.addEventListener("contextmenu", 
            (event) => {
                event.preventDefault();
                event.target.classList.remove("activated-pixel");
            }
        );

        canvas.appendChild(pixel);
    }
}