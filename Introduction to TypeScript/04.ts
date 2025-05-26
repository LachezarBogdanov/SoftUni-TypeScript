function convertArrays (data: string[]) : [ string, number ] {

    const wordStr = data.join('');
    const wordLength = wordStr.length;

    return [wordStr, wordLength];
}

console.log(convertArrays(['How', 'are', 'you?']));
