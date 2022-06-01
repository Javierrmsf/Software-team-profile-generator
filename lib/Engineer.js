

class Engineer {

    constructor (name, id, email, role, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.github = github;
    }
    
    getName() {
        return this.name;
    }

    getId() {
        return this.id;

    }
    
    getRole() {
         return "Engineer";
    }

    getGithub(){
        return this.github;
    }

    getEmail(){
        return this.email;
    }

    getOfficeNumber () {
        return this.office;
    }

    getSchool () {
        return this.school;
    }
}    

module.exports = Engineer;