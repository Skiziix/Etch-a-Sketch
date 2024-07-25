let canvas = document.querySelector(".etchasketch");

let numSquares = 5;
let squareDimension = 300 / numSquares;

for (row=0; row<numSquares; row++) {
    for (square=0; square<numSquares; square++) {
        let pixel = document.createElement("div");
        pixel.className = ".pixel";
        pixel.style.width = `${squareDimension}px`;
        pixel.style.height = `${squareDimension}px`;

        canvas.appendChild(pixel);
    }
}