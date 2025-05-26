function isNonEmptyStringArray (arr: unknown) : arr is string[] {
    return Array.isArray(arr) && arr.length >= 1 && arr.every(el => typeof el === 'string')
}

let arg : unknown = ['1', '2'];

    if(isNonEmptyStringArray(arg)) {
        console.log(arg.length);
    }

