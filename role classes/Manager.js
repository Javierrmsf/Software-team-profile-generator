
class Manager {

    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officenumber = this.officenumber;
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
        return this.officenumber;
    }

    getEmail(){
        return this.email;
    }
}