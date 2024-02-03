export function sum(a:number, b:number) {
    return a+b
}
export function subtraction(a:number, b:number) {
    return a-b
}
export function multiply(a:number, b:number) {
    return a*b
}
export function division(a:number, b:number) {
    return a/b
}
export function Percentage(a:number, b:number) {
    let result:number= (a/b) * 100 
    return result
}
export function modulus(a:number, b:number) {
    return a % b
}
export function square(a:number) {
    return Math.pow(a , 2)
}
export function cube(a:number) {
    return Math.pow(a, 3)
}
export function sqrt(a:number) {
    return Math.sqrt(a)
}
export function cbrt(a:number) {
    return Math.cbrt(a)
}
export function Factorial(a: number):number{
    if (a === 0 || a === 1) {
        return 1;
    }
    return a * Factorial(a - 1);
}
export function absoluteValue(a: number){
    return Math.abs(a);
}
export function log(a: number){
    return Math.log10(a);
}
// export function Sin(a: number){
//     return Math.sin(a * (Math.PI/180));
// }
// export function Sin(value: number, isDegree: boolean = true): number {
//     const angle = isDegree ? value * (Math.PI / 180) : value;
//     return Math.sin(angle);
// }
export function Sin(angle: number, isDegrees: boolean = true): { degrees: number, radians: number } {
    const radians = isDegrees ? angle * (Math.PI / 180) : angle;
    const degrees = isDegrees ? angle : angle * (180 / Math.PI);
    return { degrees, radians };
}
export function Cos(angle: number, isDegrees: boolean = true): { degrees: number, radians: number } {
    const radians = isDegrees ? angle * (Math.PI / 180) : angle;
    const degrees = isDegrees ? angle : angle * (180 / Math.PI);
    return { degrees, radians };
}
export function Tan(angle: number, isDegrees: boolean = true): { degrees: number, radians: number } {
    const radians = isDegrees ? angle * (Math.PI / 180) : angle;
    const degrees = isDegrees ? angle : angle * (180 / Math.PI);
    return { degrees, radians };
}
export function generateRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

