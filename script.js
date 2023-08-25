const inquier = require("inquirer");
const fs = require("fs");
const Shape = require("./Shape");
//prompts for user input in the svg file
const svgPrompts = [
    {
        type: "input",
        message:"Enter Text.",
        name: "text"
    },
    {
        type: "input",
        message:"Enter text color.",
        name: "textColor"
    },
    {
        type: "rawlist",
        message:"Select a shape.",
        choices: ["Circle", "Triangle", "Square"],
        name: "shapet"
    },
    {
        type: "input",
        message:"Enter shape color.",
        name: "shapeColor"
    }
];
//creates the svg file that will hold the logo
function svgLogo() {
    inquier.prompt(svgPrompts)
    .then((response) => {
        let userShape = new Shape(response.text, response.textColor, response.shape, response.shaprColor)
        let generateShape = userShape.shapeGenerator()
        fs.writeFileSync("logo.svg", generateShape)
    })
};
//runs the svgLogo function
function init() {
    svgLogo()
};

init()
