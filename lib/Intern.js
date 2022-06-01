
class Intern {

    constructor (name, id, email, school){
        this.name = name;
        this.id = id;
        this.email = email;
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
}

module.exports = Intern;