(() => {


    type Gender = 'M' | 'F';

    interface PersonProps{
        name: string;
        gender: Gender;
        birthday: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthday: Date;

        constructor({name, gender, birthday}: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthday = birthday;
         }
    }

    interface UserProps{
        email: string;
        gender: Gender;
        role: string;
        birthday: Date;
        name: string;
    }

    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor(
            {email,  
            role, 
            name, 
            gender,
            birthday}: UserProps
        ) {
            super({name, gender, birthday});
            this.lastAccess = new Date()
            this.email = email;
            this.role = role;
        }

        checkCredentials(): boolean {
            return true;
        }

    }

    interface UserSettingsProps{
        workingDirectory: string;
        lastOpenedFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthday: Date;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenedFolder: string;

        constructor(
            {workingDirectory,
            lastOpenedFolder,
            email,
            role,
            name,
            gender,
            birthday
        }:UserSettingsProps) { 
            super({email, role, name, gender, birthday}) 
            this.workingDirectory = workingDirectory;
            this.lastOpenedFolder = lastOpenedFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: "/usr/home",
        lastOpenedFolder: "/home",
        email: "/fernando@google.com",
        role: "Admin",
        name: "Fernando",
        gender: "M",
        birthday: new Date('1985-10-21')
    });

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });

})();