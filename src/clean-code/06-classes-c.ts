(() => {

    // Applying the principle of unique responsability
    // Favor composition over inheritance

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
        role: string;
    }

    class User{
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({email, role}: UserProps){
            this.lastAccess = new Date()
            this.email = email;
            this.role = role;
        }

        checkCredentials(): boolean {
            return true;
        }

    }

    interface SettingsProps{
        workingDirectory: string;
        lastOpenedFolder: string;
    }

    class Settings{
        public workingDirectory: string;
        public lastOpenedFolder: string;

        constructor({workingDirectory, lastOpenedFolder}:SettingsProps) { 
            this.workingDirectory = workingDirectory;
            this.lastOpenedFolder = lastOpenedFolder;
        }
    }

    interface UserSettingsProps{
        birthday: Date;
        name: string;
        gender: Gender;
        email: string;
        role: string;
        lastOpenedFolder: string;
        workingDirectory: string;
    }

    class UserSettings{

        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({name, gender, birthday, email, role, lastOpenedFolder, workingDirectory}: UserSettingsProps){
            this.person = new Person({name, gender, birthday});
            this.user = new User({email, role});
            this.settings = new Settings({lastOpenedFolder, workingDirectory});
        }
    }

    const userSettings = new UserSettings({
        birthday: new Date(),
        name: "Julian",
        gender: "F",
        email: "julian@gmail.com",
        role: "Admin",
        lastOpenedFolder: "/usr/home",
        workingDirectory: "/home"
    });

    console.log({ userSettings });

})();