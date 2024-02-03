import inquirer from "inquirer";
import { sum, subtraction, multiply, division, Percentage, modulus, square, cube, sqrt, cbrt, Factorial, absoluteValue, log, Sin, Cos, Tan, generateRandomNumber } from "./functions.js";
import showBanner from "node-banner";
import gradient from "gradient-string";
let answers = [
    {
        name: "num1",
        type: "number",
        message: gradient.rainbow("Enter First Number:"),
        validate: (userInput) => {
            if (!(userInput)) {
                console.log("Enter Number");
            }
            return true;
        }
    },
    {
        name: "Operations",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division", "percentage", "modulus", "randomNumber", "square", "cube", "squareRoot", "cubeRoot", "factorial", "absolute", "logarithm", "sin", "cos", "tan"],
        message: gradient.rainbow("Choose Operation:")
    }
];
(async () => {
    await showBanner('Calculator', 'This Calculator can perform addition, subtraction, multiplication, division, percentage,tsc  modulus square, cube, squareRoot, cubeRoot, factorial, absolute, logarithm, sin, sos, tan, GenerateRandomNumber', "red", "blue");
})();
let answer = [
    {
        name: "again",
        type: "confirm",
        message: "Do you want calculation again?"
    }
];
let conversionOptions = [
    {
        name: "conversion",
        type: "list",
        choices: ["Degrees", "Radians"],
        message: "Choose unit for the result:",
    }
];
async function Calculator() {
    let condition = true;
    while (condition) {
        let { num1, Operations } = await inquirer.prompt(answers);
        let num2 = null;
        // Check if the operation requires a second number
        if (["addition", "subtraction", "multiplication", "division", "percentage", "modulus", "randomNumber"].includes(Operations)) {
            let secondNum = await inquirer.prompt({
                name: "num2",
                type: "number",
                message: gradient.rainbow("Enter Second Number:")
            });
            num2 = secondNum.num2 || 0;
        }
        switch (Operations) {
            case "addition":
                console.log(`Applying Addition \n ${num1} + ${num2} =`, sum(num1, num2));
                break;
            case "subtraction":
                console.log(`Applying Subtraction \n ${num1} - ${num2} =`, subtraction(num1, num2));
                break;
            case "multiplication":
                console.log(`Applying Multiplication \n ${num1} * ${num2} =`, multiply(num1, num2));
                break;
            case "division":
                console.log(`Applying Division \n ${num1} / ${num2} =`, division(num1, num2));
                break;
            case "percentage":
                console.log(`Find Percentage \n ${num1} %  ${num2} =`, Percentage(num1, num2));
                break;
            case "modulus":
                console.log(`The remainder when ${num1} is divided by ${num2} = `, modulus(num1, num2));
                break;
            case "randomNumber":
                console.log(`Generating a random number between ${num1} and ${num2}:`, generateRandomNumber(num1, num2));
                break;
            case "square":
                console.log(`The square of ${num1} ^ 2 = `, square(num1));
                break;
            case "cube":
                console.log(`The cube of ${num1} ^ 3 = `, cube(num1));
                break;
            case "squareRoot":
                console.log(`The square root of the number ${num1} = `, sqrt(num1));
                break;
            case "cubeRoot":
                console.log(`The cube root of the number ${num1} =`, cbrt(num1));
                break;
            case "factorial":
                console.log(`The factorial of ${num1} = `, Factorial(num1));
                break;
            case "absolute":
                console.log(`The absolute value of ${num1} = `, absoluteValue(num1));
                break;
            case "logarithm":
                console.log(`The absolute value of ${num1} = `, log(num1));
                break;
            // case "sin":
            //     console.log(`The sine of ${num1} degrees = `, Sin(num1));
            //     console.log(`The sine of ${num1} radians = `, Sin(num1, false));
            //     break;
            case "sin":
                let { conversion: sinConversion } = await inquirer.prompt(conversionOptions);
                const sinResult = Sin(num1);
                if (sinConversion === "Degrees") {
                    console.log(`The sine of ${num1} degrees = ${sinResult.degrees}`);
                }
                else if (sinConversion === "Radians") {
                    console.log(`The sine of ${num1} radians = ${sinResult.radians}`);
                }
                break;
            case "cos":
                let { conversion: cosConversion } = await inquirer.prompt(conversionOptions);
                const cosResult = Cos(num1);
                if (cosConversion === "Degrees") {
                    console.log(`The sine of ${num1} degrees = ${cosResult.degrees}`);
                }
                else if (cosConversion === "Radians") {
                    console.log(`The sine of ${num1} radians = ${cosResult.radians}`);
                }
                break;
            case "tan":
                let { conversion: tanConversion } = await inquirer.prompt(conversionOptions);
                const tanResult = Tan(num1);
                if (tanConversion === "Degrees") {
                    console.log(`The sine of ${num1} degrees = ${tanResult.degrees}`);
                }
                else if (tanConversion === "Radians") {
                    console.log(`The sine of ${num1} radians = ${tanResult.radians}`);
                }
                break;
            default:
                console.log("Invalid operation");
        }
        let { again } = await inquirer.prompt(answer);
        condition = again;
    }
}
setTimeout(() => {
    Calculator();
}, 1000);
// tsc && node index.js
