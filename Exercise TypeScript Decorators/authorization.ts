export {};

function authorizeCheck(authService: MockAuthrizationService) {
    return function(target: any, accesorName: string, descriptor: PropertyDescriptor) {
        const originalGetter = descriptor.get;

        descriptor.get = function() {
            const hasAccess = authService.canViewData(accesorName);

            if(!hasAccess) {
                throw new Error('You are not authorized to view this information!')
            } else {
                const val = originalGetter?.call(this);
                return val;
            }
        }

        return descriptor;
    }
}

class MockAuthrizationService {

    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') { }

    canViewData(property: string) {
        switch (this.userRole) {
        case 'Admin': return true;
        case 'PersonalDataAdministrator': return ['name', 'age'].includes(property);
        default: return false;
    }

}
}

let mockAuthorizationService = new MockAuthrizationService('Admin');

class User {
    private _name: string;
    private _age: number;
    private _creditCardNumber: string;

    constructor(name: string, age: number, creditCardNum: string) {
        this._name = name;
        this._age = age;
        this._creditCardNumber = creditCardNum;
    }

    @authorizeCheck(mockAuthorizationService)
    get name() {
        return this._name;
    }

    @authorizeCheck(mockAuthorizationService)
    get age() {
        return this._age;
    }

    @authorizeCheck(mockAuthorizationService)
    get creditCardNumber() {
        return this._creditCardNumber;
    }
}


const user1 = new User("John Doe", 30, 'ABCD-1234');

console.log(user1.name)
console.log(user1.age);
console.log(user1.creditCardNumber);