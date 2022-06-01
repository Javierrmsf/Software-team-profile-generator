const Engineer = require("../lib/Engineer");


//name tests
test('checks the Engineer name from a given object', () => {
 let JohnLennon = new Engineer ("John",7,"JohnLennon@gmail.com",)
 
 expect(JohnLennon.name).toBe("John")
 


});


test('tests getName()', () => {
    let JohnLennon = new Engineer ("John Lennon",7,"JohnLennon@gmail.com",)

expect(JohnLennon.getName()).toBe("John Lennon")

});


//id tests

test('checks the Engineer ID from a given object', () => {
    let JohnLennon = new Engineer ("John Lennon",7,"JohnLennon@gmail.com",)
    
    expect(JohnLennon.id).toBe(7)
    
   });
   
test('tests getId()', () => {
    let JohnLennon = new Engineer ("John Lennon",7,"JohnLennon@gmail.com",)

    expect(JohnLennon.getId()).toBe(7)

    });

//Email testes

test('checks the Engineer email from a given object', () => {
    let JohnLennon = new Engineer ("John Lennon",7,"JohnLennon@gmail.com",)
    
    expect(JohnLennon.email).toBe("JohnLennon@gmail.com")
    
   });
   
test('tests getEmail()', () => {
    let JohnLennon = new Engineer ("John Lennon",7,"JohnLennon@gmail.com",)

    expect(JohnLennon.getEmail()).toBe("JohnLennon@gmail.com")

    });


    //role

    ///This is an interesting part because first I'm testing the object as if I selected "Engineer in inquirer menu"

 test('checks the Engineer role from a given object', () => {
        let JohnLennon = new Engineer ("John Lennon",7,"JohnLennon@gmail.com","Engineer")
        
        expect(JohnLennon.role).toBe("Engineer")
        
       });

///Here, as instructed by the homework, even if the object has a different role that isn't Engineer, getRole() will return a string that says "Engineer"

 test('tests getRole()', () => {
        let JohnLennon = new Engineer ("John Lennon",7,"JohnLennon@gmail.com", "Guitarrist")
    
        expect(JohnLennon.getRole()).toBe("Engineer")
    
        });


test('checks the github from a given object', () => {
    let JohnLennon = new Engineer ("John Lennon",7,"JohnLennon@gmail.com","Engineer","Johnlennon22")
    
    expect(JohnLennon.github).toBe("Johnlennon22")
    
   });
   
test('tests getGithub()', () => {
    let JohnLennon = new Engineer ("John Lennon",7,"JohnLennon@gmail.com","Engineer","Johnlennon22")

    expect(JohnLennon.getGithub()).toBe("Johnlennon22")

    });



    ////this part checks the office number formula, it returns nothing because the engineer object doesn't have an office number

 test('tests getOfficeNumber()', () => {
    let JohnLennon = new Engineer ("John Lennon",7,"JohnLennon@gmail.com","Engineer","Johnlennon22")
    
    expect(JohnLennon.getOfficeNumber()).toBe()
    
    });

      ////this part checks the office number formula, it returns nothing because the engineer object doesn't have a school
   test('tests getSchool()', () => {
     let JohnLennon = new Engineer ("John Lennon",7,"JohnLennon@gmail.com","Engineer","Johnlennon22")
        
     expect(JohnLennon.getSchool()).toBe()
        
     });