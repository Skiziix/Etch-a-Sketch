let canvas = document.querySelector(".etchasketch");

let numSquares = 5;

for (row=0; row<numSquares; row++) {
    for (square=0; square<numSquares; square++) {
        let pixel = document.createElement("div");
        pixel.className = ".pixel";
        pixel.style.width = `${300 / numSquares}px`;
        pixel.style.height = `${300 / numSquares}px`;

        canvas.appendChild(pixel);
    }
}