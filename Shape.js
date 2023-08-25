class Shape {
    //tskakes in the user input for the text and shape
    constructor(text, textColor, shape, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
        //checks for the chosen shape to set for the svg code
        if (shape === "Triangle") {
            this.shape = `polygon points="150,20 250,180 50,180"`
        }
        else if (shape === "Square") {
            this.shape = `rect x="75" y="50" width="150" height="100"`
        }
        else {
            this.shape = `circle cx="150" cy="100" r="50"`
        };
    };

    // creates the shape and text for the logo
    shapeGenerator() {
        var svgCode = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <${this.shape} fill="${this.shapeColor}" />
            <text x="150" y="100" text-anchor="middle" alignment-baseline="central" fill="${this.textColor}" font-size="16">
                ${this.text}
            </text>
        </svg>
        `;

        return svgCode
    };
};

module.exports = Shape;