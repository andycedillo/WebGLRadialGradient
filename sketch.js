let X = 1;
let Y = 2;
let b1, b2, c1, c2;



function setup() {
    createCanvas(1920, 1080);

    //Colors 
    col1 = color(0);
    col2 = color(255);


}

function draw() {
    background(0);

    radialGradient(mouseX, mouseY, 0, 2 * width / 7, 2 * height, col2, col1);
    textStyle(BOLD);
    textSize(80);
    fill(0);
    text('Hello World', width / 2 - 300, height / 2);
}

function radialGradient(x, y, start, w, h, c1, c2) {
    noFill();

    //Ending at the starting point+width 
    for (let i = start; i <= w; i++) {

        //Mapping i to a new range of 0-1
        let inter = map(i, start, w, 0, 1.5);

        //lerpColor(color1, color2, amt) - blends two colors and finds the color between them 
        //amt - number between 0-1, the amount to interpolate between the two colors 
        let c = lerpColor(c1, c2, inter);

        //Drawing a line with that color 
        stroke(c);
        ellipse(x, y, i, i);
        //drawingContext.filter = 'blur(0.5px)';
    }
}
