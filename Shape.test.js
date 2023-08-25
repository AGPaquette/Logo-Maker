const Shape = require("./Shape");

describe("shape", () => {
    //test for circle svg code
    describe("circle", () => {
        const testPromptCircle = {
             text: "AG",
             textColor: "red",
             shape: "Circle", 
             shapeColor: "blue"
        }
        const answerCircle = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="50" fill="blue" />
            <text x="150" y="100" text-anchor="middle" alignment-baseline="central" fill="red" font-size="16">
                AG
            </text>
        </svg>
        `

        it("Should take in the user input and return a circle with centered text", () => {
            const circle = new Shape(testPromptCircle.text, testPromptCircle.textColor, testPromptCircle.shape, testPromptCircle.shapeColor)
            expect(circle.shapeGenerator()).toEqual(answerCircle)
        })
    });
    //test for triangle svg code
    describe("triangle", () => {
        const testPromptTriangle = {
             text: "SF",
             textColor: "green",
             shape: "Triangle", 
             shapeColor: "red"
        }
        const answerTriangle = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,20 250,180 50,180" fill="red" />
            <text x="150" y="100" text-anchor="middle" alignment-baseline="central" fill="green" font-size="16">
                SF
            </text>
        </svg>
        `

        it("Should take in the user input and return a triangle with centered text", () => {
            const triangle = new Shape(testPromptTriangle.text, testPromptTriangle.textColor, testPromptTriangle.shape, testPromptTriangle.shapeColor)
            expect(triangle.shapeGenerator()).toEqual(answerTriangle)
        })
    });
    //test for square svg code
    describe("square", () => {
        const testPromptSquare = {
             text: "MS",
             textColor: "yellow",
             shape: "Square", 
             shapeColor: "black"
        }
        const answerSquare = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="75" y="50" width="150" height="100" fill="black" />
            <text x="150" y="100" text-anchor="middle" alignment-baseline="central" fill="yellow" font-size="16">
                MS
            </text>
        </svg>
        `

        it("Should take in the user input and return a square with centered text", () => {
            const square = new Shape(testPromptSquare.text, testPromptSquare.textColor, testPromptSquare.shape, testPromptSquare.shapeColor)
            expect(square.shapeGenerator()).toEqual(answerSquare)
        })
    });
});