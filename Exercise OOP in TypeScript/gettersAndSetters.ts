class User {
    private _username!: string;

    constructor(usernameStr: string) {
        this.username = usernameStr;
    }

    get username() {
        return this._username;
    }

    set username(newUsername: string) {
        if(newUsername.length < 3) {
            throw new Error('Invalid username length');
        }

        this._username = newUsername;
    }
}

const user = new User("Martin");

user.username = "johnDoe";

console.log(user.username);