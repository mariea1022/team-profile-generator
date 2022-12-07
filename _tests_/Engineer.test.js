const Engineer = require("../lib/Engineer")

describe('Engineer class', () => {
    describe('Constructor', () => {
        it('should create an Engineer object', () => {
            // arange
            const engineer = new Engineer ('Holly', 1234, 'holly@abcd.com', 'hollyDev');

            // act & assert
            expect(engineer.name).toEqual(expect.any(String));
            expect(engineer.id).toEqual(expect.any(Number));
            expect(engineer.email).toEqual(expect.any(String));
        });
            // gets emails from getEmail()
            it('should get Engineer GitHub', () => {
                // arrange
                const engineer = new Engineer ('Holly', 1234, 'holly@abcd.com', 'hollyDev');
                
                // act & assert
                expect(engineer.github).toEqual(expect.any(String));
        });
            // gets role from getRole()
            it('should get role of employee', () => {
            // arrange
                const engineer = new Engineer ('Holly', 1234, 'holly@abcd.com', 'hollyDev');
                
                // act & assert
                expect(engineer.getRole()).toEqual("Engineer");
        })
    })
})