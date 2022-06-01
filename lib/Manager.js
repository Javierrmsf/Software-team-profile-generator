
class Manager {

    constructor (name, id, email, role, office){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.office = office;
    }
    
    getName() {
        return this.name;
    }

    getId() {
        return this.id;

    }
    
    getRole() {
         return "Manager";
    }

    getOfficeNumber(){
        return this.office;
    }

    getEmail(){
        return this.email;
    }

    getGithub(){
        return this.github;
    }
    
    getSchool(){
        return this.school;
    }

}

module.exports = Manager;