
// let names = { fName: 'John', lName: 'Doe', age: 22, getPersonInfo() { return `${this.fName} ${this.lName}, age ${this.age}` } };
// // let location = { city:'Boston', street: 'Nowhere street', number: 13, postalCode: 51225, getAddressInfo() { return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`} };


// type namesType = typeof names;
// type locationType = typeof location;

// function createCombinedFunction(name: namesType, location: locationType) {
//     return function(combinedObject: namesType & locationType) {
//         console.log(`Hello, ${combinedObject.getPersonInfo()} from ${combinedObject.getAddressInfo()}`);
        
//     }
// }

// let combinedFunction = createCombinedFunction(names, location); 
// let combinedPerson = Object.assign({}, names, location); 
// combinedFunction(combinedPerson);