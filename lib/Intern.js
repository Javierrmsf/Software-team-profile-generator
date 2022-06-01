
class Intern {

    constructor (name, id, email,role, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = school;
    }
    
    getName() {
        return this.name;
    }

    getId() {
        return this.id;

    }
    
    getRole() {
         return "Intern";
    }

    getSchool(){
        return this.school;
    }

    getEmail(){
        return this.email;
    }

    getOfficeNumber(){
        return this.office;
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Intern;