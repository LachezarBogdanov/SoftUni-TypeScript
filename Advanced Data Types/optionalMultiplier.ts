function multiplier (param1?: string | number, param2?: string | number, param3?: string | number ) {
    let num1 = param1 ? Number(param1) : 1;
    let num2 = param2 ? Number(param2) : 1;
    let num3 = param3 ? Number(param3) : 1;

    return num1 * num2 * num3;
}

console.log(multiplier('3', 5, '10'));
console.log(multiplier('2','2'));
console.log(multiplier(undefined, 2, 3));
console.log(multiplier(7, undefined, '2'));
console.log(multiplier());