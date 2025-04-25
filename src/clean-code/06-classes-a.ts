(() => {


    type Gender = 'M' | 'F';
    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthday: Date
        ) { }
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            public name: string,
            public gender: Gender,
            public birthday: Date
        ) {
            super(name, gender, birthday);
            this.lastAccess = new Date()
        }

        checkCredentials(): boolean {
            return true;
        }

    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenedFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthday: Date
        ) { super(email, role, name, gender, birthday) }
    }

    const userSettings = new UserSettings(
        "/usr/home",
        "/home",
        "/fernando@google.com",
        "Admin",
        "Fernando",
        "M",
        new Date('1985-10-21')
    );

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });

})();