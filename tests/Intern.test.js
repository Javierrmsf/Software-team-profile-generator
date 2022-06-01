const Intern = require("../lib/Intern");

//name tests
test('checks the Intern name from a given object', () => {
    let JohnLennon = new Intern ("John",7,"JohnLennon@gmail.com",)
    
    expect(JohnLennon.name).toBe("John")
    
   
   
   });
   
   
   test('tests getName()', () => {
       let JohnLennon = new Intern ("John Lennon",7,"JohnLennon@gmail.com",)
   
   expect(JohnLennon.getName()).toBe("John Lennon")
   
   });
   
   
   //id tests
   
   test('checks the Intern ID from a given object', () => {
       let JohnLennon = new Intern ("John Lennon",7,"JohnLennon@gmail.com",)
       
       expect(JohnLennon.id).toBe(7)
       
      });
      
   test('tests getId()', () => {
       let JohnLennon = new Intern ("John Lennon",7,"JohnLennon@gmail.com",)
   
       expect(JohnLennon.getId()).toBe(7)
   
       });
   
   //Email testes
   
   test('checks the Intern email from a given object', () => {
       let JohnLennon = new Intern ("John Lennon",7,"JohnLennon@gmail.com",)
       
       expect(JohnLennon.email).toBe("JohnLennon@gmail.com")
       
      });
      
   test('tests getEmail()', () => {
       let JohnLennon = new Intern ("John Lennon",7,"JohnLennon@gmail.com",)
   
       expect(JohnLennon.getEmail()).toBe("JohnLennon@gmail.com")
   
       });
   
   
       //role
   
       ///This is an interesting part because first I'm testing the object as if I selected "Intern in inquirer menu"
   
    test('checks the Intern role from a given object', () => {
           let JohnLennon = new Intern ("John Lennon",7,"JohnLennon@gmail.com","Intern")
           
           expect(JohnLennon.role).toBe("Intern")
           
          });
   
   ///Here, as instructed by the homework, even if the object has a different role that isn't Intern, getRole() will return a string that says "Intern"
   
    test('tests getRole()', () => {
           let JohnLennon = new Intern ("John Lennon",7,"JohnLennon@gmail.com", "Guitarrist")
       
           expect(JohnLennon.getRole()).toBe("Intern")
       
           });
   
   
   test('checks the github from a given object', () => {
       let JohnLennon = new Intern ("John Lennon",7,"JohnLennon@gmail.com","Intern","University of Texas")
       
       expect(JohnLennon.school).toBe("University of Texas")
       
      });
      
       ////this part checks the office number formula, it returns nothing because the intern object doesn't have an github account
   test('tests getGithub()', () => {
       let JohnLennon = new Intern ("John Lennon",7,"JohnLennon@gmail.com","Intern","University of Texas")
   
       expect(JohnLennon.getGithub()).toBe()
   
       });
   
   
     ////this part checks the office number formula, it returns nothing because the engineer object doesn't have an office
      
   
    test('tests getOfficeNumber()', () => {
       let JohnLennon = new Intern ("John Lennon",7,"JohnLennon@gmail.com","Intern", "University of Texas")
       
       expect(JohnLennon.getOfficeNumber()).toBe()
       
       });
   
         
      test('tests getSchool()', () => {
        let JohnLennon = new Intern ("John Lennon",7,"JohnLennon@gmail.com","Intern","University of London")
           
        expect(JohnLennon.getSchool()).toBe("University of London")
           
        });