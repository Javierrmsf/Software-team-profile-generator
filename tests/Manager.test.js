const Manager = require("../lib/Manager");


//name tests
test('checks the Manager name from a given object', () => {
    let JohnLennon = new Manager ("John",7,"JohnLennon@gmail.com",)
    
    expect(JohnLennon.name).toBe("John")
    
   
   
   });
   
   
   test('tests getName()', () => {
       let JohnLennon = new Manager ("John Lennon",7,"JohnLennon@gmail.com",)
   
   expect(JohnLennon.getName()).toBe("John Lennon")
   
   });
   
   
   //id tests
   
   test('checks the Manager ID from a given object', () => {
       let JohnLennon = new Manager ("John Lennon",7,"JohnLennon@gmail.com",)
       
       expect(JohnLennon.id).toBe(7)
       
      });
      
   test('tests getId()', () => {
       let JohnLennon = new Manager ("John Lennon",7,"JohnLennon@gmail.com",)
   
       expect(JohnLennon.getId()).toBe(7)
   
       });
   
   //Email testes
   
   test('checks the Manager email from a given object', () => {
       let JohnLennon = new Manager ("John Lennon",7,"JohnLennon@gmail.com",)
       
       expect(JohnLennon.email).toBe("JohnLennon@gmail.com")
       
      });
      
   test('tests getEmail()', () => {
       let JohnLennon = new Manager ("John Lennon",7,"JohnLennon@gmail.com",)
   
       expect(JohnLennon.getEmail()).toBe("JohnLennon@gmail.com")
   
       });
   
   
       //role
   
       ///This is an interesting part because first I'm testing the object as if I selected "Manager in inquirer menu"
   
    test('checks the Manager role from a given object', () => {
           let JohnLennon = new Manager ("John Lennon",7,"JohnLennon@gmail.com","Manager")
           
           expect(JohnLennon.role).toBe("Manager")
           
          });
   
   ///Here, as instructed by the homework, even if the object has a different role that isn't Manager, getRole() will return a string that says "Manager"
   
    test('tests getRole()', () => {
           let JohnLennon = new Manager ("John Lennon",7,"JohnLennon@gmail.com", "Guitarrist")
       
           expect(JohnLennon.getRole()).toBe("Manager")
       
           });
   
   
   test('checks the office from a given object', () => {
       let JohnLennon = new Manager ("John Lennon",7,"JohnLennon@gmail.com","Manager","1266")
       
       expect(JohnLennon.office).toBe("1266")
       
      });
      
       ////this part checks the office number formula, it returns nothing because the Manager object doesn't have a github account
   test('tests getGithub()', () => {
       let JohnLennon = new Manager ("John Lennon",7,"JohnLennon@gmail.com","Manager","1266")
   
       expect(JohnLennon.getGithub()).toBe()
   
       });
   
   
   
      
   
    test('tests getOfficeNumber()', () => {
       let JohnLennon = new Manager ("John Lennon",7,"JohnLennon@gmail.com","Manager","1266")
       
       expect(JohnLennon.getOfficeNumber()).toBe("1266")
       
       });
   
         ////this part checks the office number formula, it returns nothing because the engineer object doesn't have an office  
      test('tests getSchool()', () => {
        let JohnLennon = new Manager ("John Lennon",7,"JohnLennon@gmail.com","Manager","1266")
           
        expect(JohnLennon.getSchool()).toBe()
           
        });