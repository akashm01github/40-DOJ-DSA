const prompt = require("prompt-sync")();

let choice = prompt("Write Your Choise: ").toLowerCase();

switch (choice) {
  case "circle":
    let r = Number(prompt("Enter the Radius: "));

    let area = Math.PI * (r * r);
    console.log(area.toFixed(2));
    break;

  case "rectangle":
    let w = Number(prompt("Enter the Width: "));
    let l = Number(prompt("Enter the Length: "));
    let areaofrectangle = w * l;
    console.log(`The Area = ${areaofrectangle}`);
    break;

  case "triangle":
    let base = Number(prompt("Enter the Base: "));
    let height = Number(prompt("Enter the Height: "));
    let areaOFtriangle = 0.5 * (base * height);
    console.log(`The Area = ${areaOFtriangle}`);
    break;
  default:
    console.log("Invalid Choise.Please enter the right option");
}
