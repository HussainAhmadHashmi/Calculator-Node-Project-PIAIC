export function sum(a, b) {
    return a + b;
}
export function subtraction(a, b) {
    return a - b;
}
export function multiply(a, b) {
    return a * b;
}
export function division(a, b) {
    return a / b;
}
export function Percentage(a, b) {
    let result = (a / b) * 100;
    return result;
}
export function modulus(a, b) {
    return a % b;
}
export function square(a) {
    return Math.pow(a, 2);
}
export function cube(a) {
    return Math.pow(a, 3);
}
export function sqrt(a) {
    return Math.sqrt(a);
}
export function cbrt(a) {
    return Math.cbrt(a);
}
export function Factorial(a) {
    if (a === 0 || a === 1) {
        return 1;
    }
    return a * Factorial(a - 1);
}
export function absoluteValue(a) {
    return Math.abs(a);
}
export function log(a) {
    return Math.log10(a);
}
// export function Sin(a: number){
//     return Math.sin(a * (Math.PI/180));
// }
// export function Sin(value: number, isDegree: boolean = true): number {
//     const angle = isDegree ? value * (Math.PI / 180) : value;
//     return Math.sin(angle);
// }
export function Sin(angle, isDegrees = true) {
    const radians = isDegrees ? angle * (Math.PI / 180) : angle;
    const degrees = isDegrees ? angle : angle * (180 / Math.PI);
    return { degrees, radians };
}
export function Cos(angle, isDegrees = true) {
    const radians = isDegrees ? angle * (Math.PI / 180) : angle;
    const degrees = isDegrees ? angle : angle * (180 / Math.PI);
    return { degrees, radians };
}
export function Tan(angle, isDegrees = true) {
    const radians = isDegrees ? angle * (Math.PI / 180) : angle;
    const degrees = isDegrees ? angle : angle * (180 / Math.PI);
    return { degrees, radians };
}
export function generateRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
