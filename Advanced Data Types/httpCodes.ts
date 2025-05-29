function httpCodes(httpInput: {code: 200 | 201 | 301 | 400 | 404 | 500, text: string, printChars?: number}) {
    if('printChars' in httpInput) {
        const strResult = httpInput.text.slice(0, httpInput.printChars);
        
        console.log(strResult);    
    } else {
        console.log(httpInput.text);
        
    }   
}

httpCodes({ code: 200, text: 'OK'})
httpCodes({ code: 201, text: 'Created'})
httpCodes({ code: 400, text: 'Bad Request', printChars: 4})