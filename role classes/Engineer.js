

class Engineer {

    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
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
}